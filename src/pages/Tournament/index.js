import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Matches from './Matches';
import MatchesItem from './MatchesItem';

const Tournament = () => {
  const [matches, setMatches] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const API_URL = "https://sportsbook-api.lasworks.com/api";
    const fetchHeaders = {
      "SiteId": 1,
      "Lang": "en",
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    const fetchTournament = async (TournamentId) => {
      const requestData = {
        Interval: 5,
        MarketId: null,
        Mobile: true,
        TournamentId,
      }

      const res = await fetch(`${API_URL}/prematch/tournament`, {
        "headers": fetchHeaders,
        "body": JSON.stringify(requestData),
        "method": "POST"
      })

      const data = await res.json();

      setMatches(data.Matches);
    };

    fetchTournament(id);
  }, [id]);

  return (
    <>
      <Matches>
        {matches.map((item, index) =>
          <MatchesItem key={item.Id} item={item} index={index} />
        )}
      </Matches>
    </>
  );
};

export default Tournament;

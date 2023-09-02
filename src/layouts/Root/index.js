import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Scrollbar from '../../components/Scrollbar';

import Header from '../../components/Header';
import Countries from '../../components/Countries';
import SportsCalendar from '../../components/SportsCalendar';
import Sports from '../../components/Sports';
import Betslip from '../../components/Betslip';

const Layout = () => {
  const [sports, setSports] = useState([]);
  const [currentSport, setCurrentSport] = useState(null);

  useEffect(() => {
    const API_URL = "https://sportsbook-api.lasworks.com/api";
    const fetchHeaders = {
      "SiteId": 1,
      "Lang": "en",
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    const fetchSports = async () => {
      const requestData = {Interval: 5};

      const res = await fetch(`${API_URL}/prematch/menu`, {
        "headers": fetchHeaders,
        "body": JSON.stringify(requestData),
        "method": "POST"
      })
      
      const data = await res.json();

      setSports(data.S);
      setCurrentSport(data.S[0]);
    };

    fetchSports();
  }, []);

  const handleChangeSports = (value) => {
    setCurrentSport(value);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="grow-0">
        <Header />
      </div>
      <div className="grow flex flex-row-reverse min-h-0">
        <div className="grow-0 w-288">
          <Betslip />
        </div>
        <div className="grow flex flex-col">
          <div className="grow flex min-h-0">
            <div className="grow-0 w-180">
              <Scrollbar>
                <Countries options={currentSport?.Ct || []} />
              </Scrollbar>
            </div>
            <div className="grow px-2">
              <Scrollbar>
                <Outlet />
              </Scrollbar>
            </div>
          </div>
          <div className="grow-0">
            <SportsCalendar />
            <Sports
              items={sports}
              current={currentSport}
              onChange={handleChangeSports}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
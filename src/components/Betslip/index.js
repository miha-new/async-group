import Stake from './Stake';
import Tickets from './Tickets';
import Ticket from './Ticket';

const Betslip = () => (
  <>
    <Tickets count={3}>
      <Ticket index={1} />
      <Ticket index={2} />
      <Ticket index={3} />
    </Tickets>
    <Stake />
  </>
);

export default Betslip;

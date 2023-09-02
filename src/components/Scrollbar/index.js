import 'react-perfect-scrollbar/dist/css/styles.css';
import './styles.scss';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Scrollbar = ({children}) => (
  <PerfectScrollbar>
    {children}
  </PerfectScrollbar>
);

export default Scrollbar;

import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { ReactComponent as IconSearch } from '../../assets/icon-search.svg';
import { ReactComponent as IconOutput } from '../../assets/icon-output.svg';
import { ReactComponent as IconBackward } from '../../assets/icon-backward.svg';
import { ReactComponent as IconSignOut } from '../../assets/icon-sign-out.svg';

const Header = () => (
  <header className={classes['header']}>
    <div className="flex items-center">
      <div className="grow-0">
        <Link className={classes['logo']} to="/">
          <img src={logo} alt="Tiptorro" />
        </Link>
      </div>
      <div className="grow">
        <nav className={classes['nav']}>
          <NavLink to="/">HOMEPAGE</NavLink>
          <NavLink to="/live-bets">LIVE BETS</NavLink>
          <NavLink to="/sports">SPORTS</NavLink>
          <NavLink to="/highlights">HIGHLIGHTS</NavLink>
          <NavLink to="/top-matches">TOP MATCHES</NavLink>
        </nav>
      </div>
      <div className="grow-0 flex items-center">
        <button className={classes['btn-dark']}>
          <IconSearch />
        </button>
        <button className={classes['btn-dark']}>
          <IconOutput />
        </button>
        <button className={classes['btn-dark']}>
          <IconBackward />
        </button>
        <div className={classes['panel-user']}>
          <Link to="/user/balance">800,000.00CFD</Link>
          <div className={classes['divider-small']}></div>
          <Link to="/user/profile">testuser12</Link>
        </div>
        <button className={classes['btn-withdraw']}>
          WITHDRAWAL
        </button>
        <button className={classes['btn-dark']}>
          <img src="/img/icon-england.svg" alt="" />
        </button>
        <div className={classes['divider']}></div>
        <button className={classes['btn-logout']}>
          <IconSignOut />
        </button>
      </div>
    </div>
  </header>
);

export default Header;

import classes from './CountriesInterval.module.scss';

const CountriesInterval = () => (
  <div className={classes['countries-interval']}>
    <button className={classes['countries-interval__tab']}>
      All
    </button>
    <button className={`${classes['countries-interval__tab']} ${classes['countries-interval__tab--current']}`}>
      Today
    </button>
    <button className={classes['countries-interval__tab']}>
      3 Hour
    </button>
    <button className={classes['countries-interval__tab']}>
      3 Day
    </button>
  </div>
);

export default CountriesInterval;

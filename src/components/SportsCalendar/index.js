import classes from './SportsCalendar.module.scss';

const SportsCalendar = () => (
  <div className={classes['sports-calendar']}>
    <button className={classes['sports-calendar__btn']}>
      <div className={classes['sports-calendar__btn-text']}>
        Today
      </div>
    </button>
    <button className={`${classes['sports-calendar__btn']} ${classes['sports-calendar__btn--current']}`}>
      <div className={classes['sports-calendar__btn-text']}>
        Tomorrow
      </div>
    </button>
    <button className={classes['sports-calendar__btn']}>
      <div className={classes['sports-calendar__btn-text']}>
        Sunday
      </div>
    </button>
    <button className={classes['sports-calendar__btn']}>
      <div className={classes['sports-calendar__btn-text']}>
        Monday
      </div>
    </button>
    <button className={classes['sports-calendar__btn']}>
      <div className={classes['sports-calendar__btn-text']}>
        Tuesday
      </div>
    </button>
    <button className={classes['sports-calendar__btn']}>
      <div className={classes['sports-calendar__btn-text']}>
        Weednesday
      </div>
    </button>
    <button className={classes['sports-calendar__btn']}>
      <div className={classes['sports-calendar__btn-text']}>
        Thursday
      </div>
    </button>
  </div>
);

export default SportsCalendar;

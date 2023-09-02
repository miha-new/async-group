import classes from './Stake.module.scss';
import { ReactComponent as IconBoosted } from '../../../assets/icon-boosted.svg';

const Stake = () => (
  <div className={classes['stake']}>
    <div className={classes['stake__info']}>
      <div className={classes['stake__info-title']}>
        Combine Boost
      </div>
      <div className={classes['stake__info-data']}>
        <IconBoosted />
        <span className="text-orange">154.0 EUR</span>
      </div>
    </div>
    <div className={classes['stake__info']}>
      <div className={classes['stake__info-title']}>
        Max Quote
      </div>
      <div className={classes['stake__info-data']}>
        5.70
      </div>
    </div>
    <div className={classes['stake__info']}>
      <div className={classes['stake__info-title']}>
        Limits
      </div>
      <div className={classes['stake__info-data']}>
        1 - 5.000
      </div>
    </div>
    <div className={classes['stake__info']}>
      <div className={classes['stake__info-title']}>
        <span className="text-white font-semibold">To Win</span>
      </div>
      <div className={classes['stake__info-data']}>
        <span className="text-green">2.850,00 FC</span>
      </div>
    </div>
    <div className={classes['stake__form']}>
      <div className={classes['stake__group']}>
        <button className={`${classes['stake__group-btn']} ${classes['stake__group-btn--before']}`}>
          -
        </button>
        <label className={classes['stake__group']}>
          <div className={classes['stake__group-prepend']}>
            Stake
          </div>
          <input
            className={classes['stake__group-input']}
            type="number"
            name="stake"
            value="500"
            readOnly
          />
          <div className={classes['stake__group-append']}>
            EUR
          </div>
        </label>
        <button className={`${classes['stake__group-btn']} ${classes['stake__group-btn--after']}`}>
          +
        </button>
      </div>
      <div className={classes['stake__group']}>
        <button className={classes['stake__group-btn']}>500</button>
        <button className={classes['stake__group-btn']}>1.000</button>
        <button className={classes['stake__group-btn']}>5.000</button>
        <button className={classes['stake__group-btn']}>10.000</button>
      </div>
      <button className={classes['stake__btn']}>
        PLACE 500 EUR
      </button>
    </div>
  </div>
);

export default Stake;


import moment from 'moment';
import classes from './MatchesItem.module.scss';
import { ReactComponent as IconFootballSmall } from '../../../assets/icon-football-small.svg';
import { ReactComponent as IconLocked } from '../../../assets/icon-locked.svg';
import { ReactComponent as IconList } from '../../../assets/icon-list.svg';

const MatchesItem = ({item, index}) => {
  const getDate = (date) => {
    return moment(date).format('D MMMM');
  };

  const getTime = (time) => {
    return moment(time).format('hh:mm');
  };

  return (
    <tr className={classes['matches-item']}>
      {(index === 0 || !(index % 4)) && <>
        <td className={classes['matches-item__datetime']}>
          <div className={classes['matches-item__date']}>
            {getDate(item.Md)}
          </div>
          <div className={classes['matches-item__time']}>
            {getTime(item.Md)}
          </div>
        </td>
        <td className={classes['matches-item__description']}>
          <div className={classes['matches-item__name']}>
            {item.Hn}
          </div>
          <div className={classes['matches-item__name']}>
            {item.An}
          </div>
          <div className={classes['matches-item__country']}>
            <IconFootballSmall className={classes['matches-item__country-icon']} />
            <div className={classes['matches-item__country-text']}>England / Championship</div>
          </div>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--negative']}`}>
            4.49
          </button>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            3.21
          </button>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--negative']}`}>
            1.50
          </button>
        </td>
        <td></td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--green']}`}>
            2.10
          </button>
        </td>
        <td>
          <div className={classes['matches-item__text']}>
            2.5
          </div>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            6.05
          </button>
        </td>
        <td></td>
        <td>
          <div className={classes['matches-item__text']}>
            0.5
          </div>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            4.23
          </button>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            4.90
          </button>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            7.75
          </button>
        </td>
        <td>
          <div className={classes['matches-item__group']}>
            <button className={classes['matches-item__group-btn']}>
              <IconList />
            </button>
            <button className={classes['matches-item__group-btn']}>
              +203
            </button>
          </div>
        </td>
      </>}
      {(index === 1 || !((index - 1) % 4)) && <>
        <td className={classes['matches-item__datetime']}>
          <div className={classes['matches-item__date']}>
            {getDate(item.Md)}
          </div>
          <div className={classes['matches-item__time']}>
            {getTime(item.Md)}
          </div>
        </td>
        <td className={classes['matches-item__description']}>
          <div className={classes['matches-item__name']}>
            {item.Hn}
          </div>
          <div className={classes['matches-item__name']}>
            {item.An}
          </div>
          <div className={classes['matches-item__country']}>
            <IconFootballSmall className={classes['matches-item__country-icon']} />
            <div className={classes['matches-item__country-text']}>England / Championship</div>
          </div>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--disabled']}`}>
            <IconLocked />
          </button>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--disabled']}`}>
            <IconLocked />
          </button>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--disabled']}`}>
            <IconLocked />
          </button>
        </td>
        <td></td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--disabled']}`}>
            <IconLocked />
          </button>
        </td>
        <td>
          <div className={classes['matches-item__text']}>
            2.5
          </div>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--disabled']}`}>
            <IconLocked />
          </button>
        </td>
        <td></td>
        <td>
          <div className={classes['matches-item__text']}>
            0.5
          </div>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--disabled']}`}>
            <IconLocked />
          </button>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--disabled']}`}>
            <IconLocked />
          </button>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--disabled']}`}>
            <IconLocked />
          </button>
        </td>
        <td>
          <div className={classes['matches-item__group']}>
            <button className={classes['matches-item__group-btn']}>
              <IconList />
            </button>
            <button className={classes['matches-item__group-btn']}>
              +203
            </button>
          </div>
        </td>
      </>}
      {(index === 2 || !((index - 2) % 4)) && <>
        <td className={classes['matches-item__datetime']}>
          <div className={classes['matches-item__date']}>
            {getDate(item.Md)}
          </div>
          <div className={classes['matches-item__time']}>
            {getTime(item.Md)}
          </div>
        </td>
        <td className={classes['matches-item__description']}>
          <div className={classes['matches-item__name']}>
            {item.Hn}
          </div>
          <div className={classes['matches-item__name']}>
            {item.An}
          </div>
          <div className={classes['matches-item__country']}>
            <IconFootballSmall className={classes['matches-item__country-icon']} />
            <div className={classes['matches-item__country-text']}>England / Championship</div>
          </div>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--positive']}`}>
            7.21
          </button>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--negative']}`}>
            8.00
          </button>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--positive']}`}>
            8.21
          </button>
        </td>
        <td></td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--green']}`}>
            1.90
          </button>
        </td>
        <td>
          <div className={classes['matches-item__text']}>
            2.5
          </div>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--positive']}`}>
            3.10
          </button>
        </td>
        <td></td>
        <td>
          <div className={classes['matches-item__text']}>
            0.5
          </div>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            4.00
          </button>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            6.30
          </button>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            8.90
          </button>
        </td>
        <td>
          <div className={classes['matches-item__group']}>
            <button className={classes['matches-item__group-btn']}>
              <IconList />
            </button>
            <button className={classes['matches-item__group-btn']}>
              +203
            </button>
          </div>
        </td>
      </>}
      {(index === 3 || !((index - 3) % 4)) && <>
        <td className={classes['matches-item__datetime']}>
          <div className={classes['matches-item__date']}>
            {getDate(item.Md)}
          </div>
          <div className={classes['matches-item__time']}>
            {getTime(item.Md)}
          </div>
        </td>
        <td className={classes['matches-item__description']}>
          <div className={classes['matches-item__name']}>
            {item.Hn}
          </div>
          <div className={classes['matches-item__name']}>
            {item.An}
          </div>
          <div className={classes['matches-item__country']}>
            <IconFootballSmall className={classes['matches-item__country-icon']} />
            <div className={classes['matches-item__country-text']}>England / Championship</div>
          </div>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--positive']}`}>
            1.80
          </button>
        </td>
        <td>
          <button className={classes['matches-item__btn']}>
            3.25
          </button>
        </td>
        <td>
          <button className={`${classes['matches-item__btn']} ${classes['matches-item__btn--positive']}`}>
            4.14
          </button>
        </td>
        <td></td>
        <td colSpan={3}>
          <div className={classes['matches-item__label-outline']}>
            UNAVALIABLE
          </div>
        </td>
        <td></td>
        <td></td>
        <td colSpan={3}>
          <div className={classes['matches-item__label-outline']}>
            UNAVALIABLE
          </div>
        </td>
        <td>
          <div className={classes['matches-item__group']}>
            <button className={classes['matches-item__group-btn']}>
              <IconList />
            </button>
            <button className={classes['matches-item__group-btn']}>
              +203
            </button>
          </div>
        </td>
      </>}
    </tr>
  );
};

export default MatchesItem;

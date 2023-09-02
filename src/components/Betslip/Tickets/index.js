import classes from './Tickets.module.scss';
import { ReactComponent as IconTrash } from '../../../assets/icon-trash.svg';

const Tickets = ({count, children}) => (
  <div className={classes['tickets']}>
    <div className={classes['tickets__head']}>
      <div className={classes['tickets__head-left']}>
        <div className={classes['tickets__text']}>Ticket</div>
        <div className={classes['tickets__count']}>
          {count}
        </div>
      </div>
      <div className={classes['tickets__head-right']}>
        <button className={classes['tickets__btn-clear']}>
          <IconTrash />
        </button>
      </div>
    </div>
    <div className={classes['tickets__body']}>
      <div className={classes['tickets__title']}>System</div>
      <div className={classes['tickets__list']}>
        {children}
      </div>
    </div>
  </div>
);

export default Tickets;

import classes from './Ticket.module.scss';
import { ReactComponent as IconClose } from '../../../assets/icon-close.svg';

const Ticket = ({index}) => (
  <div className={classes['ticket']}>
    {index === 1 && <>
      <div className={classes['ticket__left']}>
        <div className={classes['ticket__names']}>
          FC Aarau - Yveerdon
        </div>
        <div className={classes['ticket__total']}>
          Total Goals: <span className="text-green">Under (2.5)</span>
        </div>
      </div>
      <div className={classes['ticket__right']}>
        <div className={`${classes['ticket__label']} ${classes['ticket__label--positive']}`}>
          8.00
        </div>
      </div>
      <button className={classes['ticket__btn-close']}>
        <IconClose />
      </button>
    </>}
    {index === 2 && <>
      <div className={classes['ticket__left']}>
        <div className={classes['ticket__names']}>
          FC Aarau - Yveerdon
        </div>
        <div className={classes['ticket__total']}>
          Total Goals: <span className="text-green">Over (2.5)</span>
        </div>
      </div>
      <div className={classes['ticket__right']}>
        <div className={`${classes['ticket__label']} ${classes['ticket__label--negative']}`}>
          4.21
        </div>
      </div>
      <button className={classes['ticket__btn-close']}>
        <IconClose />
      </button>
    </>}
    {index === 3 && <>
      <div className={classes['ticket__left']}>
        <div className={`${classes['ticket__names']} ${classes['text-disabled']}`}>
          FC Aarau - Yveerdon
        </div>
        <div className={`${classes['ticket__total']} ${classes['text-disabled']}`}>
          Total Goals: <span className="text-disabled">Under (2.5)</span>
        </div>
      </div>
      <div className={classes['ticket__right']}>
        <div className={classes['ticket__label-outline']}>
          UNAVALIABLE
        </div>
      </div>
      <button className={classes['ticket__btn-close']}>
        <IconClose />
      </button>
    </>}
  </div>
);

export default Ticket;

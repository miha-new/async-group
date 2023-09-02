import { Link } from 'react-router-dom';
import classes from './CountriesItem.module.scss';
import { ReactComponent as IconExpand } from '../../../assets/icon-expand.svg';

const CountriesItem = ({item}) => {
  const handleToggleCollapse = ({target}) => {
    const elem = target.closest(`.${classes['countries-item']}`);

    if (elem) {
      const classCollapsed = classes['countries-item--collapsed'];

      if (elem.classList.contains(classCollapsed)) {
        elem.classList.remove(classCollapsed);
      } else {
        elem.classList.add(classCollapsed);
      }
    }
  }

  return (
    <div className={classes['countries-item']}>
      <button
        className={classes['countries-item__ctrl']}
        onClick={handleToggleCollapse}
      >
        <img
          className={classes['countries-item__ctrl-img']}
          src={`/img/icon-${item.Slug}.svg`}
          alt={item.Slug}
        />
        <div className={classes['countries-item__ctrl-text']}>
          {item.N}
        </div>
        <IconExpand className={classes['countries-item__ctrl-expand']} />
      </button>
      <div className={classes['countries-item__trn']}>
        {item.Trn.map((trn) =>
          <Link
            key={trn.Id}
            className={classes['countries-item__btn']}
            to={`/tournament/${trn.Id}`}
          >
            <div className={classes['countries-item__btn-name']}>{trn.N}</div>
            <div className={classes['countries-item__btn-count']}>{trn.C}</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CountriesItem;

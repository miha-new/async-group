import classes from './Sports.module.scss';

const Sports = ({items, current, onChange}) => {
  const isCurrent = (item) => item.Id === current?.Id;

  return (
    <div className={classes['sports']}>
      {items.map((item) => (
        <button
          key={item.Id}
          className={`${classes['sports__btn']} ${isCurrent(item) && classes['sports__btn--current']}`}
          onClick={() => onChange(item)}
        >
          <img
            className={classes['sports__icon']}
            src={`/img/icon-${item.Slug}.svg`}
            alt={item.N}
          />
          <div className={classes['sports__count']}>
            {item.C}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Sports;

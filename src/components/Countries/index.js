import classes from './Countries.module.scss';
import CountriesInterval from './CountriesInterval';
import CountriesItem from './CountriesItem';
import { ReactComponent as IconCountries } from '../../assets/icon-countries.svg';

const Countries = ({options, onChecked}) => (
  <div className={classes['countries']}>
    <div className={classes['countries__head']}>
      <CountriesInterval />
      <div className={classes['countries__title']}>
        <IconCountries />
        <div className={classes['countries__title-text']}>
          Countries
        </div>
      </div>
    </div>
    <div className={classes['countries__body']}>
      {options.map((item) =>
        <CountriesItem
          key={item.Id}
          item={item}
          onChecked={onChecked}
        />
      )}
    </div>
  </div>
);

export default Countries;

import classes from './Matches.module.scss';

const Matches = ({children}) => (
  <table className={classes['matches']}>
    <thead>
      <tr className={classes['matches__filter']}>
        <td className={classes['td-110px']}>
          Football
        </td>
        <td>
          All Leagues
        </td>
        <td className={classes['td-140px']} colSpan="3">
          Match Result
        </td>
        <td className={classes['td-50px']}></td>
        <td className={classes['td-130px']} colSpan="3">
          Total Goals
        </td>
        <td className={classes['td-50px']}></td>
        <td className={classes['td-170px']} colSpan="4">
          Goals Handicap 3 Way
        </td>
        <td></td>
      </tr>
      <tr>
        <td colSpan="2"></td>
        <td className={classes['td-44px']}>1</td>
        <td className={classes['td-44px']}>X</td>
        <td className={classes['td-44px']}>2</td>
        <td className={classes['td-50px']}></td>
        <td className={classes['td-44px']}>Over</td>
        <td></td>
        <td className={classes['td-44px']}>Under</td>
        <td className={classes['td-50px']}></td>
        <td></td>
        <td className={classes['td-44px']}>1</td>
        <td className={classes['td-44px']}>X</td>
        <td className={classes['td-44px']}>2</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
);


export default Matches;

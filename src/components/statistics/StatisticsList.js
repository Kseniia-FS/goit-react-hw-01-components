import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';

function StatisticsList({ items }) {
  return (
    <section className={s.statistics}>
      {<h2 className={s.title}>Upload stats</h2>}
      <ul className={s.statList}>
        {items.map(({ id, label, percentage }) => (
          <Statistics key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsList;

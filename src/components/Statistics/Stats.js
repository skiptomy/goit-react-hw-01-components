import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';
import StatItem from './StatItem';

const Stats = ({ title, stats }) => (
  <div className={styles.statsSection}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(item => (
        <li className={styles.item} key={item.id}>
          <StatItem item={item} />
        </li>
      ))}
    </ul>
  </div>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Stats;

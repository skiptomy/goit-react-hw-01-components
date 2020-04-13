import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const StatItem = ({ item }) => (
  <>
    <span className={styles.label}>{item.label}</span>
    <span className={styles.percentage}>{item.percentage}%</span>
  </>
);

StatItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default StatItem;

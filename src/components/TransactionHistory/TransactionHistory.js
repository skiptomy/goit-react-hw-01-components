import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.head}>Type</th>
        <th className={styles.head}>Amount</th>
        <th className={styles.head}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(item => (
        <tr key={item.id} className={styles.row}>
          <td className={styles.сells}>{item.type}</td>
          <td className={styles.сells}>{item.amount}</td>
          <td className={styles.сells}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;

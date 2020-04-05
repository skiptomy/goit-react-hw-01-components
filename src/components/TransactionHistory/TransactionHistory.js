import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import Transaction from './Transaction';

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
      {transactions.map(transaction => (
        <tr key={transaction.id} className={styles.row}>
          <Transaction transaction={transaction} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({ transaction }) => (
  <>
    <td className={styles.сells}>{transaction.type}</td>
    <td className={styles.сells}>{transaction.amount}</td>
    <td className={styles.сells}>{transaction.currency}</td>
  </>
);

Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default Transaction;

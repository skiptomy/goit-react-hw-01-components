import React from 'react';
import styles from './App.module.css';

//import data
import user from '../../data/user';
import stats from '../../data/statistical-data';
import friends from '../../data/friends';
import transactions from '../../data/transaction';

//import components
import Profile from '../Profile/Profile';
import Stats from '../Statistics/Stats';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const App = () => (
  <div className={styles.background}>
    <Profile user={user} />
    <Stats title='Upload stats' stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;

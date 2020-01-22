import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li className={styles.item} key={friend.id}>
        <span
          className={friend.isOnline === false ? styles.status : styles.true}
        >
          {friend.isOnline}
        </span>
        <img className={styles.avatar} src={friend.avatar} alt="" width={48} />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default FriendList;

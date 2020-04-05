import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendCard = ({ friend }) => (
  <>
    <span className={!friend.isOnline ? styles.status : styles.true}>
      {friend.isOnline}
    </span>
    <img className={styles.avatar} src={friend.avatar} alt="" width={48} />
    <p className={styles.name}>{friend.name}</p>
  </>
);

FriendCard.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FriendCard;

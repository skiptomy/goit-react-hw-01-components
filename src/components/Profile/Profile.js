import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  const {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;

  return (
    <div className={styles.profileContainer}>
      <div>
        <img src={avatar} alt="Avatar" className={styles.image}></img>
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;

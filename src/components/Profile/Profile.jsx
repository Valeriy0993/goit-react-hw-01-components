import styles from './Profile.module.css';
import './user.json';

const UserProfile = ({ avatar, username, tag, location, stats }) => {
  return (
    <>
      <div className={styles.description}>
        <img src={avatar} alt="User Avatar" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </>
  );
};

export default UserProfile;

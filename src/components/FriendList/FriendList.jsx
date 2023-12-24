import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <span
            className={styles.status}
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></span>
          <img className={styles.avatar} src={avatar} alt="User avatar" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

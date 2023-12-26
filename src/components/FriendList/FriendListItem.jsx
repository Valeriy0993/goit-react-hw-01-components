import styles from './FriendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

import FriendListItem from './FriendListItem';
import friends from '../Data/friends.json';

import styles from './FriendList.module.css';

const FriendList = () => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;

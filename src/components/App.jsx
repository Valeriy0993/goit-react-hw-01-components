import Profile from './Profile/Profile';
import user from './Data/user.json';
import Statistics from './Statistics/Statistics';
import data from './Data/data.json';
import FriendList from './FriendList/FriendList';
import friends from './Data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from './Data/transaction.json';

import './App.css';
import { Fragment } from 'react';

export const App = () => {
  return (
    <>
      <div className="profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </>
  );
};

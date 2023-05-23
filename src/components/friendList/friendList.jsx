import React from 'react';
import FriendListItem from './friendListIteam';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;

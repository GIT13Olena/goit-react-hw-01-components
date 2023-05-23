// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React from 'react';
/* Profile */
import Profile from '../components/profile/profile';
import user from './profile/user.json';
/* Statistics */
import Statistics from './statistics/statistics';
import data from './statistics/data.json';
/* FriendList */
import FriendList from './friendList/friendList';
import friends from './friendList/friends.json';
/* Transactions */
import transactions from './transactionHistory/transactions.json';
import TransactionHistory from './transactionHistory/transationHistory';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name="John"
        username={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

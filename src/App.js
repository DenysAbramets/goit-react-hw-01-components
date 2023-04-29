import Profile from './components/Profile/profile';
import user from './path/user.json';

import Statistics from 'Statistics/statistics';
import data from 'path/data.json';
import FriendList from 'components/Friendlist/friendList';
import friends from 'path/friends.json';
import TransactionHistory from 'components/TranscationHistory/transactionHistory';
import transactions from 'path/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

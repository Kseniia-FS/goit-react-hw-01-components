import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import statistics from './components/statistics/statistical-data.json';
import StatisticsList from './components/statistics/StatisticsList';
import friends from './components/friendsList/Friends.json';
import FriendsList from './components/friendsList/FriensList';
import TransactionTable from './components/transactions/TransactionTable';
import data from './components/transactions/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        key={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList items={statistics} />
      <FriendsList friends={friends} />
      <TransactionTable data={data} />
    </div>
  );
}

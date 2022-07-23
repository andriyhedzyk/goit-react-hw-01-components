import { Container } from './Container/container';

import { Profile } from './Profile/profile';
import user from './data/user.json';

import { Statistics } from './Statistics/statistics';
import data from './data/data.json';

import { FriendList } from './FriendList/friendList';
import friends from './data/friends.json';

import { TransactionHistory } from './TransactionHistory/transactionHistory';
import transactions from './data/transactions.json';

export const App = () => {

return (
  <Container>
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    img={user.img}
    stats={user.stats}
  />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
    </Container>
);
};

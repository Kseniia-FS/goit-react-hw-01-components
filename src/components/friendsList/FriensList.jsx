import s from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendCard from './FriendCard';

function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, name, isOnline, avatar }) => {
        return (
          <FriendCard key={id} name={name} status={isOnline} avatar={avatar} />
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact),
};

export default FriendsList;

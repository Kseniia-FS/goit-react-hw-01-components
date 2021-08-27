import s from './Friends.module.css';
import PropTypes from 'prop-types';
function FriendCard({ avatar, name, status }) {
  return (
    <li className={s.item}>
      {status ? (
        <span className={`${s.status} ${s.online}`}></span>
      ) : (
        <span className={`${s.status} ${s.offLine}`}></span>
      )}

      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendCard.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendCard;

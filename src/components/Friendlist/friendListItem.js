import PropTypes from 'prop-types';
import {
  AvatarItem,
  FriendsItem,
  NameItem,
  StatusesItem,
} from './friendListItem.styled';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <FriendsItem>
      <StatusesItem isOnline={isOnline}>{isOnline}</StatusesItem>
      <AvatarItem src={avatar} alt={name} width="48" />
      <NameItem>{name}</NameItem>
    </FriendsItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

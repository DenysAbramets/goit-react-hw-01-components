import PropTypes from 'prop-types';

import {  ProfileTag, Description, Name,Tag,Location, Stats, SpanLabel, Quantity, Avatar,Items } from "./profile.styled";


export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileTag>
      <Description >
        <Avatar src={avatar} alt={username}  width="50px" />
        <Name >{username}</Name>
        <Tag >{tag}</Tag>
        <Location >{location}</Location>
      </Description>

      <Stats >
        <Items>
          <SpanLabel >Followers</SpanLabel>
          <Quantity >{stats.followers}</Quantity>
        </Items>
        <Items>
          <SpanLabel >Views</SpanLabel>
          <Quantity >{stats.views}</Quantity>
        </Items>
        <Items>
          <SpanLabel >Likes</SpanLabel>
          <Quantity >{stats.likes}</Quantity>
        </Items>
      </Stats>
    </ProfileTag>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  })
}
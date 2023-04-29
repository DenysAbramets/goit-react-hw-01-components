import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: flex;
  align-content: stretch;
  align-items: center;
  background: #998989;
  justify-content: space-evenly;
  margin-bottom: 10px;
  width: 150px;
  height: 100px;
`;
export const StatusesItem = styled.span`
  border: 4px solid ${p => (p.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  color: #2a2a2a;
  width: 15px;
  height: 15px;
`;
export const AvatarItem = styled.img``;
export const NameItem = styled.p``;

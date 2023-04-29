import styled from '@emotion/styled';

export const ProfileTag = styled.div`
  width: 300px;
  background-color: #fff;
  margin-bottom: 40px;

`;
export const Description = styled.div`
  text-align: center;
  background: blue;
  padding: 42px;
`;
export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  width: 102px;
  border-radius: 50%;
  margin-bottom: 10px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  font-size: '14px';
  color: 'gray';
  margin-bottom: '10px';
`;
export const Location = styled.p`
  font-size: '14px';
  color: 'gray';
  margin-bottom: '10px';
`;
export const Items = styled.li`
  flex-basis: calc((100% - 40px) / 3);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: yellow;
  list-style: none;
  padding: 0;
`;
export const SpanLabel = styled.span`
  display: block;
  color: gray;
  font-size: 12px;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  display: block;
  font-weight: 500;
`;

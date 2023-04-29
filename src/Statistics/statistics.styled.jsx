import styled from '@emotion/styled';
export const Section = styled.section`
  width: 400px;
  height: 150px;
  background: white;
  margin-bottom: 40px;
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  padding: 20px;
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  list-style: none;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: #c4ced8;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 4);
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Label = styled.span`
  display: block;
  color: #000000;
  font-size: 12px;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  display: block;
  font-weight: 500;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  background: #3377B6;
  top: 0;
  height: 30%;
`;

export const Text = styled.Text`
  margin: auto;
  color: #FFF;
  font-size: 50px;
`;

export const Content = styled.View`
  background:#F3F3F3;
  flex: 1;
  padding: 20px;
  /* justify-content: center; */
  /* align-items: center; */

`;
export const Detail = styled.Text`
  color: #787878;
  font-size: 15px;
  padding-top: 30px;
  padding-bottom: 15px;
`;

export const List = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextList = styled.Text`
  color: #000000;
  font-size: 23px;
  padding-left: 35px;
  padding-bottom: 35px;
`;

export const TextInfo = styled.Text`
  color: #000000;
  font-size: 23px;
  padding-bottom: 35px;
  padding-right: 20px;
  /* text-align: center; */
`;

export const Flat = styled.View`
  position: absolute;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 45%;
  left: 0;
  right: 0;
  padding-left: 30px;
  /* text-align: center; */
  background: #fFF;
  border-radius: 5px;
  max-height: 70px;
`;

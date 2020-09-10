import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const MenuWrapper = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #3377B6;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #FFF;
  
`;

export const Backbutton = styled.TouchableOpacity`
  position: absolute;
  bottom:0;
  top:105%;
  left: 9%;
  /* color: #FFF; */
  /* font-size: 50px; */
`;

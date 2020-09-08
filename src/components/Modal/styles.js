import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ModalButton = styled(RectButton)`
`;
export const Modal = styled.Modal``;

export const ModalButtonBack = styled.TouchableHighlight`
background-color: #2196F3;
padding: 14px;
border-radius: 20px;
margin-top: 10px;

`;

export const TextButtonBack = styled.Text`
  font-size: 25px;
`;

export const TextButtonBackColor = styled.Text`
  font-size: 30px;
`;

export const ModalView = styled.View`
      margin: 20px;
      background-color: #FFF;
      border-radius: 20px;
      padding: 35px;
      align-items: center;
`;

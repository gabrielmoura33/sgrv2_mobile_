import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled(TextInputMask).attrs({
  type: 'credit-card',
  options: {
    obfuscated: false,
    issuer: 'amex',
  },
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;

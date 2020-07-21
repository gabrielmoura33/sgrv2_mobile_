import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Input from '../../components/PaymentsComponents/Input';

export const Container = styled.ScrollView`
  flex: 1;
  background: #DDE6E9;
  padding: 0 40px;

`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 547px;
  height: 323px;
  left: -82px;
  top: -83px;

  background: #2D9CDB;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const TitleContainer = styled.SafeAreaView`
  margin-top: 60px;
  flex-direction: row;
  padding:  40px;
`;
export const Backbutton = styled.TouchableOpacity`
  
`;

export const Title = styled.Text`
  margin-left: 35px;  
  /* font-family: 'Roboto'; */
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #F8ECEC;
`;
export const ContentContainer = styled.View``;

export const CreditCardContainer = styled.View`
  margin-top: 60px;
  align-items: center;

`;

export const Footer = styled.View`
  flex: 1;

  background: #3377B6;
`;

export const FormContainer = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
})`
  align-self: stretch;
  margin-top: 40px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const FormInputContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;
export const FormInputLittle = styled(Input)`
  margin-bottom: 10px;
  width: 30%;
`;
import styled, { css } from 'styled-components';
import { FlatList, Image, KeyboardAvoidingView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const VehiclesList = styled(FlatList)`
  `;
export const Back = styled.View`
  background: #DDE6E9;
  flex: 1;
`;
export const ContentContainer = styled.View`
margin-top: 20px;

text-align: center;
align-items: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 547px;
  height: 200px;
  left: -82px;
  top: -83px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background:#3377B6;
`;

export const TitleContainer = styled.SafeAreaView`
  margin-top: 60px;
  margin-left:40px;
  margin-bottom: 20px;
  margin: 60px 0px 20px 40px;
  flex-direction: row;
  padding:  40px;
`;
export const Backbutton = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  margin-left: 27%;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #FFF;
`;

export const Content = styled.View`
  background:#F3F3F3;
  flex: 1;
  padding: 20px;
`;

export const Search = styled.View`
  margin: auto;
  width: 70%;
  height: 40px;
  border-radius: 6px;
  background: #7EADD8;
  color: #DDE6E9;
  margin-bottom: 5px;
  flex-direction: row;
`;

export const VehicleSearch = styled.TextInput`
margin-left: 6px;
margin-top: auto;
margin-bottom: auto;
color: #FFF;
font-size: 16px;
flex: 1;

`;

export const VehicleContainer = styled.View`
  border: 3px;
  border-color: #fff;
  flex-direction: row;
  background: #FFF;
  margin-top: 20px;
  border-radius: 12px;
  width: 100%;

  ${(props) => props.situation === 'ativo' && css`
    border-color: #7ED897; 
    `
}

${(props) => props.situation === 'inativo' && css`
    border-color: #c53030; 
    `
}
`;

export const ImageView = styled.View`
  padding: 20px;

`;
export const VehicleImage = styled(Image)`
  width: 95px;
  height: 90px;

`;
export const VehicleInfo = styled.View`
  padding-top: 25px;
  margin-left: 15px;
`;
export const Plate = styled.Text`
  font-size: 28px;
  color: #879093;
`;

export const Client = styled.Text`
  padding-top: 5px;
  font-size: 14px;
  color: #879093;
`;

export const Tracker = styled.Text`
  padding-top: 5px;
  font-size: 14px;
  color: #879093;
`;

export const Icon = styled(FeatherIcon)`
  margin:auto 5px auto 10px;
  
`;

export const Keyboard = styled(KeyboardAvoidingView)``;

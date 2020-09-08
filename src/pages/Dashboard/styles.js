import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  flex: 1;
  margin-top: 20px;
`;

export const MenuList = styled(FlatList).attrs({
  numColumns: 2,
})`
  flex: 1;
  margin-top: 20px;
`;

export const MenuTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  align-self: center;
  font-weight: 500;
`;
export const MenuImage = styled.Image`
  align-self: center;
`;
export const Menu = styled.TouchableOpacity`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
  box-shadow: 10px 5px 5px rgba(000, 000, 000, 0.1);
  border-radius: 16px;
`;

export const LoadingContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  
`;

export const Loading = styled.Image`
  height: 150px;
  width: 150px;
`;

export const LogoContainer = styled.SafeAreaView`
  align-items: center;
  margin-top: 20px;
`;

export const Logo = styled.Image``;

export const ContentContainer = styled.View`
  flex: 1;
  margin-left: -10%;
  margin-right: -10%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ClientName = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 5%;
  font-weight: bold;
`;

export const Title = styled.Text`
margin-top: 8%;
  font-size: 32px;
  /* margin: auto; */
  /* text-align: center; */
  justify-content:center;
  color: #3377B6;
  font-weight: bold;
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  margin-left: -10%;
  margin-right: -10%;
  padding-bottom: 20px;
  background: #3377B6;
  opacity: 0.9;
`;

export const CreditCardContainer = styled.View`
  flex: 1;
  align-items: center;
  border-radius: 9px;
  margin-top: 5%;
`;

export const BilletList = styled(FlatList)`
  /* width: 300px; */
  `;

export const BilletListContainer = styled.View`

`;

export const CreditCardList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
})`
  
`;

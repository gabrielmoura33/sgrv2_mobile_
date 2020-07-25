import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  flex: 1;
  margin-top: 60px;
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
  margin-top: 20px;
  padding: 10px 10px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const ClientName = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const BackgroundContainer = styled.View`
  flex: 1;
  position: absolute;
  align-items: center;
  height: 200px;
  border-radius: 9px;
  justify-content: center;
  top: 645px;
  left: 0;
  right: 0;
  opacity: 0.7;
  background: #3377B6;
  z-index: -5;
`;
export const CreditCardContainer = styled.View`
  flex: 1;
  align-items: center;
  height: 55px;
  border-radius: 9px;
  justify-content: center;
  top: 800px;
  z-index: 5;
`;

export const BilletList = styled(FlatList)`
  width: 300px;
  `;

export const BilletListContainer = styled.View`

`;

export const CreditCardList = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
})`
  
`;

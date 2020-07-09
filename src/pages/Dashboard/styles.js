import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  margin-top: 60px;
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
`;

export const ClientName = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CardContainer = styled.TouchableOpacity`
  flex: 1;
  background: #FFFEFE;
  margin: 0 10px;
  width: 120%;
  max-width: 330px;
  height: 325px;
  box-shadow: 10px 5px 5px rgba(000, 000, 000, 0.1);
  border-radius: 12px;

`;

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

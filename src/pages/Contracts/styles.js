import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  flex: 1;
  margin-top: 60px;
`;
export const LogoContainer = styled.SafeAreaView`
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

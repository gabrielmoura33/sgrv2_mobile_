import styled from 'styled-components/native';

export const CardList = styled.View`
  height: 300px;
  margin: 0 30px;
`;

export const Content = styled.View``;

export const Card = styled.View``;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
export const CardContent = styled.View`
  margin-top: 100px;
  padding: 0 20px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;
export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;
export const CardFooter = styled.View`
  border-top-width: 1px;
  border-top-color: #EEE;
  border-radius: 12px;
`;
export const Annotation = styled.Text`
  font-size: 13px;
  color: #333;
`;

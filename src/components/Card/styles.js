import styled from 'styled-components/native';

export const Content = styled.View``;

export const Card = styled.View`
  flex: 1;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
export const CardContent = styled.View`
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const Type = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.67px;

  color: #265082;
`;
export const Title = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #666666;
`;
export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.333333px;

  color: #000000;
`;
export const CardFooter = styled.View`
  border-top-width: 1px;
  border-top-color: #EEE;
  border-radius: 100px;
  height: 410px;
`;
export const Annotation = styled.Text`
  font-size: 13px;
  color: #333;
`;

export const CardContainer = styled.TouchableOpacity`
  background: #FFFEFE;
  width: 80%;
  width: 250px;
  height: 350px;
  box-shadow: 10px 5px 5px rgba(000, 000, 000, 0.1);
  border-radius: 12px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const CardClientContainer = styled.View`
  padding-left: 30px;
`;
export const CardClienContainerTitle = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.333333px;
  color: #265082;
`;
export const CardClient = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.333333px;
  color: #265082;
`;

export const CardInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  margin-bottom: 35px;
`;
export const CardInfo = styled.View``;
export const CardInfoTitle = styled.Text`
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.333333px;
  color: #265082;
`;
export const CardInfoText = styled.Text`
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.333333px;

  color: #404449;
`;

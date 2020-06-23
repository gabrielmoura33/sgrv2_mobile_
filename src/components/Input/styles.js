import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 16px;
  background: #FBFBFB;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.47)',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: black;
`;


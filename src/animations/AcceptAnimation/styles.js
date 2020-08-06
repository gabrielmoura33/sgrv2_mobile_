import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: rgba(37, 34, 30, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

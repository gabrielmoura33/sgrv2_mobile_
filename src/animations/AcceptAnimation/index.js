import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react-native';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import sucessSrc from '../../assets/animationsrc/success.json';
import cancelSrc from '../../assets/animationsrc/cancell.json';

const AcceptAnimation = () => {
  const { opened, sucess } = useSelector((state) => state.animations);
  const animatedRef = useRef('');
  useEffect(() => {
    animatedRef.current.play();
  }, [opened]);
  return (
    <Container style={{ flex: 1, background: '#000' }} visible={opened}>
      <Lottie
        source={sucess ? sucessSrc : cancelSrc}
        style={{ height: 250, width: 250 }}
        resizeMode="contain"
        ref={animatedRef}
        loop={false}
      />
    </Container>
  );
};

export default AcceptAnimation;

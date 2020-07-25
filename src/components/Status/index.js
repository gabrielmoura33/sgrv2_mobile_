import React from 'react';
import {
  StatusContainer,
  StatusText,
} from './styles';
import Recangleurl from '../../assets/retangle.png';

const Status = () => (
  <>
    <StatusContainer source={Recangleurl} />
    <StatusText>ABERTO</StatusText>
  </>
);

export default Status;

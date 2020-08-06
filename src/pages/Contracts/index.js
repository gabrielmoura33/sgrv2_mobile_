import React from 'react';
import { Container, LogoContainer, Logo } from './styles';
import List from './ContractItem/List';
import logoSrc from '../../assets/logo-cor.png';
import AuthenticatedBackground from '../../components/AuthenticadedBackground';

const list = {
  name: 'Total Points',
  items: [
    { name: 'Nathaniel Fitzgerald', points: '$3.45', accepted: true },
    { name: 'Lawrence Fullter Fitzgerald', points: '$3.45', accepted: true },
  ],
};
const Contracts = () => (
  <AuthenticatedBackground>
    <Container>
      <LogoContainer>
        <Logo source={logoSrc} />
      </LogoContainer>
      <List {...{ list }} />
      <List {...{ list }} />
      <List {...{ list }} />
      <List {...{ list }} />
      <List {...{ list }} />
    </Container>
  </AuthenticatedBackground>
);

export default Contracts;

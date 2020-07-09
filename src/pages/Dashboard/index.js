import React from 'react';
import {
  Container,
  LogoContainer,
  Logo,
  ContentContainer,
  ClientName,
  CardContainer,
} from './styles';

// Components
import Card from '../../components/Card';
import AuthenticatedBackground from '../../components/AuthenticadedBackground';

// Assets
import logoSrc from '../../assets/logo-cor.png';

function Dashboard({ navigation }) {
  // useEffect(() => {
  //   async function loadBoleto() {
  //     // console.tron.log('hello World')
  //     const response = await Api.get('sgrv2_api/api/v1/area_boleto', {
  //       params: {
  //         tabela: true,
  //         recurso: 'area_boleto',
  //         draw: 1,
  //       },
  //     });

  //     // console.tron.log(response.data);
  //   }

  //   loadBoleto();
  // }, []);

  return (
    <AuthenticatedBackground>
      <Container>
        <LogoContainer>
          <Logo source={logoSrc} />
        </LogoContainer>
        <ContentContainer>
          <ClientName>Gabriel de Moura e Souza</ClientName>
          <CardContainer
            onPress={() => navigation.navigate('Billet', { screen: 'Billet' })}
          >
            <Card valor="1300,00" />
          </CardContainer>
        </ContentContainer>
      </Container>
    </AuthenticatedBackground>
  );
}

export default Dashboard;

import React, { useEffect } from 'react';
import { Container, LogoContainer, Logo, ContentContainer, ClientName } from './styles';
import Api from '../../services/api';

// Components
import Card from '../../components/Card';
import AuthenticatedBackground from '../../components/AuthenticadedBackground';

// Assets
import logoSrc from '../../assets/logo-cor.png';
function Dashboard() {
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
  const renderCard = ({ valor, dataEmissao }) => {
    return <Card valor={valor} dataEmissao={dataEmissao} />;
  };

  const data = {
    valor: 12000,
    dataEmissao: '12/06/2019',
  };
  return (
    <AuthenticatedBackground>
      <Container>
        <LogoContainer>
          <Logo source={logoSrc}/>
        </LogoContainer>
        <ContentContainer>
          <ClientName>Gabriel de Moura e Souza</ClientName>
          <Card />
        </ContentContainer>
      </Container>
    </AuthenticatedBackground>
  );
}

export default Dashboard;

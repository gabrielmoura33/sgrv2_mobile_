import React from 'react';
import { FlatList } from 'react-native';
import { CardView } from 'rn-credit-card-view';
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
  const renderCard = ({ valor, dataEmissao }) => (
    <Card valor={valor} dataEmissao={dataEmissao} navigation={navigation} />
  );
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
          <FlatList
            horizontal
            keyExtractor={(item) => String(item)}
            data={[1, 2, 3, 4]}
            renderItem={() => renderCard(data)}
            showsHorizontalScrollIndicator={false}
          />
        </ContentContainer>
      </Container>
    </AuthenticatedBackground>
  );
}

export default Dashboard;

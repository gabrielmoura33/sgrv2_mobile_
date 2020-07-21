import React from 'react';
import { View } from 'react-native';
// import { CardView } from 'react-native-credit-card-input';
import { CardView } from 'react-native-credit-card-input';
import {
  Container,
  LogoContainer,
  Logo,
  ContentContainer,
  ClientName,
  BackgroundContainer,
  BilletList,
  CreditCardContainer,
  CreditCardList,
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

  function renderBillet() {
    return (
      <Card valor="1300,00" />
    );
  }

  function renderCreditCard() {
    return (
      <View style={{ marginLeft: 10 }}>
        <CardView
          flip
          bgColor="#3b3d3e"
          scale={0.9}
          brand="visa"
        />
      </View>
    );
  }
  return (
    <AuthenticatedBackground>
      <Container>
        <LogoContainer>
          <Logo source={logoSrc} />
        </LogoContainer>
        <ContentContainer>
          <ClientName>Gabriel de Moura e Souza</ClientName>
          <BilletList
            data={[1, 2, 3, 4]}
            renderItem={renderBillet}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ContentContainer>
        <BackgroundContainer />
        <CreditCardContainer />
        <CreditCardList
          data={[0, 1, 2, 3]}
          horizontal
          renderItem={renderCreditCard}
        />
      </Container>
    </AuthenticatedBackground>
  );
}

export default Dashboard;

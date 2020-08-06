/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CardView } from 'react-native-credit-card-input';
import PropTypes from 'prop-types';
import api from '../../services/fakeApi';
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
  LoadingContainer,
  Loading,
} from './styles';

// Components
import Card from '../../components/Card';
import AuthenticatedBackground from '../../components/AuthenticadedBackground';
// Assets
import logoSrc from '../../assets/logo-cor.png';
import loadingSrc from '../../assets/logo.gif';

function Dashboard() {
  const [billetData, setBilletData] = useState([]);
  const [creditCardData, setCreditCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(true);
  const [pageLoading, sePageLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [pageCreditCard, setPageCreditCard] = useState(0);

  const [total, setTotal] = useState(0);

  async function loadBillet() {
    if (loading) {
      return;
    }
    if (total > 0 && billetData.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('area_boleto');
    const { recordsTotal, data } = response.data[0];
    setTotal(recordsTotal);
    setBilletData(page > 1 ? data.slice(0, (page + 1) * 5) : data.slice(0, 5));
    setPage(page + 1);
    sePageLoading(false);
    setRefreshing(false);
    setLoading(false);
  }

  async function loadCreditCard() {
    if (loading) {
      return;
    }
    if (total > 0 && billetData.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('http://192.168.0.85:3333/area_payments_cartao');
    const { recordsTotal, data } = response.data[0];
    setTotal(recordsTotal);
    setCreditCardData(pageCreditCard > 1 ? data.slice(0, (pageCreditCard + 1) * 5) : data.slice(0, 5));
    setPageCreditCard(page + 1);
    setRefreshing(false);
    setLoading(false);
  }

  useEffect(() => {
    loadBillet();
    loadCreditCard();
  }, []);
  function handleRefresh() {
    setRefreshing(true);
    setPage(1);
    loadBillet();
  }

  function renderBillet({ item: billet }) {
    return (
      <Card card={billet} />
    );
  }

  function renderCreditCard({ item: crediCard }) {
    const brandRef = {
      1: 'visa',
      2: 'master-card',
      3: 'american-express',
      33: 'diners-club',
      41: 'elo',
    };
    return (
      <View style={{ marginLeft: 10 }}>
        <CardView
          bgColor="#3b3d3e"
          scale={0.9}
          brand={brandRef[crediCard.bandeira_cartao_id]}
          number={`•••• •••• •••• ${crediCard.numero_final}`}
          name={crediCard.cliente_nome}
        />
      </View>
    );
  }
  return (
    <AuthenticatedBackground>
      {pageLoading ? (
        <LoadingContainer>
          <Loading source={loadingSrc} />
        </LoadingContainer>

      ) : (
        <Container>
          <LogoContainer>
            <Logo source={logoSrc} />
          </LogoContainer>
          <ContentContainer>
            <ClientName>Gabriel de Moura e Souza</ClientName>
            <BilletList
              data={billetData}
              keyExtractor={(item) => item.id}
              renderItem={renderBillet}
              horizontal
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={0.2}
              onEndReached={loadBillet}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </ContentContainer>
          <BackgroundContainer />
          <CreditCardContainer />
          <CreditCardList
            data={creditCardData}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={renderCreditCard}
          />
        </Container>
      )}
    </AuthenticatedBackground>
  );
}

export default Dashboard;

Dashboard.propTpes = {
  renderBillet: {
    item: PropTypes.object,
  },
};

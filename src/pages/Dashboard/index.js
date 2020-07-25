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
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(true);
  const [pageLoading, sePageLoading] = useState(true);
  const [page, setPage] = useState(0);
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
    console.tron.log(data.slice((5 * page) + 1, ((5 * page) + 1) + 5));
    setBilletData(page > 1 ? data.slice(0, (page + 1) * 5) : data.slice(0, 5));
    setPage(page + 1);
    sePageLoading(false);
    setRefreshing(false);
    setLoading(false);
  }

  useEffect(() => {
    loadBillet();
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

  function renderCreditCard() {
    return (
      <View style={{ marginLeft: 10 }}>
        <CardView
          bgColor="#3b3d3e"
          scale={0.9}
          brand="visa"
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
              keyExtractor={(item) => String(item.id)}
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
            data={[0, 1, 2, 3]}
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

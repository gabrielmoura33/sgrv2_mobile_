import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import Api from '../../services/api';
// Components
import Card from '../../components/Card';
import AuthenticatedBackground from '../../components/AuthenticadedBackground';

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
        <FlatList
          horizontal
          keyExtractor={(item) => String(item)}
          data={[1, 2, 3, 4]}
          renderItem={() => renderCard(data)}
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </AuthenticatedBackground>
  );
}

export default Dashboard;

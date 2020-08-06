import React, { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import carImage from '../../assets/vehicle/car1.png';
import api from '../../services/fakeApi';
import {
  VehiclesList,
  Content,
  Header,
  TitleContainer,
  Backbutton,
  Title,
  Back,
  VehicleContainer,
  VehicleImage,
  VehicleInfo,
  Plate,
  Tracker,
  Client,
  ImageView,
  VehicleSearch,
  Search,
  Icon,
  Keyboard,
} from './styles';
import Status from '../../components/Status';

function Vehicles() {
  const navigation = useNavigation();
  const [vehicleData, setVehicleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(true);
  const [pageLoading, sePageLoading] = useState(true);
  const [page, setPage] = useState(0);

  const [total, setTotal] = useState(0);

  async function loadVehicle() {
    if (loading) {
      return;
    }
    if (total > 0 && vehicleData.length === total) {
      return;
    }
    setLoading(true);

    const response = await api.get('area_veiculo');
    const { recordsTotal, data } = response.data[0];
    setTotal(recordsTotal);
    setVehicleData(page > 1 ? data.slice(0, (page + 1) * 5) : data.slice(0, 5));
    setPage(page + 1);
    sePageLoading(false);
    setRefreshing(false);
    setLoading(false);
  }

  const [search, setsearch] = useState('');

  function selection() {
    return (vehicleData.filter((text) => (
      text.cliente.toLowerCase().match(search.toLowerCase()))
      || text.placa.toLowerCase().match(search.toLowerCase())));
  }
  useEffect(() => {
    selection();
    loadVehicle();
  }, []);
  return (
    <>
      <Back>
        <Header />
        <TitleContainer>
          <Backbutton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#FFF" />
          </Backbutton>
          <Title>Veículos</Title>
        </TitleContainer>
        <Keyboard
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <Content>
            <Search>
              <Icon name="search" size={15} color="#fff" />
              <VehicleSearch
                onChangeText={(value) => {
                  setsearch(value);
                }}
                placeholderTextColor="#DDE6E9"
                placeholder="Placa"
                defaultValue={search}
              />
            </Search>

            <VehiclesList
              keyExtractor={(item) => item.rastreador_veiculo_id}
              data={selection()}
              renderItem={({ item }) => (
                <VehicleContainer situation={item.situacao_id}>
                  <ImageView>
                    <VehicleImage source={carImage} />
                  </ImageView>
                  <VehicleInfo>
                    <Plate>{item.placa}</Plate>
                    <Client>
                      Cliente:
                      {' '}
                      {item.cliente}
                    </Client>
                    <Tracker>
                      Rastreador:
                      {' '}
                      {item.numero_equipamento}
                    </Tracker>
                  </VehicleInfo>
                </VehicleContainer>
              )}
              vertical
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.2}
              onEndReached={loadVehicle}
            />
          </Content>
        </Keyboard>
      </Back>
    </>
  );
}
export default Vehicles;

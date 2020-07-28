import React, { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import carImage from '../../assets/vehicle/car1.png';
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

function Vehicles() {
  const navigation = useNavigation();

  const [search, setsearch] = useState('');
  const DATA = [
    {
      id: '1',
      placa: 'EDY0598',
      cliente: 'Gabriel',
      rastreador: '43453241',
      situacao: 'ativo',
    },

    {
      id: '2',
      placa: 'SAL9997',
      cliente: 'Jonatas',
      rastreador: '0077788995',
      situacao: 'inativo',
    },
    {
      id: '3',
      placa: 'FALC1578',
      cliente: 'Gabriel',
      rastreador: '007778898',
      situacao: 'ativo',
    },

    {
      id: '4',
      placa: 'GIL0123',
      cliente: 'Jonatas',
      rastreador: '0077788995',
      situacao: 'ativo',
    },
    {
      id: '5',
      placa: 'PAL7894',
      cliente: 'Palmito',
      rastreador: '43453241',
      situacao: 'inativo',
    },

    {
      id: '6',
      placa: 'PED0128',
      cliente: 'Pedrao',
      rastreador: '0077788995',
      situacao: 'inativo',
    },
    {
      id: '7',
      placa: 'MENO1478',
      cliente: 'Gabriel',
      rastreador: '1237810',
      situacao: 'ativo',
    },

    {
      id: '8',
      placa: 'FOR01348',
      cliente: 'Formiga',
      rastreador: '456792',
      situacao: 'inativo',
    },
  ];
  function selection() {
    return (DATA.filter((text) => (
      text.cliente.toLowerCase().match(search.toLowerCase()))
      || text.placa.toLowerCase().match(search.toLowerCase())));
  }
  useEffect(() => {
    selection();
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
              data={selection()}
              renderItem={({ item }) => (
                <VehicleContainer situation={item.situacao}>
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
                      {item.rastreador}
                    </Tracker>
                  </VehicleInfo>
                </VehicleContainer>
              )}
              vertical
              showsVerticalScrollIndicator={false}
            />
          </Content>
        </Keyboard>
      </Back>
    </>
  );
}
export default Vehicles;

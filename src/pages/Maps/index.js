/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container, MenuWrapper, Title, Backbutton,
} from './styles';

const Map = () => {
  const [region, setRegion] = useState(null);
  const navigation = useNavigation();

  const mapView = useRef();
  useEffect(() => {
    function loadInitialPosition() {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          });
        },
        () => {},
        {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,
        },
      );
    }
    loadInitialPosition();
  }, []);

  return (
    <Container style={{ flex: 1 }}>
      <MenuWrapper>
        <Backbutton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="#FFF" />
        </Backbutton>
        <Title>Rastreamento</Title>
      </MenuWrapper>
      <MapView
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        loadingEnabled
        ref={mapView}
      />
    </Container>
  );
};

export default Map;

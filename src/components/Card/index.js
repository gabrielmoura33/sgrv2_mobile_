/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Barcode from 'react-native-barcode-expo';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { Clipboard, Alert } from 'react-native';
import {
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Type,
  CardContainer,
  CardClientContainer,
  CardClienContainerTitle,
  CardClient,
  CardInfoContainer,
  CardInfo,
  CardInfoTitle,
  CardInfoText,
} from './styles';
import Status from '../Status';

export default function CardBillet({ card }) {
  const navigation = useNavigation();
  return (
    <CardContainer
      onPress={() => navigation.navigate('Billet', { screen: 'Billet', data: card })}
      onLongPress={() => { Clipboard.setString(card.nosso_numero); Alert.alert(`${card.nosso_numero} Copiado!`); }}
    >
      <Card>
        <CardHeader>
          <Type>Carnê</Type>
          <Status />
          <AntDesign name="pdffile1" size={24} color="black" />
        </CardHeader>

        <CardClientContainer>
          <CardClienContainerTitle>Beneficiário</CardClienContainerTitle>
          <CardClient>{card.nome}</CardClient>
        </CardClientContainer>

        <CardInfoContainer>
          <CardInfo>
            <CardInfoTitle>Nosso Número</CardInfoTitle>
            <CardInfoText>{card.nosso_numero}</CardInfoText>
          </CardInfo>
          <CardInfo>
            <CardInfoTitle>Vencimento</CardInfoTitle>
            <CardInfoText>{card.data_vencimento}</CardInfoText>
          </CardInfo>
        </CardInfoContainer>
        <CardContent>
          <Title>Valor</Title>
          <Description>
            {`R$ ${card.valor}`}
          </Description>

        </CardContent>
        <CardFooter>
          <Barcode value="Hello World" height={40} width={1} format="CODE128" />
        </CardFooter>
      </Card>
    </CardContainer>
  );
}

CardBillet.propTypes = {
  card: PropTypes.object.isRequired,
};

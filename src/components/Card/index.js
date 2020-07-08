import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';
import Barcode from 'react-native-barcode-expo';

import {
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Main({ valor, dataEmissao }) {
  return (
    <Card>
      <CardHeader>
        <Icon name="attach-money" size={28} color="#666" />
        <AntDesign name="pdffile1" size={24} color="black" />
      </CardHeader>
      <CardContent>
        <Title>Valor do Boleto</Title>
        <Description> R$ {valor} </Description>
      </CardContent>
      <CardFooter>
        <Barcode value="Hello World" height={50} format="CODE128" />
      </CardFooter>
    </Card>
  );
}

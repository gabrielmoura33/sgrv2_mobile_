import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Background from '../../components/Background';
import {
  Container,
  Value,
  Content,
  TextList,
  TextInfo,
  Detail,
  List,
  Flat,
  ItemList,
  FilterList,
  Backbutton,
} from './styles';

export default function BilletDetail({ route }) {
  const navigation = useNavigation();
  const { data: billetData } = route.params;
  const [billetDetails, setBilletDetails] = useState([]);
  useEffect(() => {
    setBilletDetails(billetData.discriminacao);
  }, []);
  const DATA2 = [
    {
      id: '3',
      title: 'Arraste para filtrar',
      value: '+1000',
    },
    {
      id: '1',
      title: 'Produto',
      value: '+1000',
    },
    {
      id: '12',
      title: 'Desconto',
      value: '-520',
    },
    {
      id: '13',
      title: 'Acréscimo',
      value: '+20',
    },
  ];
  const handleScroll = useCallback((event) => {
    if (event.nativeEvent.contentOffset.y < 40) {
      setBilletDetails(billetData.discriminacao);
    } else if (event.nativeEvent.contentOffset.y >= 40 && event.nativeEvent.contentOffset.y < 104) {
      setBilletDetails(billetData.discriminacao.filter((el) => el.title === 'Produto'));
    } else if (event.nativeEvent.contentOffset.y > 104 && event.nativeEvent.contentOffset.y <= 164) {
      setBilletDetails(billetData.discriminacao.filter((el) => el.title === 'Desconto'));
    } else if (event.nativeEvent.contentOffset.y > 164) {
      setBilletDetails(billetData.discriminacao.filter((el) => el.title === 'Acréscimo'));
    }
  }, []);
  return (
    <>
      <Background>
        <Container>
          <Backbutton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#FFF" />
          </Backbutton>
          <Value>
            R$
            {' '}
            {billetData.valor}
          </Value>
        </Container>

        <Content>
          <Detail>Detailed</Detail>
          <ItemList
            data={billetDetails}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <List>
                <TextList negative={item.value <= 0}>{item.value}</TextList>
                <TextInfo negative={item.value <= 0}>{item.title}</TextInfo>
              </List>
            )}

          />
        </Content>

        <Flat>
          <FilterList
            data={DATA2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <TextInfo>{item.title}</TextInfo>}
            centerContent
            onScroll={handleScroll}
            decelerationRate={0}
            contentContainerStyle={{ margin: 0 }}
          />
        </Flat>

      </Background>
    </>
  );
}

import React from 'react';
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
} from './styles';

export default function BilletDetail() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Produto',
      value: '+1000',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Desconto',
      value: '-520',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Acréscimo',
      value: '+20',
    },
    {
      id: '1bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Produto',
      value: '+1000',
    },
    {
      id: '23ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Desconto',
      value: '-520',
    },
    {
      id: '358694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Acréscimo',
      value: '+20',
    },
    {
      id: '41bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Produto',
      value: '+1000',
    },
    {
      id: '123ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Desconto',
      value: '-520',
    },
    {
      id: '2358694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Acréscimo',
      value: '+20',
    },
  ];

  const DATA2 = [
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

  return (
    <>
      <Background>
        <Container>
          <Value>
            $64.234
          </Value>
        </Container>

        <Content>
          <Detail>Detailed</Detail>
          <ItemList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <List>
                <TextList>{item.value}</TextList>
                <TextInfo>{item.title}</TextInfo>
              </List>
            )}
          />
        </Content>

        <Flat>
          <FilterList
            data={DATA2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <TextInfo>{item.title}</TextInfo>}
          />
        </Flat>

      </Background>
    </>
  );
}

import React, { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { CardView } from 'react-native-credit-card-input';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  Container, Header, FormInput, FormInputMasked, FormContainer, SubmitButton, FormInputLittle, FormInputContainer, ContentContainer, TitleContainer, Title, Backbutton, CreditCardContainer,
} from './styles';

const HinovaPayments = () => {
  const creditCardRef = useRef();
  const [cvvFocused, setCvvFocused] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Header />
        <TitleContainer>
          <Backbutton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#FFF" />
          </Backbutton>
          <Title>Payments Cartão</Title>
        </TitleContainer>

        <ContentContainer>
          <CreditCardContainer>
            <CardView
              ref={creditCardRef}
              bgColor="#3b3d3e"
              scale={0.9}
              brand="master-card"
              number={number}
              name={name}
              focused={cvvFocused ? 'cvc' : ''}
              allowScroll
            />
          </CreditCardContainer>
          <FormContainer>
            <FormInput
              icon="person"
              keyBoardType="text"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Nome impresso no cartão"
              returnKeyType="next"
              onChangeText={setName}
              onFocus={() => setCvvFocused(false)}
            />
            <FormInput
              icon="security"
              keyBoardType="number"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="CPF/CNPJ"
              returnKeyType="next"
            />
            <FormInputMasked
              icon="credit-card"
              keyBoardType="mail-adress"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Numero do Cartão"
              returnKeyType="next"
              onChangeText={setNumber}
            />
            <FormInput
              icon="mail-outline"
              keyBoardType="mail-adress"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Digite seu E-mail"
              returnKeyType="next"
            />
            <FormInputContainer>
              <FormInputLittle
                keyBoardType="mail-adress"
                autoCorrect={false}
                autoCaptalize="none"
                placeholder="Validade"
                returnKeyType="next"
                onFocus={() => setCvvFocused(true)}
              />
              <FormInputLittle
                keyBoardType="mail-adress"
                autoCorrect={false}
                autoCaptalize="none"
                placeholder="Ano"
                returnKeyType="next"
              />
              <FormInputLittle
                keyBoardType="mail-adress"
                autoCorrect={false}
                autoCaptalize="none"
                placeholder="CVV"
                returnKeyType="next"
                onFocus={() => setCvvFocused(true)}

                onBlur={() => setCvvFocused(false)}
              />
            </FormInputContainer>
            <SubmitButton>
              Confirmar
            </SubmitButton>
          </FormContainer>

        </ContentContainer>

      </Container>
    </KeyboardAvoidingView>

  );
};

export default HinovaPayments;

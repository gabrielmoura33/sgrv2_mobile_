/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import logo from '../../assets/logo.png';
import loadingGIF from '../../assets/loading.gif';
import Background from '../../components/Background';
import { Container, Form, FormInput, SubmitButton } from './styles';
import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const userRef = useRef();
  const passwordRef = useRef();
  // const loading = useSelector((state) => state.auth.loading);
  const loading = false;
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [codMobile, setCodMobile] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(codMobile, user, password));
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Container>
          {!loading ? (
            <>
              <Image source={logo} />
              <Form>
                <FormInput
                  icon="security"
                  keyboardType="numeric"
                  autoCorrect={false}
                  autoCaptalize="none"
                  placeholder="Digite seu Codigo Mobile"
                  returnKeyType="next"
                  onSubmitEditing={() => userRef.current.focus()}
                  value={codMobile}
                  onChangeText={setCodMobile}
                />

                <FormInput
                  icon="person"
                  keyboardType="numeric"
                  autoCorrect={false}
                  autoCaptalize="none"
                  placeholder="Digite seu Usuario"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                  value={user}
                  onChangeText={setUser}
                  ref={userRef}
                />

                <FormInput
                  icon="lock"
                  secureTextEntry
                  placeholder="Sua Senha Secreta"
                  ref={passwordRef}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit}
                  value={password}
                  onChangeText={setPassword}
                />
                <SubmitButton loading={loading} onPress={handleSubmit}>
                  Acessar
                </SubmitButton>
              </Form>
            </>
          ) : (
            <Image source={loadingGIF} />
          )}
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
}

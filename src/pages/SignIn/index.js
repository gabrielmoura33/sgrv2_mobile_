/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TouchableWithoutFeedback, Keyboard, Image, View,
} from 'react-native';
import logo from '../../assets/logo-cor.png';
import loadingGIF from '../../assets/logo.gif';
import Background from '../../components/Background';
import {
  Container, Form, FormInput, SubmitButton,
} from './styles';
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
                  icon="phone"
                  keyboardType="numeric"
                  autoCorrect={false}
                  autoCaptalize="none"
                  placeholder="Código Mobile"
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
                  placeholder="Login"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                  value={user}
                  onChangeText={setUser}
                />

                <FormInput
                  icon="lock"
                  secureTextEntry
                  placeholder="Senha"
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
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image source={loadingGIF} style={{ width: 120, height: 120 }} />
            </View>
          )}
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
}

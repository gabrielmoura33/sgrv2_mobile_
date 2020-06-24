/* eslint-disable camelcase */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { codMobile, user, password } = payload;
    const response = yield call(api.post, 'areaSGRV2/login.action_mobile.php', {
      key: 'ceaefdca3a5fe61fd32224563577d180',
      dfsCpf: user,
      dfsSenha: password,
      dfsDb: 'sgrv2_desenvolvimento',
    });

    const { u, s, c, d, o } = response.data;

    const apiURL = `sgrv2_api/auth?u=${u}&s=${s}&c=${c}&d=${d}&o=${o}&t=u`;

    const authResponse = yield call(api.post, apiURL);

    console.tron.log(authResponse.data);
    const { user: authenticatedUser } = authResponse.data;

    // const { _session, _token } = authenticatedUser.token;

    // console.tron.log(_session);
    // console.tron.log(_token);

    // api.defaults.headers = {
    //   Authorization: _session,
    //   'X-Auth-Token': _token,
    // };

    // yield put(signInSucess(_token, user, _session));

    // Alert.alert(`Bem Vindo Sr(a). ${authResponse.data.user.session.user_nome}`);
  } catch (err) {
    Alert.alert('Falha na autenticação, Verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }
  const { 'X-Auth-Token': _token, Authorization: session_id } = payload.auth;
  if (_token) {
    api.defaults.headers = {
      Authorization: session_id,
      'X-Auth-Token': _token,
    };
  }
}
export function signOut() {
  // history.push('/');
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

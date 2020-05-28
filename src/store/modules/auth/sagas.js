import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
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
      dfsDb: codMobile,
    });

    const { u, s, c, d, o } = response.data;

    const apiURL = `sgrv2_api/auth?u=${u}&s=${s}&c=${c}&d=${d}&o=${o}&t=u`;

    const authResponse = yield call(api.post, apiURL);

    console.tron.log(authResponse.data);

    const { session_id } = authResponse.data.user.session;
    const { _token } = authResponse.data.user.token;

    Alert.alert(`Bem Vindo Sr(a). ${authResponse.data.user.session.user_nome}`);
    // api.defaults.headers.Authorization = `Bearer ${token}`;

    // yield delay(1500);
    // yield put(signInSucess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação, Verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `${token}`;
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

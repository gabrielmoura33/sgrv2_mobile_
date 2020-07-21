/* eslint-disable camelcase */
export function signInRequest(codMobile, user, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { codMobile, user, password },
  };
}

export function signInSucess(token, user, session_id) {
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: { token, user, session_id },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

import produce from 'immer';

const INITIAL_STATE = {
  'X-Auth-Token': null,
  signed: false,
  loading: false,
  Authorization: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCESS': {
        draft['X-Auth-Token'] = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.Authorization = action.payload.session_id;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = null;
        draft.token = null;
        break;
      }
      default:
    }
  });
}

import { combineReducers } from 'redux';

import auth from './auth/reducer';
import animations from './animations/reducer';

const reducers = combineReducers({
  auth,
  animations,
});

export default reducers;

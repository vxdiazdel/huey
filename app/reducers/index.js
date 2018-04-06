import { combineReducers } from 'redux';

import authReducer from './authReducer';
import sceneReducer from './sceneReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  scene: sceneReducer,
});

export default rootReducer;

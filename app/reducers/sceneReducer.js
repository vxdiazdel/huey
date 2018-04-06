import {
  SELECT_SCENE,
  SCENE_LOADING,
  SCENE_ERROR,
} from '../actions/types';
import scenes from '../config/gradients.json';

const initialState = {
  scenes,
  selectedScene: null,
  isLoading: false,
  hasErrors: false,
};

const sceneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SCENE:
      return {
        ...state,
        selectedScene: action.scene,
      };
    case SCENE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SCENE_ERROR:
      return {
        ...state,
        hasErrors: true,
      };
    default:
      return state;
  }
};

export default sceneReducer;

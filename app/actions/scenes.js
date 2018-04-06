import {
  SELECT_SCENE,
  SCENE_LOADING,
  SCENE_ERROR,
} from './types';

export const selectScene = scene => ({
  type: SELECT_SCENE,
  scene,
});

export const loadScene = () => ({ type: SCENE_LOADING });

export const sceneError = () => ({ type: SCENE_ERROR });

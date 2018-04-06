import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
} from './types';
import createUser from '../utils/createUser';
import app from '../config/app';

export const emailChanged = email => ({
  type: EMAIL_CHANGED,
  email,
});

export const passwordChanged = password => ({
  type: PASSWORD_CHANGED,
  password,
});

export const loginStart = () => ({
  type: LOGIN_USER_START,
});

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    user,
  });
};

const loginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_ERROR,
    error,
  });
};

const logoutFail = (dispatch, error) => {
  dispatch({
    type: LOGOUT_USER_ERROR,
    error,
  });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch(loginStart());
  app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginSuccess(dispatch, user))
    .catch(() => {
      app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          createUser({ user, email });
          loginSuccess(dispatch, user);
        })
        .catch(e => loginFail(dispatch, e));
    });
};

export const logoutUser = () => async (dispatch) => {
  try {
    await app.auth().signOut();
    dispatch({ type: LOGOUT_USER });
  } catch (e) {
    logoutFail(dispatch, e);
  }
};

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
  user: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.email,
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.password,
      };
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: action.user,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        password: '',
        error: 'Authentication failed.',
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;

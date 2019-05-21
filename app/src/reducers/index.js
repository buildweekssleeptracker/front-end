// Action imports ---
import {
  LOGGING_IN,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
  SIGNING_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESSFUL,
  LOG_OUT
} from "../actions";

const initialState = {
  loggingIn: false,
  loggedIn: false,
  signingUp: false,
  error: null,
  user: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        error: null
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loggedIn: false,
        loggingIn: false,
        error: action.payload,
        user: null
      };

    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        error: null,
        user: action.payload
      };

    case SIGNING_UP:
      return {
        ...state,
        signingUp: true,
        error: null,
        user: null
      };

    case SIGN_UP_SUCCESSFUL:
      return {
        ...state,
        signingUp: false,
        loggedIn: true,
        error: null,
        user: action.payload
      };

    case SIGN_UP_FAILED:
      return {
        ...state,
        signingUp: false,
        loggedIn: false,
        error: action.payload,
        user: null
      };

    case LOG_OUT:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        signingUp: false,
        error: null,
        user: null
      };
    default:
      return state;
  }
};

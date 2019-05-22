// Action imports ---
import {
  LOGGING_IN,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
  SIGNING_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESSFUL,
  LOG_OUT,
  GOING_TO_SLEEP,
  WAKING_UP,
  FETCHING_SLEEP_DATA_START,
  FETCHING_SLEEP_DATA_FAILED,
  FETCHING_SLEEP_DATA_SUCCESS,
  DELETE_SLEEP_TIME
} from "../actions";

const initialState = {
  loggingIn: false,
  loggedIn: false,
  signingUp: false,
  error: null,
  user: null,
  sleepTime: null,
  wakeTime: null,
  fetchingSleepData: false,
  sleepData: []
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

    case GOING_TO_SLEEP:
      // console.log(action.payload);
      return {
        ...state,
        sleepData: [...state.sleepData, action.payload]
      };

    case WAKING_UP:
      return {
        ...state,
        sleepTime: null,
        wakeTime: action.payload
      };

    case FETCHING_SLEEP_DATA_START:
      return {
        ...state,
        fetchingSleepData: true,
        error: null
      };

    case FETCHING_SLEEP_DATA_SUCCESS:
      return {
        ...state,
        fetchingSleepData: false,
        error: null,
        sleepData: action.payload
      };

    case DELETE_SLEEP_TIME:
      console.log(action.payload);
      return {
        ...state,
        sleepData: [
          // ...state.sleepData.slice(0, 41)
          ...state.sleepData.filter(sleep => sleep.id != action.payload)
        ]
      };
    default:
      return state;
  }
};

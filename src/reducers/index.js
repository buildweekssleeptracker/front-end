// Action imports ---
import { LOGGING_IN, LOGIN_FAILED, LOGIN_SUCCESSFUL } from "../actions";

const initialState = {
  loggingIn: false,
  loggedIn: false,
  error: null,
  userData: {}
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

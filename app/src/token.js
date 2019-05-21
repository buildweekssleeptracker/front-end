import { LOGIN_SUCCESSFUL } from "./actions";

export const setToken = store => next => action => {
  if (action.type === LOGIN_SUCCESSFUL) {
    localStorage.setItem("userToken", action.payload.token);
  }
  next(action);
};

import axios from "axios";
// import { axiosWithAuth } from "../axiosWithAuth";

// Action Types ---
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SIGNING_UP = "SIGNING_UP";
export const SIGN_UP_SUCCESSFUL = "SIGN_UP_SUCCESSFUL";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";

// ----------------------------------------

// Action Creators ---
export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axios
    .post("https://lambda-sleeptracker.herokuapp.com/api/login", creds)
    .then(res => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNING_UP });
  return axios
    .post("https://lambda-sleeptracker.herokuapp.com/api/register", creds)
    .then(res => {
      console.log(res);
      dispatch({ type: SIGN_UP_SUCCESSFUL, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGN_UP_FAILED });
    });
};

import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

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
  console.log(creds);
};

export const signup = creds => dispatch => {
  dispatch({ type: SIGNING_UP });
  console.log(creds);
};

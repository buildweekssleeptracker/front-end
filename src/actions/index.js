import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

// Action Types ---
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";
// ----------------------------------------

// Action Creators ---
export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axios.post("");
};

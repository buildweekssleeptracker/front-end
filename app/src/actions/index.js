import axios from "axios";

import { axiosWithAuth } from "../axiosWithAuth";

// Action Types ---
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const SIGNING_UP = "SIGNING_UP";
export const SIGN_UP_SUCCESSFUL = "SIGN_UP_SUCCESSFUL";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";

export const LOG_OUT = "LOG_OUT";

export const GOING_TO_SLEEP = "GOING_TO_SLEEP";
export const WAKING_UP = "WAKING_UP";

export const FETCHING_SLEEP_DATA_START = "FETCHING_SLEEP_DATA_START";
export const FETCHING_SLEEP_DATA_SUCCESS = "FETCHING_SLEEP_DATA_SUCCESS";
export const FETCHING_SLEEP_DATA_FAILED = "FETCHING_SLEEP_DATA_FAILED";

// ----------------------------------------

// Action Creators ---
export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });

  return axios
    .post("https://lambda-sleeptracker.herokuapp.com/api/login", creds)
    .then(res => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data });
      localStorage.setItem("User", JSON.stringify(res.data));
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
      localStorage.setItem("User", JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGN_UP_FAILED });
    });
};

export const logOut = () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("User");

  return {
    type: LOG_OUT
  };
};

export const sleep = () => dispatch => {
  const sleepTimeDate = new Date();
  const sleepTime = sleepTimeDate.toLocaleString();
  console.log(sleepTime);
  return axiosWithAuth()
    .post("https://lambda-sleeptracker.herokuapp.com/api/sleeps/", {
      timeInBed: sleepTime
    })
    .then(res => {
      console.log(res);
      dispatch({ type: GOING_TO_SLEEP, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err);
    });
};

export const wake = () => {
  const wakeTime = new Date();
  console.log(wakeTime);
  return {
    type: WAKING_UP,
    payload: wakeTime
  };
};

export const fetchSleepData = () => dispatch => {
  dispatch({ type: FETCHING_SLEEP_DATA_START });
  axiosWithAuth()
    .get(`https://lambda-sleeptracker.herokuapp.com/api/sleeps/`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_SLEEP_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
    });
};

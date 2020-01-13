import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// axios.defaults.withCredentials = true;

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("http://127.0.0.1:8000/api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const loginUser = (username, password) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, password });

  axios
    .post("http://127.0.0.1:8000/api/auth/token/", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

export const logoutUser = () => (dispatch, getState) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT
  });
};

export const registerUser = (
  first_name,
  last_name,
  username,
  email,
  password
) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    first_name,
    last_name,
    username,
    email,
    password
  });

  axios
    .post("http://localhost:8000/api/auth/register/", body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

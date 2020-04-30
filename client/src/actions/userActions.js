import * as types from "../constants/ActionTypes";

import axios from "axios";

export const userLogin = (userInfo) => {
  return (dispatch) => {
    dispatch(loginRequest());
    return axios.post("/users/register", userInfo).then((response) => {
      dispatch(loginSuccess(response.data.user));
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userId", response.data.user.userId);
    });
    // .then(() => {
    //     dispatch(getResources());
    //     dispatch(getSubjects());
    // })
    // .catch(error => {
    //     dispatch(loginFailure());
    // })
  };
};

export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};

export const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
    payload: "Invalid email or password.",
  };
};

export const userSignup = (userInfo) => {
  return (dispatch) => {
    dispatch(signupRequest());
    return (
      axios
        .post("/users/signup", userInfo)
        // .post(`${apiUrl}/users/signup`, userInfo)
        .then((response) => {
          dispatch(signupSuccess(response.data.user));
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("userId", response.data.user._id);
        })
        .catch((error) => {
          dispatch(signupFailure());
        })
    );
  };
};

export const signupRequest = () => {
  return {
    type: types.SIGNUP_REQUEST,
  };
};

export const signupSuccess = (user) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: user,
  };
};

export const signupFailure = () => {
  return {
    type: types.SIGNUP_FAILURE,
    payload: "Invalid email or password.",
  };
};

export const userDelete = () => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (dispatch) => {
    dispatch(deleteRequest());
    return (
      axios
        .delete("/users/${userId}", config)
        // .delete(`${apiUrl}/users/${userId}`, config)
        .then((response) => {
          dispatch(deleteSuccess());
          sessionStorage.clear();
        })
        .catch((error) => {
          dispatch(deleteFailure());
        })
    );
  };
};

export const deleteRequest = () => {
  return {
    type: types.DELETE_REQUEST,
  };
};

export const deleteSuccess = () => {
  return {
    type: types.DELETE_SUCCESS,
  };
};

export const deleteFailure = () => {
  return {
    type: types.DELETE_FAILURE,
    payload: "Could not delete account",
  };
};

export const userLogout = () => {
  return {
    type: types.USER_LOGOUT,
  };
};

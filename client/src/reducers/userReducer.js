import * as types from "../constants/ActionTypes";

const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: null,
        user: action.payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: null,
        user: action.payload,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    case types.DELETE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: null,
        user: null,
      };
    case types.DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;

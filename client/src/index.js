import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

// save redux state to session storage
const saveToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

// get redux state from session storage
const loadFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromSessionStorage();

// create Redux store with devtools and middleware
const store = createStore(
  userReducer,
  // overwrite keys from root reducer with persisted state
  persistedState
);
//STORE -> GLOBALIZED STATE
// const createStoreWithMiddleware = applyMiddleware()(createStore);
// const store = createStoreWithMiddleware(userReducer);

// pass current state to session storage
store.subscribe(() => saveToSessionStorage(store.getState()));

const token = localStorage.getItem("token");
axios.defaults.headers.common["authorization"] = `Bearer ${token}`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

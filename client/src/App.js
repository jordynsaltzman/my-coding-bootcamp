import React from "react";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import LoginWindow from "./components/LoginWindow/LoginWindow";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Route exact path="/login" component={LoginWindow} />

      {token ? (
        <Route path="/home" component={HomePage} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
      <Route path="/about" component={AboutPage} />
    </Router>
  );
};

export default App;

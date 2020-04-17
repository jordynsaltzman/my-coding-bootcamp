import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";
import LoginWindow from "./components/LoginWindow/LoginWindow";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/login" component={LoginWindow} />
      <Route path="/home" component={HomePage} />
    </Router>
  );
};

export default App;

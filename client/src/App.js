import React from "react";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import LoginWindow from "./components/LoginWindow/LoginWindow";
import AuthRoutes from "./RouteGuards/AuthRoutes";
import UnauthRoutes from "./RouteGuards/UnauthRoutes";
import { Router, Route } from "react-router-dom";
import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <UnauthRoutes path="/login" component={LoginWindow} />
      <Route path="/about" component={AboutPage} />
      <AuthRoutes path="/home" component={HomePage} />
    </Router>
  );
};

export default App;

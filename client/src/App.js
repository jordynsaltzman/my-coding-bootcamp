import React from "react";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import LoginWindow from "./components/LoginWindow/LoginWindow";
import AuthRoutes from "./RouteGuards/AuthRoutes";
import UnauthRoutes from "./RouteGuards/UnauthRoutes";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <UnauthRoutes path="/login" component={LoginWindow} />
      <Route exact path="/about" component={AboutPage} />
      <AuthRoutes path="/" component={HomePage} />
    </Switch>
  );
};

export default App;

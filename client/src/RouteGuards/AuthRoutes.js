import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const AuthRoutes = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  console.log("called in auth");
  return (
    <Route
      {...rest}
      render={(props) =>
        token !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default AuthRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const UnauthRoutes = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  console.log("called");
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        )
      }
    />
  );
};

export default UnauthRoutes;

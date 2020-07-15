import React from "react";
import { Route, Redirect } from "react-router-dom";

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
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export default UnauthRoutes;

import React, {useState} from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthRoutes = ({ component: Component, ...rest }) => {
  const [user] = useState(localStorage.getItem('token'));
  console.log("called in auth");
  return (
    <Route 
            {...rest}
            render={props => 
                user !== null ? (
                    <Component {...props} />
                )
                :
                (
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



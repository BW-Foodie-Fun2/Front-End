import React from "react";
import { Route, Redirect } from "react-router-dom";

//note --rest is a 'banana' term, can call it anything!
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          window.alert("You must be logged in to continue!")
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
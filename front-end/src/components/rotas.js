import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

const RotaPrivada = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/Login", state: { from: props.location } }}
        />
      )
    }
  />
);
export default RotaPrivada;

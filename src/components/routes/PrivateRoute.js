import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  path,
  name,
  exact,
  component: MyComponent,
  isAuth,
}) => {
  return isAuth ? (
    <Route
      path={path}
      exact={exact}
      render={() => <MyComponent name={name} />}
    />
  ) : (
    <Redirect to="signin" />
  );
};

export default PrivateRoute;

import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import { getAuth } from "../../redux/selectors/authSelectors";

const Main = () => {
  const isAuth = useSelector(getAuth);

  return (
    <Suspense fallback={<h2>...loader</h2>}>
      <Switch>
        {mainRoutes.map((route) =>
          !route.isPrivate ? (
            <PublicRoute {...route} isAuth={isAuth} key={route.path} />
          ) : (
            <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default Main;

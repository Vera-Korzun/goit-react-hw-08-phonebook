import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <Suspense fallback={<h2>...loader</h2>}>
      <Switch>
        {mainRoutes.map(({ path, name, exact, component: MyComponent }) => (
          <Route
            path={path}
            exact={exact}
            key={path}
            render={() => <MyComponent name={name} />}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Main;

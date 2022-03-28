/* eslint-disable */
import { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import { protectedRoutes } from "routes/protected";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { Skeleton } from "router/skeleton";

const Main = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Switch>
        {protectedRoutes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
          return (
            <PrivateRoute
              path={prop.path}
              component={prop.component}
              isPublic={prop.isPublic}
              key={key}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};
export default Main;

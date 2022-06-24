/* eslint-disable */
import { Suspense } from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import { protectedRoutes } from "routes/protected";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { Skeleton } from "router/skeleton";
import { ResponsiveLayout } from "layouts/responsive";

const Main = () => {
  const location = useLocation();

  if (location.pathname === "/") return <Redirect to={"/profile"} />;
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

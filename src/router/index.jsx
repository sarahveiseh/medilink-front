import { Suspense } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { indexRoutes } from "routes/index";
import { Skeleton } from "./skeleton";
import { Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton />}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path} to={prop.to} key={key} />;
            return (
              <Route
                path={prop.path}
                component={prop.component}
                isPublic={prop.isPublic}
                key={key}
              />
            );
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

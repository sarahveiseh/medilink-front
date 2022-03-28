import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isPublic: isPublic,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      // authentication condition
      return true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth/login",
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

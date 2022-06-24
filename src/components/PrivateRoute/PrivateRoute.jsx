import { useUserContext } from "hooks";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { ResponsiveLayout } from "layouts/responsive";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userState } = useUserContext();

  //todo :  uncomment for auth logic
  if (!userState.user) return <Redirect to="/auth" />;
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <ResponsiveLayout>
            <Component {...props} />
          </ResponsiveLayout>
        );
      }}
    />
  );
};

import { Route, Redirect } from 'react-router-dom'
import AuthService from 'services/auth.service'

export const PrivateRoute = ({
  component: Component,
  isPublic: isPublic,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      return AuthService.isAuthenticated() === true || isPublic ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth/login',
            state: { from: props.location },
          }}
        />
      )
    }}
  />
)

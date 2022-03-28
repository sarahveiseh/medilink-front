import authRoutes from './routes/index'
import { Switch, Route, Redirect } from 'react-router-dom'

const Auth = (props) => {
  return (
    <Switch>
      {authRoutes.map((prop, key) => {
        if (prop.redirect)
          return <Redirect from={prop.path} to={prop.to} key={key} />
        return (
          <Route
            path={props.match.path + prop.path}
            component={prop.component}
            key={key}
          />
        )
      })}
    </Switch>
  )
}

export default Auth

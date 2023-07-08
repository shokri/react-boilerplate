import { Switch, BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import PrivateRoute from './PrivateRoute'

const Routes = () => (
  <Router>
    <Switch>
      {routes?.map((key, i) => (
        <PrivateRoute
          key={i}
          path={key.path}
          exact={key.exact}
          reverse={key.reverse}
          permission={key.permission}
          component={key.component}
          Layout={key.Layout}
        />
      ))}
    </Switch>
  </Router>
)

export default Routes

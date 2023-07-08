import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({
  component: Component,
  permission,
  reverse,
  Layout,
  path,
  ...rest
}) {
  const token = useSelector(state => state.user.access_token)

  if (reverse)
    return (
      <Route
        {...rest}
        path={path}
        render={props =>
          token ? (
            <Redirect to={{ pathname: '/' }} />
          ) : (
            <Layout>
              <Component {...props} {...rest} />
            </Layout>
          )
        }
      />
    )

  return (
    <Route
      {...rest}
      path={path}
      render={props =>
        token ? (
          <Layout>
            <Component {...props} {...rest} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  )
}

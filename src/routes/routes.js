import DashboardLayout from 'layouts/templates/dashboard-layout'
import PublicLayout from 'layouts/templates/public-layout'
import { lazy } from 'react'

const 
  Root = lazy(() => import('./Root')),
  NotFound = lazy(() => import('modules/not-found')),
  Login = lazy(() => import('modules/login'))

const routes = [
  {
    path: '/login',
    exact: true,
    reverse: true,
    component: Login,
    Layout: PublicLayout
  },
  {
    path: '/',
    exact: true,
    reverse: false,
    component: Root,
    Layout: DashboardLayout
  },
  {
    path: '*',
    exact: false,
    reverse: false,
    component: NotFound,
    Layout: PublicLayout
  }
]

// flatten the list of all nested routes
const flattenRoutes = routes => {
  let flatRoutes = []

  routes = routes || []
  routes.forEach(item => {
    flatRoutes.push(item)

    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
    }
  })
  return flatRoutes
}

export default flattenRoutes([...routes])

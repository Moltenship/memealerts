import { Navigate, createBrowserRouter } from 'react-router-dom'
import { alertRoutes } from './features/alerts/routes'

export const router = createBrowserRouter([
  ...alertRoutes,
  {
    path: '/',
    element: <Navigate to="/alerts/uselessmouth"></Navigate>
  }
])

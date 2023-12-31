import { Navigate, createHashRouter } from 'react-router-dom'
import { alertRoutes } from './features/alerts/routes'
import { MainLayout } from './components/ui/MainLayout'

export const router = createHashRouter([
  {
    path: '',
    element: <MainLayout></MainLayout>,
    children: [
      ...alertRoutes,
      {
        path: '/',
        element: <Navigate to="/last-alerts/uselessmouth"></Navigate>
      }
    ]
  }
])

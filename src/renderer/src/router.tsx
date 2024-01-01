import { Navigate, createHashRouter } from 'react-router-dom'
import { alertRoutes } from './features/alerts/routes'
import { MainLayout } from './components/ui/MainLayout'
import { streamerRoutes } from './features/streamer/routes'

export const router = createHashRouter([
  {
    path: '',
    element: <MainLayout></MainLayout>,
    children: [
      ...alertRoutes,
      ...streamerRoutes,
      {
        path: '/',
        element: <Navigate to="/featured"></Navigate>
      },
      {
        path: '*',
        element: <Navigate to="/featured"></Navigate>
      }
    ]
  }
])

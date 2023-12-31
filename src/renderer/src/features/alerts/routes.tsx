import { RouteObject } from 'react-router-dom'
import { AlertsPage } from './pages/AlertsPage'
import { Suspense } from 'react'

export const alertRoutes: RouteObject[] = [
  {
    path: 'alerts/:user',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AlertsPage />
      </Suspense>
    )
  }
]

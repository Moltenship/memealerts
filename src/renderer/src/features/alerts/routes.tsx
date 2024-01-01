import { RouteObject } from 'react-router-dom'
import { AlertsPage } from './pages/AlertsPage'
import { Suspense } from 'react'
import { CataloguePage } from './pages/CataloguePage'

export const alertRoutes: RouteObject[] = [
  {
    path: 'last-alerts/:streamer',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AlertsPage />
      </Suspense>
    )
  },
  {
    path: 'catalogue/:streamer',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CataloguePage />
      </Suspense>
    )
  }
]

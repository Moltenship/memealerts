import { RouteObject } from 'react-router-dom'
import { AlertsPage } from './pages/AlertsPage'
import { Suspense } from 'react'
import { SearchPage } from './pages/SearchPage'

export const alertRoutes: RouteObject[] = [
  {
    path: 'last-alerts/:user',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AlertsPage />
      </Suspense>
    )
  },
  {
    path: 'user-alerts/:user',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SearchPage />
      </Suspense>
    )
  }
]

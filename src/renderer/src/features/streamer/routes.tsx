import { Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import { FeaturedUsersPage } from './pages/FeaturedStreamersPage'

export const streamerRoutes: RouteObject[] = [
  {
    path: 'featured',
    element: (
      <Suspense fallback={<div>loading</div>}>
        <FeaturedUsersPage />
      </Suspense>
    )
  }
]

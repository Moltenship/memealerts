import { Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import { FeaturedStreamersSkeleton, FeaturedUsersPage } from './pages/FeaturedStreamersPage'

export const streamerRoutes: RouteObject[] = [
  {
    path: 'featured',
    element: (
      <Suspense fallback={<FeaturedStreamersSkeleton />}>
        <FeaturedUsersPage />
      </Suspense>
    )
  }
]

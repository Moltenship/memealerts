import { useGetUser } from '@renderer/queries/useGetUser'
import { FC, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { Alerts } from '../components/Alerts'

export const AlertsPage: FC = () => {
  const params = useParams()
  const { data: user } = useGetUser(params.user!)
  return (
    <div>
      <h1>{user?.id}</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Alerts streamerId={user.id}></Alerts>
      </Suspense>
    </div>
  )
}

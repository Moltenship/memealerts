import { useGetUser } from '@renderer/queries/useGetUser'
import { FC, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { LastSentAlerts, LastSentAlertsSkeleton } from '../components/LastSentAlerts'

export const AlertsPage: FC = () => {
  const params = useParams()
  const { data: user } = useGetUser(params.user!)
  return (
    <div>
      <Suspense fallback={<LastSentAlertsSkeleton></LastSentAlertsSkeleton>}>
        <LastSentAlerts streamerId={user.id}></LastSentAlerts>
      </Suspense>
    </div>
  )
}

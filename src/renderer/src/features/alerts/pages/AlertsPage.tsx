import { FC, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { LastSentAlerts } from '../components/LastSentAlerts'
import { OptionsControls, useOptionsControls } from '@renderer/components/ui/OptionsControls'
import { AlertsSkeleton } from '../components/Alerts'

export const AlertsPage: FC = () => {
  const params = useParams()

  const { options, onPageChange } = useOptionsControls(params.streamer!)
  return (
    <div className="flex flex-col gap-4">
      <OptionsControls
        pageSize={options.pageSize}
        skip={options.skip}
        onPageChange={onPageChange}
      ></OptionsControls>
      <Suspense fallback={<AlertsSkeleton></AlertsSkeleton>}>
        <LastSentAlerts options={options}></LastSentAlerts>
      </Suspense>
    </div>
  )
}

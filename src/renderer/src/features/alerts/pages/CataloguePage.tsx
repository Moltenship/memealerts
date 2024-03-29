import { useParams } from 'react-router-dom'
import { UserAlerts } from '../components/StreamerAlerts'
import { Suspense } from 'react'
import { AlertsSkeleton } from '../components/Alerts'
import { OptionsControls, useOptionsControls } from '@renderer/components/ui/OptionsControls'

export const CataloguePage = () => {
  const params = useParams()
  const { options, onPageChange, onSearchChange, searchQuery } = useOptionsControls(
    params.streamer!
  )

  return (
    <div className="flex flex-col gap-4">
      <OptionsControls
        pageSize={options.pageSize}
        onSearchChange={onSearchChange}
        onPageChange={onPageChange}
        searchQuery={searchQuery}
        skip={options.skip}
      />
      <Suspense fallback={<AlertsSkeleton></AlertsSkeleton>}>
        <UserAlerts options={options} />
      </Suspense>
    </div>
  )
}

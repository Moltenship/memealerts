import { useGetStreamer } from '@renderer/queries/useGetStreamer'
import { useParams } from 'react-router-dom'
import { UserAlerts } from '../components/StreamerAlerts'
import { Suspense } from 'react'
import { AlertsSkeleton } from '../components/Alerts'
import { OptionsControls, useOptionsControls } from '@renderer/components/ui/OptionsControls'

export const SearchPage = () => {
  const params = useParams()
  const { data: streamer } = useGetStreamer(params.streamer!)
  const { options, onPageChange, onSearchChange, searchQuery } = useOptionsControls(streamer.id)

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

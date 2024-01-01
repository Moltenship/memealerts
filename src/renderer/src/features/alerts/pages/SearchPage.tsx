import { useGetUser } from '@renderer/queries/useGetUser'
import { useParams } from 'react-router-dom'
import { UserAlerts } from '../components/UserAlerts'
import { Suspense } from 'react'
import { AlertsSkeleton } from '../components/Alerts'
import { OptionsControls, useOptionsControls } from '@renderer/components/ui/OptionsControls'

export const SearchPage = () => {
  const params = useParams()
  const { data: user } = useGetUser(params.user!)
  const { options, onPageChange, onSearchChange, searchQuery } = useOptionsControls(user.id)

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

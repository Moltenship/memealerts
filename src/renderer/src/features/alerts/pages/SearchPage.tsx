import { useGetUser } from '@renderer/queries/useGetUser'
import { useParams } from 'react-router-dom'
import { UserAlerts } from '../components/UserAlerts'
import { Suspense, useMemo, useState } from 'react'
import { AlertsSkeleton } from '../components/Alerts'
import { MemeAlertsOptions } from '@renderer/api/memeAlertsApi'
import { useDebounce } from 'usehooks-ts'
import { OptionControls } from '@renderer/components/ui/OptionsControls'

export const SearchPage = () => {
  const params = useParams()
  const { data: user } = useGetUser(params.user!)
  const [options, setOptions] = useState<MemeAlertsOptions>({
    pageSize: 20,
    streamerId: user.id,
    skip: 0
  })

  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearchQuery = useDebounce(searchQuery, 1000)

  const debouncedOptions = useMemo(() => {
    return {
      ...options,
      skip: 0,
      searchQuery: debouncedSearchQuery
    }
  }, [debouncedSearchQuery])

  return (
    <div className="flex flex-col gap-4">
      <OptionControls
        pageSize={options.pageSize}
        onSearchChange={setSearchQuery}
        onPageChange={(skip) => setOptions((o) => ({ ...o, skip }))}
        searchQuery={searchQuery}
        skip={options.skip}
      />
      <Suspense fallback={<AlertsSkeleton></AlertsSkeleton>}>
        <UserAlerts options={debouncedOptions} />
      </Suspense>
    </div>
  )
}

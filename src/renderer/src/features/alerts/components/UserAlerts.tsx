import { MemeAlertsOptions } from '@renderer/api/memeAlertsApi'
import { useGetAlerts } from '@renderer/queries/useGetAlerts'
import { Alerts, AlertsSkeleton } from './Alerts'

type Props = {
  options: MemeAlertsOptions
}

export const UserAlerts = ({ options }: Props) => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetAlerts(options)

  return (
    <div className="flex flex-col gap-16">
      <Alerts
        memeAlerts={data.pages.flatMap((p) => p.alerts) ?? []}
        onScrollEnd={() => fetchNextPage()}
      ></Alerts>
      {isFetchingNextPage && <AlertsSkeleton />}
    </div>
  )
}

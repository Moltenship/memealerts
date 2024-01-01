import { MemeAlertsOptions } from '@renderer/api/memeAlertsApi'
import { useGetLastAlerts } from '@renderer/queries/useGetLastAlerts'
import { Alerts, AlertsSkeleton } from './Alerts'

type Props = {
  options: MemeAlertsOptions
}

export const LastSentAlerts = ({ options }: Props) => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetLastAlerts(options)
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

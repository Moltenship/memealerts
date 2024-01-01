import { MemeAlertsOptions } from '@renderer/api/memeAlertsApi'
import { useGetLastAlerts } from '@renderer/queries/useGetLastAlerts'
import { Alerts, AlertsSkeleton } from './Alerts'

type Props = {
  options: MemeAlertsOptions
}

export const LastSentAlerts = ({ options }: Props) => {
  const { data } = useGetLastAlerts(options)

  return <Alerts memeAlerts={data}></Alerts>
}

export const LastSentAlertsSkeleton = () => {
  return <AlertsSkeleton></AlertsSkeleton>
}

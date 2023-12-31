import { MemeAlertsOptions } from '@renderer/api/memeAlertsApi'
import { useGetAlerts } from '@renderer/queries/useGetAlerts'
import { Alerts } from './Alerts'

type Props = {
  options: MemeAlertsOptions
}

export const UserAlerts = ({ options }: Props) => {
  const { data } = useGetAlerts(options)

  return (
    <div>
      <Alerts memeAlerts={data}></Alerts>
    </div>
  )
}

import { MemeAlertsOptions, getLastAlerts } from '@renderer/api/memeAlertsApi'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useGetLastAlerts = (options: MemeAlertsOptions) => {
  return useSuspenseQuery({
    queryKey: ['last-alerts', options],
    queryFn: () => getLastAlerts(options)
  })
}

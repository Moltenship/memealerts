import { MemeAlertsOptions, getAlerts } from '@renderer/api/memeAlertsApi'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useGetAlerts = (options: MemeAlertsOptions) => {
  return useSuspenseQuery({
    queryKey: ['alerts', options],
    queryFn: () => getAlerts(options)
  })
}

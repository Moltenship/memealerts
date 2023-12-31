import { MemeAlertsOptions, getUserAlerts } from '@renderer/api/alertsApi'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useGetAlerts = (options: MemeAlertsOptions) => {
  return useSuspenseQuery({
    queryKey: ['alerts', options],
    queryFn: () => getUserAlerts(options),
    staleTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  })
}

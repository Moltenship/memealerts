import { getUserAlerts } from '@renderer/api/alertsApi'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useGetAlerts = (streamerId: string) => {
  return useSuspenseQuery({
    queryKey: ['alerts', streamerId],
    queryFn: () => getUserAlerts(streamerId),
    staleTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  })
}

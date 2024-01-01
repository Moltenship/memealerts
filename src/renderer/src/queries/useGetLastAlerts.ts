import { MemeAlertsOptions, getLastAlerts } from '@renderer/api/memeAlertsApi'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

export const useGetLastAlerts = (options: MemeAlertsOptions) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['last-alerts', options.streamerId, options.searchQuery],
    queryFn: ({ pageParam }) => getLastAlerts({ ...options, skip: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.next
  })
}

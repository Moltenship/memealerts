import { MemeAlertsOptions, getAlerts } from '@renderer/api/memeAlertsApi'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

export const useGetAlerts = (options: MemeAlertsOptions) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['alerts', options.streamerId, options.searchQuery],
    queryFn: ({ pageParam }) => getAlerts({ ...options, skip: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.next
  })
}

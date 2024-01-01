import { MemeAlertsOptions, getAlertsCatalogue, searchAlerts } from '@renderer/api/memeAlertsApi'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

export const useGetAlerts = (options: MemeAlertsOptions) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['alerts', options.streamerId, options.searchQuery],
    queryFn: ({ pageParam }) => {
      if (options.searchQuery) {
        return searchAlerts({ ...options, skip: pageParam })
      }
      return getAlertsCatalogue({ ...options, skip: pageParam })
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.next
  })
}

import { getStreamer } from '@renderer/api/userApi'
import { useSuspenseQueries } from '@tanstack/react-query'

export const useGetFeaturedStreamers = () => {
  const featuredStreamers = ['uselessmouth', 'melharucos', 'lasqa']
  return useSuspenseQueries({
    queries: featuredStreamers.map((username) => ({
      queryKey: ['streamer', username],
      queryFn: () => getStreamer(username)
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending)
      }
    }
  })
}

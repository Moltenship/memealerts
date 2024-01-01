import { getStreamer } from '@renderer/api/userApi'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useGetStreamer = (username: string) => {
  return useSuspenseQuery({
    queryKey: ['streamer', username],
    queryFn: () => getStreamer(username)
  })
}

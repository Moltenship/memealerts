import { getUser } from '@renderer/api/userApi'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useGetUser = (username: string) => {
  return useSuspenseQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username)
  })
}

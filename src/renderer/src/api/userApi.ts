import { User } from '@renderer/types/user'
import { apiClient } from './apiClient'

export async function getUser(username: string): Promise<User> {
  const user = await apiClient.post({ username }, '/user/find').json<User>()
  return user
}

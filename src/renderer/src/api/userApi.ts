import { apiClient } from './apiClient'

export type User = {
  id: string
}

export async function getUser(username: string): Promise<User> {
  const user = await apiClient.post({ username }, '/user/find').json<User>()
  return user
}

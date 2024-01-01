import { Streamer } from '@renderer/types/streamer'
import { apiClient } from './apiClient'

export async function getStreamer(username: string): Promise<Streamer> {
  const streamer = await apiClient.post({ username }, '/user/find').json<Streamer>()
  return streamer
}

export type Channel = {
  name: string
  avatarUrl: string
  backgroundUrl: string
}

export type Streamer = {
  id: string
  avatar: string
  channel: Channel
}

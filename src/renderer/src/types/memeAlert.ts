export type VideoData = {
  aspectRatio: number
  width: number
  height: number
}

export type MemeAlert = {
  id: string
  name: string
  fallbackUrl: string
  stickerUrl: string
  alertPreview: string
  description: string
  alertAnimatedPreview: string
  videoData: VideoData
}

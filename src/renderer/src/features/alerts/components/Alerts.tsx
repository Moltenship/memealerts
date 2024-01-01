import { MemeAlert as MemeAlertType } from '@renderer/types/memeAlert'
import { MemeAlert, MemeAlertSkeleton } from './MemeAlert'
import PhotoAlbum from 'react-photo-album'
import { useEffect } from 'react'

type Props = {
  memeAlerts: MemeAlertType[]
  onScrollEnd?: () => void
}

export const Alerts = ({ memeAlerts, onScrollEnd }: Props) => {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      memeAlerts.length < 20
    ) {
      return
    }
    onScrollEnd?.()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div>
      <PhotoAlbum
        photos={memeAlerts.map((meme) => ({
          height: meme.videoData.height,
          width: meme.videoData.width,
          src: meme.alertAnimatedPreview,
          meme
        }))}
        columns={4}
        spacing={16}
        layout="masonry"
        renderPhoto={({ photo: { meme } }) => <MemeAlert memeAlert={meme}></MemeAlert>}
      ></PhotoAlbum>
    </div>
  )
}

export const AlertsSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-6">
      {[...Array(20)].map((_, i) => (
        <MemeAlertSkeleton key={i}></MemeAlertSkeleton>
      ))}
    </div>
  )
}

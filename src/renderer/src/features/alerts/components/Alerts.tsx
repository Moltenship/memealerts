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
        columns={(containerWidth) => {
          if (containerWidth < 480) return 1
          if (containerWidth < 768) return 2
          if (containerWidth < 960) return 3
          return 4
        }}
        spacing={16}
        layout="masonry"
        renderPhoto={({ photo: { meme } }) => (
          <div className="mb-6">
            <MemeAlert memeAlert={meme} />
          </div>
        )}
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

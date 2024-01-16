import { copyVideo } from '@renderer/api/memeAlertsApi'
import { Button } from '@renderer/components/ui/Button'
import { Skeleton } from '@renderer/components/ui/Skeleton'
import { MemeAlert as MemeAlertType } from '@renderer/types/memeAlert'
import { CopyIcon, Volume2Icon, VolumeXIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

type Props = {
  memeAlert: MemeAlertType
}
export const MemeAlert = ({ memeAlert }: Props) => {
  const [isMuted, setIsMuted] = useState(true)
  const toastIdRef = useRef<string | number | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleAlertCopy = () => {
    toast.promise(() => copyVideo(memeAlert.fallbackUrl), {
      loading: 'Copying video to clipboard...',
      success: 'Copied to clipboard'
    })
  }

  useEffect(() => {
    if (!isMuted) {
      toastIdRef.current = toast(`Currently playing ${memeAlert.name}`, {
        duration: Infinity,
        action: {
          label: 'Mute',
          onClick: () => setIsMuted(true)
        }
      })
    }
    if (isMuted && toastIdRef.current !== null) {
      toast.dismiss(toastIdRef.current)
    }

    return () => {
      if (toastIdRef.current !== null) {
        toast.dismiss(toastIdRef.current)
        toastIdRef.current = null
      }
    }
  }, [isMuted, memeAlert.name])

  const handleMuteClick = () => {
    if (videoRef.current !== null && isMuted) {
      videoRef.current.currentTime = 0
    }
    setIsMuted((m) => !m)
  }

  return (
    <div className="flex flex-col gap-4 pb-4">
      <div className="relative group">
        <video
          className="w-[400px] rounded-xl"
          style={{ aspectRatio: memeAlert.videoData.aspectRatio }}
          src={memeAlert.alertUrl}
          controls={false}
          autoPlay
          loop
          ref={videoRef}
          playsInline
          muted={isMuted}
        />
        <Button
          onClick={handleMuteClick}
          variant="secondary"
          size="icon"
          className="invisible group-hover:visible absolute top-2 right-2"
        >
          {isMuted ? <VolumeXIcon size="1rem"></VolumeXIcon> : <Volume2Icon size="1rem" />}
        </Button>
        <Button
          variant="secondary"
          className="absolute invisible group-hover:visible bottom-2 right-2"
          size="icon"
          onClick={handleAlertCopy}
        >
          <CopyIcon size="1rem" />
        </Button>
      </div>

      <span className="text-xl break-words min-w-0">{memeAlert.name}</span>
    </div>
  )
}

export const MemeAlertSkeleton = () => {
  const height = Math.floor(Math.random() * (550 - 150 + 1) + 150)
  return (
    <div className="flex flex-col gap-4">
      <Skeleton style={{ height }} className="h-[200px]  max-w-[400px]" />
      <Skeleton className="h-5 w-3/4"></Skeleton>
    </div>
  )
}

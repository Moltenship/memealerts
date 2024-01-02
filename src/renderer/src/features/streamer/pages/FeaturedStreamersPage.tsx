import { useGetFeaturedStreamers } from '@renderer/queries/useGetFeaturedStreamers'
import { Streamer, StreamerSkeleton } from '../components/Streamer'

export const FeaturedUsersPage = () => {
  const { data } = useGetFeaturedStreamers()

  return (
    <div className="grid grid-cols-2 gap-6">
      {data.map((streamer) => (
        <Streamer key={streamer.id} streamer={streamer} />
      ))}
    </div>
  )
}

export const FeaturedStreamersSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {[...Array(20)].map((_, i) => (
        <StreamerSkeleton key={i}></StreamerSkeleton>
      ))}
    </div>
  )
}

import { Button } from '@renderer/components/ui/Button'
import { Avatar, AvatarFallback, AvatarImage } from '@renderer/components/ui/Avatar'
import { Streamer as StreamerType } from '@renderer/types/streamer'
import { NavLink } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@renderer/components/ui/DropdownMenu'
import { MoreHorizontalIcon } from 'lucide-react'
import { Skeleton } from '@renderer/components/ui/Skeleton'

type Props = {
  streamer: StreamerType
}

export const Streamer = ({ streamer }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-4 items-center">
        <Avatar className="h-[60px] w-[60px]">
          <AvatarImage src={streamer.channel.avatarUrl} />
          <AvatarFallback>{streamer.channel.name}</AvatarFallback>
        </Avatar>
        <div className="text-xl">{streamer.channel.name}</div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontalIcon></MoreHorizontalIcon>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <NavLink to={`/last-alerts/${streamer.id}`}>Last alerts</NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to={`/catalogue/${streamer.id}`}>All alerts</NavLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export const StreamerSkeleton = () => {
  return (
    <div className="flex gap-4 items-center">
      <Skeleton className="rounded-full h-[60px] w-[60px]"></Skeleton>
      <Skeleton className="h-5 w-3/4"></Skeleton>
    </div>
  )
}

import { Button } from '@renderer/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@renderer/components/ui/Card'
import { Avatar, AvatarFallback, AvatarImage } from '@renderer/components/ui/avatar'
import { Streamer as StreamerType } from '@renderer/types/streamer'
import { NavLink } from 'react-router-dom'

type Props = {
  streamer: StreamerType
}

export const Streamer = ({ streamer }: Props) => {
  return (
    <Card>
      <CardHeader
        className="h-[200px] bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${streamer.channel.backgroundUrl}` }}
      >
        <CardTitle>{streamer.channel.name}</CardTitle>
        <Avatar className="h-[60px] w-[60px] top-0 right-4 absolute">
          <AvatarImage src={streamer.channel.avatarUrl} />
          <AvatarFallback>{streamer.channel.name}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <Button asChild variant="link" className="uppercase">
          <NavLink to={`/last-sent/${streamer.id}`}>Last alerts</NavLink>
        </Button>
        <Button asChild variant="link" className="uppercase">
          <NavLink to={`/steamer-alerts/${streamer.id}`}>Search streamer alerts</NavLink>
        </Button>
      </CardContent>
    </Card>
  )
}

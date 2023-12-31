import { getAlertArrayBuffer } from '@renderer/api/alertsApi'
import { Button } from '@renderer/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@renderer/components/ui/Card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@renderer/components/ui/pagination'
import { useGetAlerts } from '@renderer/queries/useGetAlerts'

type Props = {
  streamerId: string
}

export const Alerts = ({ streamerId }: Props) => {
  const { data } = useGetAlerts(streamerId)
  return (
    <div className="container flex flex-wrap gap-4">
      {data.map((memeAlert) => (
        <Card key={memeAlert.id} className="w-[40%]">
          <CardHeader>
            <CardTitle>{memeAlert.name}</CardTitle>
            <CardDescription>{memeAlert.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img className="h-36 w-36 object-contain" src={memeAlert.alertAnimatedPreview} alt="" />
          </CardContent>
          <CardFooter>
            <Button
              onClick={async () => {
                const arrayBuffer = await getAlertArrayBuffer(memeAlert.alertUrl)
                window.api.copy(arrayBuffer)
              }}
            >
              Copy
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

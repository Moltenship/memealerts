import { MemeAlertsOptions, getAlertArrayBuffer } from '@renderer/api/alertsApi'
import { Button } from '@renderer/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@renderer/components/ui/Card'
import { useGetAlerts } from '@renderer/queries/useGetAlerts'
import { CopyIcon } from 'lucide-react'
import { useState } from 'react'

type Props = {
  streamerId: string
}

export const Alerts = ({ streamerId }: Props) => {
  const [options, setOptions] = useState<MemeAlertsOptions>(() => ({
    pageSize: 20,
    streamerId,
    skip: 0
  }))

  const { data } = useGetAlerts(options)

  return (
    <div className="container flex flex-col gap-4">
      <div className="flex gap-4 justify-between w-full">
        <Button
          disabled={options.skip === 0}
          onClick={() => setOptions((o) => ({ ...o, skip: o.skip - o.pageSize }))}
        >
          Prev
        </Button>
        <Button
          disabled={data.length === 0}
          onClick={() => setOptions((o) => ({ ...o, skip: o.skip + o.pageSize }))}
        >
          Next
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data.map((memeAlert) => (
          <Card key={memeAlert.id}>
            <CardHeader>
              <CardTitle>{memeAlert.name}</CardTitle>
              <CardDescription>{memeAlert.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                className="h-36 w-36 object-contain"
                src={memeAlert.alertAnimatedPreview}
                alt=""
              />
            </CardContent>
            <CardFooter>
              <Button
                onClick={async () => {
                  const arrayBuffer = await getAlertArrayBuffer(memeAlert.fallbackUrl)
                  window.api.copy(arrayBuffer)
                }}
              >
                <CopyIcon />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

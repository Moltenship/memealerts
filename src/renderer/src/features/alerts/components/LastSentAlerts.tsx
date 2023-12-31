import { MemeAlertsOptions } from '@renderer/api/alertsApi'
import { Button } from '@renderer/components/ui/Button'
import { useGetAlerts } from '@renderer/queries/useGetAlerts'
import { useState } from 'react'
import { Alerts, AlertsSkeleton } from './Alerts'

type Props = {
  streamerId: string
}

export const LastSentAlerts = ({ streamerId }: Props) => {
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
      <Alerts memeAlerts={data}></Alerts>
    </div>
  )
}

export const LastSentAlertsSkeleton = () => {
  return (
    <div className="container flex flex-col gap-4">
      <div className="flex gap-4 justify-between w-full">
        <Button disabled>Prev</Button>
        <Button disabled>Next</Button>
      </div>
      <AlertsSkeleton></AlertsSkeleton>
    </div>
  )
}

import { MemeAlert as MemeAlertType } from '@renderer/types/memeAlert'
import { MemeAlert, MemeAlertSkeleton } from './MemeAlert'

type Props = {
  memeAlerts: MemeAlertType[]
}

export const Alerts = ({ memeAlerts }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-6">
      {memeAlerts.map((memeAlert) => (
        <MemeAlert memeAlert={memeAlert} key={memeAlert.id}></MemeAlert>
      ))}
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

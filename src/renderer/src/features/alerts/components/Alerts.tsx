import { MemeAlert as MemeAlertType } from '@renderer/types/memeAlert'
import { MemeAlert, MemeAlertSkeleton } from './MemeAlert'

type Props = {
  memeAlerts: MemeAlertType[]
}

export const Alerts = ({ memeAlerts }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {memeAlerts.map((memeAlert) => (
        <MemeAlert memeAlert={memeAlert} key={memeAlert.id}></MemeAlert>
      ))}
    </div>
  )
}

export const AlertsSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[...Array(20)].map((_, i) => (
        <MemeAlertSkeleton key={i}></MemeAlertSkeleton>
      ))}
    </div>
  )
}

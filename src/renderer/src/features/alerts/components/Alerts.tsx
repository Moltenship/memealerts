import { getAlertArrayBuffer } from '@renderer/api/alertsApi'
import { useGetAlerts } from '@renderer/queries/useGetAlerts'

type Props = {
  streamerId: string
}

export const Alerts = ({ streamerId }: Props) => {
  const { data } = useGetAlerts(streamerId)
  return (
    <div>
      {data.map((memeAlert) => (
        <div key={memeAlert.id}>
          {memeAlert.name}
          <img src={memeAlert.alertAnimatedPreview} alt="" />
          <button
            onClick={async () => {
              const arrayBuffer = await getAlertArrayBuffer(memeAlert.alertUrl)
              window.api.copy(arrayBuffer)
            }}
          >
            test
          </button>
        </div>
      ))}
    </div>
  )
}

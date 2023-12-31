import { getAlertArrayBuffer } from '@renderer/api/alertsApi'
import { Button } from '@renderer/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@renderer/components/ui/Card'
import { Skeleton } from '@renderer/components/ui/skeleton'
import { MemeAlert as MemeAlertType } from '@renderer/types/memeAlert'
import { CopyIcon } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
  memeAlert: MemeAlertType
}
export const MemeAlert = ({ memeAlert }: Props) => {
  const handleAlertCopy = async () => {
    const arrayBuffer = await getAlertArrayBuffer(memeAlert.fallbackUrl)
    window.api.copy(arrayBuffer, () => {
      toast('Copied to clipboard!', { duration: 1500 })
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          {memeAlert.name}
          <Button variant="ghost" size="sm" onClick={handleAlertCopy}>
            <CopyIcon size="1rem" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img
          className="h-36 w-full object-contain"
          src={memeAlert.alertAnimatedPreview}
          alt={memeAlert.description || memeAlert.name}
        />
      </CardContent>
    </Card>
  )
}

export const MemeAlertSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Skeleton className="h-4 w-[90%]"></Skeleton>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-36 w-full object-contain" />
      </CardContent>
    </Card>
  )
}

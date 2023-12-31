import { MemeAlert } from '@renderer/types/memeAlert'
import { apiClient } from './apiClient'
import wretch from 'wretch'

export type MemeAlertsOptions = {
  streamerId: string
  pageSize: number
  skip: number
}

export async function getUserAlerts(options: MemeAlertsOptions) {
  const alerts = await apiClient
    .post(options, '/sticker/streamer-area/last-sent-by-all')
    .json<MemeAlert[]>()
  return alerts
}

export async function getAlertArrayBuffer(alertUrl: string) {
  const alertId = alertUrl.split('/p')[1]
  const alert = await wretch('/alerts').get(alertId).blob()
  const alertArrayBuffer = await alert.arrayBuffer()
  return alertArrayBuffer
}

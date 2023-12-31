import { apiClient } from './apiClient'
import wretch from 'wretch'

export type MemeAlert = {
  id: string
  name: string
  fallbackUrl: string
  alertUrl: string
  alertPreview: string
  description: string
  alertAnimatedPreview: string
}

export async function getUserAlerts(userId: string) {
  const alerts = await apiClient
    .post({ streamerId: userId, pageSize: 20, skip: 0 }, '/sticker/streamer-area/last-sent-by-all')
    .json<MemeAlert[]>()
  return alerts
}

export async function getAlertArrayBuffer(alertUrl: string) {
  const alertId = alertUrl.split('/p')[1]
  const alert = await wretch('/alerts').get(alertId).blob()
  const alertArrayBuffer = await alert.arrayBuffer()
  return alertArrayBuffer
}

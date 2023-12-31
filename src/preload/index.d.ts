import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      copy: (buffer: ArrayBuffer, onSuccess: () => void) => void
    }
  }
}

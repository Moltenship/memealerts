import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { spawn } from 'child_process'
import { writeFileSync } from 'fs'

// Custom APIs for renderer
const api = {
  /**
   * Saves video and then copies it to the clipboard.
   * @param buffer The video buffer to save and copy.
   */
  copy: (buffer: ArrayBuffer): void => {
    const videoPath = 'test.mp4'
    const array = new Uint8Array(buffer)
    writeFileSync(videoPath, array)
    const powershellProcess = spawn('powershell.exe', [
      '-ExecutionPolicy',
      'Bypass',
      '-NoProfile',
      '-Command',
      `Set-Clipboard -Path "${videoPath}"`
    ])
    powershellProcess.on('exit', (code) => {
      if (code === 0) {
        console.log('File path copied to clipboard successfully')
      } else {
        console.error(`Error copying file path to clipboard. Exit code: ${code}`)
      }
    })
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

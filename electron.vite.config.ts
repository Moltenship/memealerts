import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://memealerts.com/api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/alerts': {
          target: 'https://cdn.memealerts.com/p',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/alerts/, '')
        }
      }
    },
    plugins: [react()]
  }
})

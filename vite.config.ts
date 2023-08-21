import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1024,
    open: true,
    proxy: {
      "/iam": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
      "/film": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      }
    }
  }
})

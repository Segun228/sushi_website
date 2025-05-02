import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    allowedHosts: ['crimson-dragon.onrender.com', 'localhost'], 
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8080
  }
})
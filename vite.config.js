import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['crimson_dragon.onrender.com', 'localhost'], 
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8080
  }
})
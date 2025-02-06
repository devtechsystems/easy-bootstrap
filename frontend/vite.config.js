import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow external access
    port: 3000,       // Match the port in docker-compose.yml
    watch: {
      usePolling: true  // Enable hot reload in Docker
    }
  }
})

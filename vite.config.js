import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace `react_todoapp` with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/react_todoapp/',
})

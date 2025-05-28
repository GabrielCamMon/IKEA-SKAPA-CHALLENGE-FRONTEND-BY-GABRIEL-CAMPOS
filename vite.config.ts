import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/IKEA-SKAPA-CHALLENGE-FRONTEND-BY-GABRIEL-CAMPOS/',
  plugins: [react()],
})

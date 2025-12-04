import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/dila/',   // <--- harus sama dengan nama repo kamu
  plugins: [react()]
})



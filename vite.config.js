import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
//   base: "/bithead010/e-plantShopping",
  base: "/e-plantShopping",
  plugins: [react()],
})

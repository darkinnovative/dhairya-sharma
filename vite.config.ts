import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig(({ command }) => ({
//   plugins: [react()],
//   base: command === 'build' ? '/dhairya_sharma-/' : '/',
// }))

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 use relative base path for Versal compatibility
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig(({ command }) => ({
//   plugins: [react()],
//   base: command === 'build' ? '/dhairya_sharma-/' : '/',
// }))

export default defineConfig({
  plugins: [react()],
  base: '/dhairya_sharma/', // must match your repo name
})
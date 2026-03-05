import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/portfolio/' to match your GitHub repo name
// e.g. if repo is github.com/ttosh/my-site, use '/my-site/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})

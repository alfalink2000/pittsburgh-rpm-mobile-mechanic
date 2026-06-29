import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pittsburgh-rpm-mobile-mechanic/',
  build: {
    minify: 'esbuild',
  },
})

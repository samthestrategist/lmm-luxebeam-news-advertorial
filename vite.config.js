import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/lmm-luxebeam-news-advertorial/',
  build: { outDir: 'docs' },
})

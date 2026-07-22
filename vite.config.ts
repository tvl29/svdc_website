import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages base path — matches the repo at github.com/tvl29/svdc_website.
  // Dev server always runs at root; only the production build is namespaced.
  base: command === 'build' ? '/svdc_website/' : '/',
  build: {
    // Vite's own hashed JS/CSS output defaults to dist/assets/, which
    // collides in name with public/assets/ (images, video, logo) — both
    // would land in the same folder after build. Renaming this keeps the
    // two cleanly separated: dist/app/ for build output, dist/assets/ for
    // your media files.
    assetsDir: 'app',
  },
}))
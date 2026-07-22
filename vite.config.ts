import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages base path — adjust '/SVDC/' to match the final repo name.
  // Dev server always runs at root; only the production build is namespaced.
  base: command === 'build' ? '/SVDC/' : '/',
}))

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import fs from 'node:fs'

// Vite config — https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'direct-data-download',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/data' || req.url === '/data/') {
            const filePath = path.resolve(import.meta.dirname, './public/portfolio-info.txt')
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.setHeader('Content-Disposition', 'attachment; filename="portfolio-info.txt"')
            fs.createReadStream(filePath).pipe(res)
            return
          }
          next()
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    port: 5173,
  },
})

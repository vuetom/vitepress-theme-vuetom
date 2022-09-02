import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    fs: {
      strict: true,
      allow: ['../../']
    }
  }
})

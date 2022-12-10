import path from 'path'
import { defineConfig } from 'vite'
import type { Alias } from 'vite'
import { projRoot } from './.vitepress/utils/paths'

const alias: Alias[] = []

if (process.env.DOC_ENV !== 'production') {
  alias.push(
    {
      find: /^vitepress-theme-vuetom\/docs$/,
      replacement: path.resolve(projRoot, 'packages/vuetom/doc'), 
    },
    {
      find: /^vitepress-theme-vuetom\/blog$/,
      replacement: path.resolve(projRoot, 'packages/vuetom/blog'), 
    }
  )
}

export default defineConfig({
  server: {
    host: true,
    fs: {
      strict: true,
      allow: [projRoot]
    }
  },
  resolve: {
    alias,
  },
  optimizeDeps: {
    include: ['@vueuse/core']
  }
})

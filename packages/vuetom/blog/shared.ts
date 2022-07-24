export const EXTERNAL_URL_RE = /^https?:/i
export const APPEARANCE_KEY = 'vitepress-theme-appearance'
export const inBrowser = typeof window !== 'undefined'
export const notFoundPageData = {
  relativePath: '',
  title: '404',
  description: 'Not Found',
  headers: [],
  frontmatter: {},
  lastUpdated: 0
}

import { defineConfigWithTheme } from 'vitepress'
import { VuetomThemeConfig } from 'vitepress-theme-vuetom'
import pages from './conf/pages'

export default defineConfigWithTheme<VuetomThemeConfig>({
  lang: 'en-US',
  title: 'Vuetom Blog',
  titleTemplate: 'Vite & Vue powered static site generator',
  description: 'Just a blog',
  appearance: true,
  base: '/blog/',
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      }
    ],
    pages: pages(),
    outlineTitle: 'In hac pagina',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lauset/vitepress-theme-vuetom'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Vuetom'
    },
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    },
    bgImg: '/imgs/blog-bg.png',
    avatar: '/imgs/avatar.jpg',
    author: 'Vuetom'
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
})

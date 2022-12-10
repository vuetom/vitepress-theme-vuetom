import { defineConfigWithTheme } from 'vitepress'
import { VuetomThemeConfig } from 'vitepress-theme-vuetom'
import pages from './conf/posts'

export default defineConfigWithTheme<VuetomThemeConfig>({
  lang: 'en-US',
  title: 'Vuetom Blog',
  titleTemplate: 'My Blog',
  description: 'Just a blog',
  base: '/myblog',
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指导', link: '/pages/guide' },
      {
        text: '更多',
        items: [
          { text: '分类', link: '/categories/index' },
          { text: '标签', link: '/tags/index' }
        ]
      }
    ],
    sidebar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指导',
        link: '/pages/guide'
      },
      {
        text: '更多',
        items: []
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
    author: 'Vuetom',
    parallaxEnable: true,
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: false
  },
  vite: {
    ssr: {
      noExternal: ["vitepress-theme-vuetom"]
    }
  }
})

import { defineConfigWithTheme } from 'vitepress'
import { VuetomThemeConfig } from 'vitepress-theme-vuetom'
import pages from './conf/pages'

export default defineConfigWithTheme<VuetomThemeConfig>({
  lang: 'en-US',
  title: 'Vuetom Blog',
  titleTemplate: 'My Blog',
  description: 'Just a blog',
  appearance: true,
  base: '/myblog',
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'More',
        items: [
          { text: '分类', link: '/more/cate' },
          { text: '标签', link: '/more/tag' }
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
        link: '/guide'
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
    author: 'Vuetom'
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
})

import { build, defineConfigWithTheme, useData } from 'vitepress'
import { VuetomThemeConfig } from 'vitepress-theme-vuetom'
import pkg from '../package.json'
import { getNav, getSidebar, head, locales } from './menus'

const nav = getNav('zh-CN')
const sidebar = getSidebar('zh-CN')

export default defineConfigWithTheme<VuetomThemeConfig>({
  base: `/vt/`,
  ignoreDeadLinks: true,
  lastUpdated: true,
  head,
  locales: locales.vitepressConfig,
  themeConfig: {
    nav,
    sidebar,
    localeLinks: {
      text: '',
      items: [
          {
            text: '中文',
            link: '/lang/zhcn'
          },
          {
            text: 'English',
            link: '/lang/enus'
          }
      ]
    },
    socialLinks: [
      { icon: 'github', link: pkg.repository }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Lauset'
    },
    algolia: {
      appId: '8Q3CNX0EF2',
      apiKey: 'd44e3c8ec76aff9c758ef34f2cefe24d',
      indexName: 'dev_vuetom'
    },

    logoImg: '/logo/vuetom-logo-m.png',
    bgImg: '/imgs/homg-bg01.jpg',
    bgColor: '0,0,0',
    bgOpacity: 0.6,
    flashEnable: true,
    flashColor: ['238,17,17', '0,98,255'],
    parallaxEnable: true,
    pageBgEnable: true,
    pageBgOpacity: 0.8,
    featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)']

  },

  markdown: {
    lineNumbers: true
  },
  appearance: true,
  vite: {
    ssr: {
      noExternal: ["vitepress-theme-vuetom"]
    }
  }
})

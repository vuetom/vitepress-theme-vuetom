import { defineConfigWithTheme } from 'vitepress'
import { VuetomThemeConfig } from 'vitepress-theme-vuetom'
import { mdPlugin } from './utils/plugins'
import nav from './config/nav'
import head from './config/head'
import sidebar from './config/sidebars'
import pkg from '../package.json'

export default defineConfigWithTheme<VuetomThemeConfig>({
  lang: 'en-US',
  base: '/',
  title: 'Vuetom Theme',
  description: 'Theme For Vitepress',
  head,
  themeConfig: {
    repo: pkg.repository,
    docsDir: 'docs',
    sidebar,
    nav,
    bgImg: '/imgs/homg-bg01.jpg',
    bgColor: '0,0,0',
    bgOpacity: 0.6,
    flashEnable: true,
    flashColor: ['238,17,17', '0,98,255'],
    parallaxEnable: true,
    pageBgEnable: true,
    pageBgOpacity: 0.8,
    featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)'],
    locales: {
      '/zh-CN/': {
        label: '简体中文',
        selectText: '多国语言'
      },
      '/en-US/': {
        label: 'English',
        selectText: 'Languages'
      }
    }
  },
  locales: {
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Vuetom 主题',
      description: '为 Vitepress 提供的一款主题'
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Vuetom Theme',
      description: 'Theme For Vitepress'
    }
  },
  markdown: {
    lineNumbers: false,
    config: (md) => mdPlugin(md)
  },
  lastUpdated: true,
  scrollOffset: 20
})

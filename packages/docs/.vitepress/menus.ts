import type { HeadConfig } from 'vitepress'
import { languages } from './utils/lang'
import navJson from './i18n/nav.json'
import guideSidebarJson from './i18n/sidebars/guide.json'
import mdshowSidebarJson from './i18n/sidebars/mdshow.json'
import vitepressConfigJson from './i18n/vitepress-config.json'
import themeConfigJson from './i18n/theme-config.json'

type langType = 'zh-CN' | 'en-US'

const getVitepressConfigLocales = (lang: langType = 'zh-CN') => (vitepressConfigJson[lang])

const getThemeConfigLocales = (lang: langType = 'zh-CN') => {
  const sidebar = {}
  sidebar[`/${lang}/guide/`] = guideSidebarJson[lang]
  sidebar[`/${lang}/mdshow/`] = mdshowSidebarJson[lang]
  return {
    nav: navJson[lang],
    sidebar,
    ...themeConfigJson[lang]
  }
}

const getLocales = (langs: langType[] = []) => {
  const config = {
    vitepressConfig: {},
    themeConfig: {}
  }
  langs.forEach(lang => {
    config.vitepressConfig[`/${lang}/`] = getVitepressConfigLocales(lang)
    config.themeConfig[`/${lang}/`] = getThemeConfigLocales(lang)
  })
  return config
}

const getNav = (lang: 'zh-CN' | 'en-US' = 'zh-CN') => (navJson[lang])

const getSidebar = (lang: 'zh-CN' | 'en-US' = 'zh-CN') => ({
  '/guide/': guideSidebarJson[lang],
  '/mdshow/': mdshowSidebarJson[lang]
})

const head: HeadConfig[] = [
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
    }
  ],
  ['link', { rel: 'icon', href: '/logo/vuetom-logo-m.png' }],
  [
    'script', {}, ';(() => { })()'
  ],
  [
    'script',
    {},
    `;(() => {
      const supportedLangs = ${JSON.stringify(languages)}
      const cacheKey = 'vuetom_langs'
      localStorage.setItem(cacheKey, supportedLangs)
    })()`
  ]
]

// const nav = (lang: '/zh-CN' | '/en-US' | '' = '') => [
//   { text: '指引', link: `${lang}/guide/info`, activeMatch: '/guide/' },
//   { text: '组件', link: `${lang}/mdshow/`, activeMatch: '/mdshow/' },
//   {
//     text: '链接',
//     items: [
//       {
//         text: '反馈',
//         link: `${lang}/feedback/`,
//         activeMatch: '/feedback/',
//       },
//       {
//         text: '码云',
//         link: 'https://gitee.com/lauset/vitepress-theme-vuetom',
//       },
//       {
//         text: 'Vitepress官网',
//         link: 'https://vitepress.vuejs.org/',
//       },
//     ],
//   },
// ]

// const sidebarGuide = (lang: '/zh-CN' | '/en-US' | '' = '') => [
//   {
//     text: '基础',
//     collapsible: true,
//     items: [
//       { text: '什么是Vitepress?', link: `${lang}/guide/info` },
//       { text: '快速开始', link: `${lang}/guide/start` },
//       {
//         text: '问题一览',
//         link: `${lang}/guide/question`,
//       },
//       {
//         text: '主题目录',
//         link: `${lang}/guide/prodir`,
//       },
//     ],
//   },
//   {
//     text: '进阶',
//     collapsible: true,
//     items: [
//       {
//         text: '主题配置',
//         link: `${lang}/guide/config`,
//       },
//       {
//         text: '国际化',
//         link: `${lang}/guide/lang`,
//       },
//       {
//         text: '夜间模式',
//         link: `${lang}/guide/dark`,
//       },
//     ],
//   },
// ]

// const sidebarMdShow = (lang: '/zh-CN' | '/en-US' | '' = '') => [
//   {
//     text: '语法',
//     collapsible: true,
//     items: [
//       {
//         link: `${lang}/mdshow/example`,
//         text: 'MD语法示例',
//       },
//       {
//         link: `${lang}/mdshow/custom`,
//         text: '自定义语法',
//       },
//       {
//         link: `${lang}/mdshow/codeblock`,
//         text: '代码块展示',
//       },
//     ],
//   },
// ]
const nav = getNav()
const sidebar = getSidebar()
const locales = getLocales(['zh-CN', 'en-US'])

export { nav, sidebar, head, locales, getNav, getSidebar }

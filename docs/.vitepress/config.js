require('sucrase/register/ts')
const { resolve } = require('path')
const { mdPlugin } = require('./utils/plugins.ts')
const { nav } = require('./config/nav.ts')
const { sidebar } = require('./config/sidebars.ts')
// const { languages } = require('./utils/lang.ts')

// eslint-disable-next-line no-console
console.log(`DOC_ENV: ${process.env.DOC_ENV}`)

const locales = {
  '/zh-CN': {
    label: '简体中文',
    lang: 'zh-CN'
  },
  '/en-US': {
    label: 'English',
    lang: 'en-US'
  },
  '/zh-TW': {
    label: '繁体中文',
    lang: 'zh-TW'
  }
}
const languages = [
  'zh-CN',
  'en-US',
  'zh-TW'
]
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

exports.locales = locales

module.exports = {
  title: 'Vuetom',
  base: '/',
  dest: 'public',
  // theme: 'vuetom',
  theme: require.resolve('../../vuetom'), // 使用本地主题包
  // hmr: { overlay: false },
  head: getHead(),
  themeConfig: {
    docsDir: 'docs',
    author: 'lauset',
    smoothScroll: true,
    sidebar,
    nav,
    langs: locales,
    logoImg: '/logo/vuetom-logo.png',
    logoIcon: '/logo/vuetom-logo-s.png',
    bgImg: '/imgs/homg-bg01.jpg',
    bgColor: '0,0,0',
    bgOpacity: 0.6,
    pageBgEnable: true,
    pageBgOpacity: 0.6,
  },
  locales,
  markdown: {
    config: (md) => mdPlugin(md)
  }
}

function getHead() {
  return [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/logo/vuetom-logo-s.png' }]

    // 统计代码
    // [
    //   "script",
    //   { src: "" },
    // ],
    // 百度推送代码
    // [
    //   "script",
    //   { src: "/public/push.js" },
    // ],
  ]
}

// function getSidebar(lang) {
//   return [
//     {
//       text: '介绍',
//       link: `${lang}/guide/`,
//       children: [
//         { text: '什么是VuetomUI？', link: `${lang}/guide/info` },
//         { text: '开始使用', link: `${lang}/guide/start` },
//         { text: '常见问题', link: `${lang}/guide/question` },
//         { text: '框架目录', link: `${lang}/guide/prodir` }
//       ]
//     },
//     {
//       text: 'UI组件',
//       link: `${lang}/menu/`,
//       children: [
//         { text: 'Alert', link: `${lang}/menu/alert` },
//         { text: 'Button', link: `${lang}/menu/button` },
//         { text: 'Card', link: `${lang}/menu/card` },
//         { text: 'Dialog', link: `${lang}/menu/dialog` },
//         { text: 'Message', link: `${lang}/menu/message` },
//         { text: 'CodeBlock', link: `${lang}/menu/codeblock` }
//       ]
//     },
//     {
//       text: '样式与动画',
//       link: `${lang}/styl/`,
//       children: [
//         { text: '颜色', link: `${lang}/styl/colors` },
//         { text: '间距', link: `${lang}/styl/spacing` },
//         { text: '图标', link: `${lang}/styl/icons` }
//       ]
//     },
//     {
//       text: 'Markdown示例',
//       link: `${lang}/mdshow/`
//     },
//     {
//       text: '留言',
//       link: `${lang}/feedback/`
//     }
//   ]
// }

// function getNav(lang) {
//   return [
//     { text: '介绍', link: `${lang}/guide/info`, activeMatch: '^/$|^/guide/info' },
//     { text: '组件', link: `${lang}/menu/`, activeMatch: `${lang}/menu/` },
//     { text: '样式', link: `${lang}/styl/`, activeMatch: '/styl/' },
//     { text: '留言', link: `${lang}/feedback/`, activeMatch: '/feedback/' },
//     {
//       text: 'GITHUB',
//       link: 'https://github.com/lauset/vitepress-theme-vuetom'
//     },
//     { text: '更多地址', link: `${lang}/contact/`, activeMatch: '/contact/' }
//   ]
// }

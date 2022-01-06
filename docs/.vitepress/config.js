require('sucrase/register/ts')
const { resolve } = require('path')
const { mdPlugin } = require('./utils/plugins.ts')

const langNow = '/en-US'

module.exports = {
  title: 'Vuetom',
  base: '/',
  dest: 'public',
  lang: 'zh-CN',

  // theme: 'vdoing',
  theme: require.resolve('../../vuetom'), // 使用本地主题包
  // hmr: { overlay: false },
  head: getHead(langNow),
  themeConfig: {
    docsDir: 'docs',
    smoothScroll: true,
    sidebar: {
      '/': getSidebar(langNow)
    },
    author: '',
    nav: getNav(langNow)
  },
  markdown: {
    config: (md) => mdPlugin(md)
  }
}

function getHead(lang) {
  return [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/logo/vuetom-logo.png' }]

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

function getSidebar(lang) {
  return [
    {
      text: '介绍',
      link: `${lang}/guide/`,
      children: [
        { text: '什么是VuetomUI？', link: `${lang}/guide/info` },
        { text: '开始使用', link: `${lang}/guide/start` },
        { text: '常见问题', link: `${lang}/guide/question` },
        { text: '框架目录', link: `${lang}/guide/prodir` }
      ]
    },
    {
      text: 'UI组件',
      link: `${lang}/menu/`,
      children: [
        { text: 'Alert', link: `${lang}/menu/alert` },
        { text: 'Button', link: `${lang}/menu/button` },
        { text: 'Card', link: `${lang}/menu/card` },
        { text: 'Dialog', link: `${lang}/menu/dialog` },
        { text: 'Message', link: `${lang}/menu/message` },
        { text: 'CodeBlock', link: `${lang}/menu/codeblock` }
      ]
    },
    {
      text: '样式与动画',
      link: `${lang}/styl/`,
      children: [
        { text: '颜色', link: `${lang}/styl/colors` },
        { text: '间距', link: `${lang}/styl/spacing` },
        { text: '图标', link: `${lang}/styl/icons` }
      ]
    },
    {
      text: 'Markdown示例',
      link: `${lang}/mdshow/`
    },
    {
      text: '留言',
      link: `${lang}/feedback/`
    }
  ]
}

function getNav(lang) {
  return [
    { text: '介绍', link: `${lang}/guide/info`, activeMatch: '^/$|^/guide/info' },
    { text: '组件', link: `${lang}/menu/`, activeMatch: `${lang}/menu/` },
    { text: '样式', link: `${lang}/styl/`, activeMatch: '/styl/' },
    { text: '留言', link: `${lang}/feedback/`, activeMatch: '/feedback/' },
    {
      text: 'GITHUB',
      link: 'https://github.com/lauset/vitepress-theme-vuetom'
    },
    { text: '更多地址', link: `${lang}/contact/`, activeMatch: '/contact/' }
  ]
}

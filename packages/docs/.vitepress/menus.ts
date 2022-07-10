const nav = () => [
  { text: '指引', link: '/zh-CN/guide/info', activeMatch: '/guide/' },
  { text: '组件', link: '/zh-CN/mdshow/index', activeMatch: '/config/' },
  {
    text: '链接',
    items: [
      {
        text: '反馈',
        link: '/zh-CN/feedback/',
        activeMatch: '/feedback/'
      },
      {
        text: '码云',
        link: 'https://gitee.com/lauset/vitepress-theme-vuetom'
      },
      {
        text: 'Vitepress官网',
        link: 'https://vitepress.vuejs.org/'
      }
    ]
  }
]

const sidebarGuide = () => [
  {
    text: '基础',
    collapsible: true,
    items: [
      { text: '什么是Vitepress?', link: '/zh-CN/guide/info' },
      { text: '快速开始', link: '/zh-CN/guide/start' },
      {
        text: '问题一览',
        link: '/zh-CN/guide/question'
      },
      {
        text: '主题目录',
        link: '/zh-CN/guide/prodir'
      }
    ]
  },
  {
    text: '进阶',
    collapsible: true,
    items: [
      {
        text: '主题配置',
        link: '/zh-CN/guide/config'
      },
      {
        text: '国际化',
        link: '/zh-CN/guide/lang'
      },
      {
        text: '夜间模式',
        link: '/zh-CN/guide/dark'
      }
    ]
  }
]

const sidebarMdShow = () => [
  {
    text: '语法',
    collapsible: true,
    items: [
      {
        link: 'zh-CN/mdshow/example',
        text: 'MD语法示例'
      },
      {
        link: 'zh-CN/mdshow/custom',
        text: '自定义语法'
      },
      {
        link: 'zh-CN/mdshow/codeblock',
        text: '代码块展示'
      }
    ]
  }
]

export { nav, sidebarGuide, sidebarMdShow }

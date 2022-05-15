import fs from 'fs'
import path from 'path'
import type { HeadConfig } from 'vitepress'
import { languages } from '../utils/lang'

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
      const cacheKey = 'vuetom_lang'
      const defaultLang = 'zh-CN'
      let preLang = localStorage.getItem(cacheKey) || navigator.language
      let language = supportedLangs.includes(preLang) ? preLang : defaultLang
      localStorage.setItem(cacheKey, language)
      preLang = language
      if (!location.pathname.startsWith('/' + preLang)) {
        const toPath = ['/' + preLang]
          .concat(location.pathname.split('/').slice(2))
          .join('/')
        location.pathname = toPath.endsWith('.html') || toPath.endsWith('/')
          ? toPath
          : toPath.concat('/')
      }
    })()`
  ]

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

export default head

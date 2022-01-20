import fs from 'fs'
import path from 'path'
import type { HeadConfig } from 'vitepress'
import { vpRoot } from '../utils/paths'
import { languages } from '../utils/lang'

const head: HeadConfig[] = [
  [
    'meta',
    {
      name: 'viewport',
      content:
            'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
    }
  ],
  ['link', { rel: 'icon', href: '/logo/vuetom-logo-s.png' }],
  [
    'script',
    {},
    `;(() => {
          window.supportedLangs = ${JSON.stringify(languages)}
        })()`
  ],
  ['script', {}, fs.readFileSync(path.resolve(vpRoot, 'lang.js'), 'utf-8')]

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

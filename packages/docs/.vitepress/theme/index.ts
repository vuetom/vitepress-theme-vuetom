// .vitepress/theme/index.js
// import VuetomTheme from '../../../vuetom/index'

import VuetomTheme from 'vitepress-theme-vuetom'
import { globals } from '../views'
import './custom.scss'

export default {
  ...VuetomTheme,

  // NotFound,
  // Layout,
  enhanceApp({ app, router, siteData }) {
    // app.use(VuetomUI)

    // 注册组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })

    // components.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })
  }
}

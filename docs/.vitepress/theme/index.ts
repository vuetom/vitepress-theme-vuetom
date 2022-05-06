// .vitepress/theme/index.js
import VuetomTheme from '../../../vuetom'
import { globals } from '../views'

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

// .vitepress/theme/index.js
import VuetomTheme, { VuetomUI } from '../../../vuetom'
import { globals } from '../views'

export default {
  ...VuetomTheme,

  // NotFound,
  // Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(VuetomUI)

    // 注册组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })

    // components.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })

    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  }
}

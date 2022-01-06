// .vitepress/theme/index.js
import DefaultTheme, { VuetomUI } from '../../../vuetom' // To extend default theme.
import { globals } from '../views'

export default {
  ...DefaultTheme,

  // NotFound,

  // Layout: VtApp,
  logo: '/logo/vuetom-logo.png',
  enhanceApp({ app, router, siteData }) {
    app.use(VuetomUI)

    // app.use(ElementPlus)
    // app.mixin({
    //   mounted() {
    //     var VuetomUI = require('@lauset/vuetom-ui/src/index.js')
    //     app.use(VuetomUI)
    //     import('@lauset/vuetom-ui/src/index.js').then(function(m){
    //       app.use(m.default)
    //     })
    //   }
    // })

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

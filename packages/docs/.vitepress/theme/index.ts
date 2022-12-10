// .vitepress/theme/index.ts

// theme
import VuetomTheme from 'vitepress-theme-vuetom/docs'

// components
import { globals } from '../views'

// rewrite css
import './custom.scss'

export default {
  ...VuetomTheme,

  // NotFound,
  // Layout,
  enhanceApp({ app, router, siteData }) {
    // app.use(VuetomUI)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}

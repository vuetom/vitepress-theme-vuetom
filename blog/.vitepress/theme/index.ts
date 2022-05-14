// .vitepress/theme/index.js
import { BlogTheme } from '../../../vuetom'
import './custom.css'

export default {
  ...BlogTheme,
  enhanceApp({ app, router, siteData }) {
    // globals.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })
  }
}

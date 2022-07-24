// .vitepress/theme/index.js
// import { BlogTheme } from 'vitepress-theme-vuetom'
import { BlogTheme } from '../../../vuetom/index'
import './custom.css'

export default {
  ...BlogTheme,
  enhanceApp({ app, router, siteData }) {
    // globals.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })
  }
}

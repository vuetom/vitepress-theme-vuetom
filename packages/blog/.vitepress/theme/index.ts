// .vitepress/theme/index.js

// for prod
import BlogTheme from 'vitepress-theme-vuetom/blog'

// old
// import { BlogTheme } from 'vitepress-theme-vuetom'

import './custom.scss'

export default {
  ...BlogTheme,
  enhanceApp({ app, router, siteData }) {
    // globals.forEach(([name, Comp]) => {
    //   app.component(name, Comp)
    // })
  }
}

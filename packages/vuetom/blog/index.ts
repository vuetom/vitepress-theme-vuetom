// vitepress
import 'vitepress/dist/client/theme-default/styles/fonts.css'
import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'

// common styles
import '../styles/index.scss'
import '../styles/rewrite/index.scss'

// icon
import '../styles/fa/font-awesome.css'

// tailwind
import '../styles/tailwind/d.css'

// blog styles
import './styles/blog.css'

import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'

const BlogTheme = {
  Layout,
  NotFound
}

export default BlogTheme

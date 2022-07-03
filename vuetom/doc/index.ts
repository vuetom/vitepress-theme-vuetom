// vitepress styles ==> /dist/client/theme-default/styles
import 'vitepress/client/theme-default/styles/fonts.css'
import 'vitepress/client/theme-default/styles/vars.css'
import 'vitepress/client/theme-default/styles/base.css'
import 'vitepress/client/theme-default/styles/utils.css'
import 'vitepress/client/theme-default/styles/components/custom-block.css'
import 'vitepress/client/theme-default/styles/components/vp-code.css'
import 'vitepress/client/theme-default/styles/components/vp-doc.css'
import 'vitepress/client/theme-default/styles/components/vp-sponsor.css'

// rewrite styles
import './styles/vars.css'

// dev
// import '../styles/rewrite/index.scss'

// prod
import '../css/index.css'

import { Theme } from 'vitepress'
import NotFound from 'vitepress/client/theme-default/NotFound.vue'
import VTLayout from './components/VTLayout.vue'

const theme: Theme = {
  Layout: VTLayout,
  NotFound
}

export default theme

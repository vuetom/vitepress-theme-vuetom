import './styles/vars.css'
import './styles/layout.css'
import './styles/sidebar-links.css'
import './styles/vuetom-home.css'
import './styles/vuetom-container.css'
import './styles/custom-blocks.css'
import './styles/code.css'
import './styles/code-light.scss'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'

// VuetomUI
import VtAlert from './vuetomui/alert/index'
import VtButton from './vuetomui/button/index'
import VtCard from './vuetomui/card/index'
import VtIcon from './vuetomui/icon/index'
import VtLink from './vuetomui/link/index'
import VtRow from './vuetomui/row/index'
import VtCol from './vuetomui/col/index'

const components = [
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol
]

const install = function (app, opts = {}) {
  components.forEach(component => {
    app.component(component.name, component)
  })

  // TODO: 之后进行优化，可以通过 app.config.globalProperties 进行修正
  // Vue.prototype.$ELEMENT = {
  //   size: opts.size || '',
  //   zIndex: opts.zIndex || 2000
  // };
  // VuetomUI.$ELEMENT = {
  //   size: opts.size || '',
  //   zIndex: opts.zIndex || 2000
  // }
  // app.config.globalProperties.$msgbox = MessageBox;
  // app.config.globalProperties.$alert = MessageBox.alert;
  // app.config.globalProperties.$confirm = MessageBox.confirm;
  // app.config.globalProperties.$prompt = MessageBox.prompt;
  // app.config.globalProperties.$message = message
  // app.config.globalProperties.$notify = Notification
}

const VuetomUI = {
  name: 'VuetomUI',
  version: '2.2.7',
  install,
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol,
}

const theme = {
  Layout,
  NotFound
}

export default theme
export { VuetomUI }

// export const components = [
//   ['VtButton', VtButton],
// ]

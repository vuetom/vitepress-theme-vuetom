// VuetomUI
import VtAlert from './alert/index'
import VtButton from './button/index'
import VtCard from './card/index'
import VtIcon from './icon/index'
import VtLink from './link/index'
import VtRow from './row/index'
import VtCol from './col/index'

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
  version: '2.3.0',
  install,
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol
}

export { VuetomUI }

export default {}

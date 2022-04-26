import VtAlert from './src/alert.vue'
import '../theme/alert.css'

VtAlert.install = function (Vue) {
  Vue.component(VtAlert.name, VtAlert)
}

export default VtAlert

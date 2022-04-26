import VtIcon from './src/icon.vue'
import '../theme/icon.css'

VtIcon.install = function (Vue) {
  Vue.component(VtIcon.name, VtIcon)
}

export default VtIcon

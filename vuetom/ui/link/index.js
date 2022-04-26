import VtLink from './src/link.vue'
import '../theme/link.css'

VtLink.install = function (Vue) {
  Vue.component(VtLink.name, VtLink)
}

export default VtLink

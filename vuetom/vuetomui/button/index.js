import VtButton from './src/button.vue'
import '../theme/button.css'

VtButton.install = function (Vue) {
  Vue.component(VtButton.name, VtButton)
}

export default VtButton

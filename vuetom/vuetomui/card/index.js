import VtCard from './src/card.vue'
import '../theme/card.css'

VtCard.install = function (Vue) {
  Vue.component(VtCard.name, VtCard)
}

export default VtCard

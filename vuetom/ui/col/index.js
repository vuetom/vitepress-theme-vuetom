import VtCol from './src/col'
import '../theme/col.css'

VtCol.install = function (Vue) {
  Vue.component(VtCol.name, VtCol)
}
export default VtCol

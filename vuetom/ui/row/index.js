import VtRow from './src/row'
import '../theme/row.css'

VtRow.install = function (Vue) {
  Vue.component(VtRow.name, VtRow)
}
export default VtRow

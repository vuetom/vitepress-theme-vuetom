import './css/styles/index.css'
import ThemeDocs from './docs'
import ThemeBlog from './blog'

const VuetomTheme = ((type?: string) => (type === 'blog' ? ThemeBlog : ThemeDocs))()

export * from './ui'

export default VuetomTheme

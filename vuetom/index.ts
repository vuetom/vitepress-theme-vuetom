import './css/styles/index.css'

// dev
// import './styles/index.scss'
import ThemeDocs from './docs'
import ThemeBlog from './blog'

const VuetomTheme = ((type?: string) => (type === 'blog' ? ThemeBlog : ThemeDocs))()

export default VuetomTheme

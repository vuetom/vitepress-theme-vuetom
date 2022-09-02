import ThemeDocs from './doc/index.js'
import ThemeBlog from './blog/index.js'
import './styles/fa/font-awesome.min.css'
import './styles/tailwind/d.css'

const ThemeType = ((type?: string) => (type === 'blog' ? ThemeBlog : ThemeDocs))

const DocsTheme = ThemeType('docs')

const BlogTheme = ThemeType('blog')

export default DocsTheme

export {
  DocsTheme,
  BlogTheme
}

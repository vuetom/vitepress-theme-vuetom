import ThemeDocs from './doc'
import ThemeBlog from './blog'

const ThemeType = ((type?: string) => (type === 'blog' ? ThemeBlog : ThemeDocs))

const DocsTheme = ThemeType('docs')

const BlogTheme = ThemeType('blog')

export default DocsTheme

export {
  DocsTheme,
  BlogTheme
}

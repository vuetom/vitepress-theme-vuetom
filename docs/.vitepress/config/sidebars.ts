import { changeLang } from '../utils/lang'
import guideLocale from '../i18n/pages/guide.json'
import menuLocale from '../i18n/pages/menu.json'

function getGuideSidebar(locale) {
  return Object.fromEntries(
    Object.entries(locale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang))
    ])
  )
}

const getSidebars = () => ({
  '/guide/': getGuideSidebar(guideLocale),
  '/': getGuideSidebar(menuLocale)
})

type Item = {
  text: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, lang: string, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, lang, prefix))
    }
  }

  return {
    ...item,
    link: `${changeLang(lang)}${prefix}${item.link}`
  }
}

export default getSidebars()

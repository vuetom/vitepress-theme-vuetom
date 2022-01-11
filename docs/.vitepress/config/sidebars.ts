import { changeLang } from '../utils/lang'
import sidebarLocale from '../i18n/pages/sidebar.json'

function getGuideSidebar() {
  return Object.fromEntries(
    Object.entries(sidebarLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang, item.link)),
    ])
  )
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    '/': getGuideSidebar(),
  }
}

type Item = {
  text: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, lang: string, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      link: `${changeLang(lang)}${item.link}/`, 
      children: item.children.map((child) => mapPrefix(child, lang, prefix)),
    }
  }
  return {
    ...item,
    link: `${changeLang(lang)}${prefix}${item.link}`,
  }
}

export const sidebar = getSidebars()

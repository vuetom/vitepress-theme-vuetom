import { changeLang } from '../utils/lang'

// import guideLocale from '../i18n/sidebar/guide.json'
// import menuLocale from '../i18n/pages/comp.json'
import sidebarLocale from '../i18n/sidebar.json'

function getSubSidebar(locale) {
  return Object.fromEntries(
    Object.entries(locale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang))
    ])
  )
}

function getSidebarType() {
  const res = {}
  const sidebars = {}
  Object.keys(sidebarLocale).forEach(local => {
    const sidebarl = sidebarLocale[local]
    Object.keys(sidebarl).forEach(type => {
      if (!sidebars[type]) sidebars[type] = {}
      // eslint-disable-next-line prefer-destructuring
      sidebars[type][local] = sidebarLocale[local][type][0]
    })
  })

  Object.keys(sidebars).forEach(type => {
    res[`/${type}/`] = getSubSidebar(sidebars[type])
  })
  return res
}

// const getSidebars1 = () => ({
// '/guide/': getSubSidebar(guideLocale)
// '/': getGuideSidebar(menuLocale)
// '/': getGuideSidebar(sidebarLocale)
// })

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
    link: `${changeLang(lang)}${prefix}${item.link || ''}`
  }
}

function getSidebars() {
  return getSidebarType()
}

export default getSidebars()

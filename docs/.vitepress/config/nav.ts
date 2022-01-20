import { changeLang } from '../utils/lang'
import navJson from '../i18n/pages/nav.json'

function getNav() {
  return Object.fromEntries(
    Object.entries(navJson).map(([lang, locales]) => {
      const item: {
        link: string
        text: string
        activeMatch?: string
      }[] = Object.values(locales).map((item) => ({
        ...item,
        link: `${changeLang(lang)}${item.link}`,
        activeMatch: `${changeLang(lang)}${item.activeMatch}`
      }))

      return [lang, item]
    })
  )
}

const nav = getNav()

export default nav

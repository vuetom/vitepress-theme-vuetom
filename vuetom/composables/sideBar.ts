import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { useLang } from './lang'
import { useActiveSidebarLinks } from '../composables/activeSidebarLink'
import { isArray, ensureStartingSlash, removeExtention } from '../utils'

export function useSideBar() {
  const route = useRoute()
  const { site } = useData()
  const lang = useLang()
  useActiveSidebarLinks()

  return computed(() => {
    // at first, we'll check if we can find the sidebar setting in frontmatter.
    const { headers } = route.data
    const frontSidebar = route.data.frontmatter.sidebar
    const { sidebarDepth } = route.data.frontmatter

    // if it's `false`, we'll just return an empty array here.
    if (frontSidebar === false) {
      return []
    }

    // if it's `atuo`, render headers of the current page
    if (frontSidebar === 'auto') {
      return resolveAutoSidebar(headers, sidebarDepth)
    }

    // now, there's no sidebar setting at frontmatter; let's see the configs
    const themeSidebar = getSideBarConfig(
      site.value.themeConfig.sidebar,
      route.data.relativePath,
      lang.value
    )
    if (themeSidebar === false) {
      return []
    }
    if (themeSidebar === 'auto') {
      return resolveAutoSidebar(headers, sidebarDepth)
    }

    return themeSidebar
  })
}
function resolveAutoSidebar(headers, depth) {
  const ret = []
  if (headers === undefined) {
    return []
  }
  let lastH2
  headers.forEach(({ level, title, slug }) => {
    if (level - 1 > depth) {
      return
    }
    const item = {
      text: title,
      link: `#${slug}`
    }
    if (level === 2) {
      lastH2 = item
      ret.push(item)
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(item)
    }
  })

  return ret
}

export function isSideBarConfig(sidebar) {
  return sidebar === false || sidebar === 'auto' || isArray(sidebar)
}
export function isSideBarGroup(item) {
  return item.children !== undefined
}
export function isSideBarEmpty(sidebar) {
  return isArray(sidebar) ? sidebar.length === 0 : !sidebar
}

/**
 * Get the `SideBarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return `auto` as a fallback.
 */
export function getSideBarConfig(sidebar, path, lang) {
  if (isSideBarConfig(sidebar)) {
    return sidebar
  }
  path = ensureStartingSlash(path)
  for (const dir in sidebar) {
    // make sure the multi sidebar key starts with slash too
    if (path.startsWith(ensureStartingSlash(`${lang}${dir}`))) {
      return sidebar[dir][lang]
    }
  }

  return 'auto'
}

/**
 * Get flat sidebar links from the sidebar items. This method is useful for
 * creating the "next and prev link" feature. It will ignore any items that
 * don't have `link` property and removes `.md` or `.html` extension if a
 * link contains it.
 */
export function getFlatSideBarLinks(sidebar) {
  return sidebar.reduce((links, item) => {
    if (item.link) {
      links.push({ text: item.text, link: removeExtention(item.link) })
    }
    if (isSideBarGroup(item)) {
      links = [...links, ...getFlatSideBarLinks(item.children)]
    }

    return links
  }, [])
}

export default {}

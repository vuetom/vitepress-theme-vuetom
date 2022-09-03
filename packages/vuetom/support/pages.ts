import {
  reactive, ref, markRaw, shallowRef
} from 'vue'
import { inBrowser, withBase, useData } from 'vitepress'

// @ts-ignore
import siteData from '@siteData'

export const siteDataRef = shallowRef(siteData)

const routes: any = ref([])

const NotFound = () => '404 Not Found'

const notFoundPageData = {
  relativePath: '',
  title: '404',
  description: 'Not Found',
  headers: [],
  frontmatter: {},
  lastUpdated: 0
}

const getDefaultRoute = () => ({
  path: '/',
  component: null,
  data: notFoundPageData
})

const createRouterRoutes = (
  loadPageModule: Function,
  fallbackComponent: any
) => {
  // const router = useRouter()
  const { theme } = useData()
  const { pages } = theme.value
  let latestPendingPath = ''
  async function loadPage(
    href = '/index',
    scrollPosition = 0,
    isRetry = false
  ) {
    const route = reactive(getDefaultRoute())
    const pendingPath = `/posts${href}`
    try {
      let page = loadPageModule(pendingPath)
      if ('then' in page && typeof page.then === 'function') {
        page = await page
      }
      const { default: comp, __pageData } = page
      if (!comp) {
        throw new Error(`Invalid route component: ${comp}`)
      }
      route.path = inBrowser ? pendingPath : pendingPath
      route.component = markRaw(comp)
      route.data = markRaw(__pageData)
    } catch (err) {
      // @ts-ignore
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err)
      }
      if (!isRetry) {
        try {
          const res = await fetch(`${siteDataRef.value.base}hashmap.json`)
          // eslint-disable-next-line no-underscore-dangle
          window.__VP_HASH_MAP__ = await res.json()
          await loadPage(href, scrollPosition, true)
          return
        } catch (e) {}
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = ''
        route.path = inBrowser ? pendingPath : withBase(pendingPath)
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null
        route.data = notFoundPageData
      }
    }
    return route
  }
  pages.forEach(async (p: { link: string }) => {
    const r = await loadPage(p.link)
    routes.value.push(r)
  })
  return {
    routes: routes.value
  }
}

const getRoutes = () => {
  let isInitialPageLoad = inBrowser
  let initialPath = ''
  return createRouterRoutes((path: string) => {
    let pageFilePath = pathToFile(path)
    if (isInitialPageLoad) {
      initialPath = pageFilePath
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, '.lean.js')
    }
    if (inBrowser) {
      isInitialPageLoad = false
    }
    return import(/* @vite-ignore */ pageFilePath)
  }, NotFound)
}

function pathToFile(path: string) {
  let pagePath = path.replace(/\.html$/, '')
  pagePath = decodeURIComponent(pagePath)
  if (pagePath.endsWith('/')) {
    pagePath += 'index'
  }

  // @ts-ignore
  if (import.meta.env.DEV) {
    pagePath += `.md?t=${Date.now()}`
  } else {
    // /foo/bar.html -> ./foo_bar.md
    if (inBrowser) {
      // @ts-ignore
      const base = import.meta.env.BASE_URL
      pagePath = `${
        pagePath.slice(base.length - 1).replace(/\//g, '_') || 'index'
      }.md`
      const pageHash = __VP_HASH_MAP__[`posts_${pagePath.toLowerCase()}`]
      pagePath = `${base}assets/posts_${pagePath}.${pageHash}.js`
    } else {
      // ssr
      pagePath = `./${pagePath.slice(1).replace(/\//g, '_')}.md.js`
    }
  }
  return pagePath
}

export { getRoutes }

export default {}

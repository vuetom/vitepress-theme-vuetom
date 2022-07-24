import {
  reactive, ref, markRaw, nextTick, readonly
} from 'vue'
import {
  inBrowser, withBase, useData, useRouter
} from 'vitepress'

const routes = ref([])

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

const createRouterRoutes = (loadPageModule: Function, fallback: any) => {
  const router = useRouter()
  const { theme, frontmatter } = useData()
  const { pages } = theme.value
  async function loadPage(href = '/index') {
    const route = reactive(getDefaultRoute())
    try {
      const pendingPath = `/blog/_pages${href}.md`
      let page = loadPageModule(pendingPath)
      if ('then' in page && typeof page.then === 'function') {
        page = await page
      }
      const { default: comp, __pageData } = page
      if (!comp) {
        throw new Error(`Invalid route component: ${comp}`)
      }
      route.path = inBrowser ? pendingPath : withBase(pendingPath)
      route.component = markRaw(comp)
      route.data = markRaw(__pageData)
    } catch (err) {
      console.warn(err)
    }
    return route
  }
  pages.forEach(async (p) => {
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
  return createRouterRoutes((path) => {
    let pagePath = path.replace(/\.html$/, '')
    pagePath = decodeURIComponent(pagePath)
    let pageFilePath = pagePath
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

export {
  getRoutes
}

export default {}

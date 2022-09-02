import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { defaultLang } from '../constant.js'

export const useLang = () => {
  const route = useRoute()

  return computed(() => {
    // the first part of the first slash
    const path = route.data?.relativePath
    let lang

    if (path?.includes('/')) {
      lang = path.split('/').shift()
    } else {
      lang = defaultLang
    }

    return lang
  })
}

export default {}

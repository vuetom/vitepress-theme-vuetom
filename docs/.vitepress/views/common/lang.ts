import { computed } from 'vue'
import { useRoute } from 'vitepress'

export const useLang = () => {
  const route = useRoute()
  return computed(() => {
    // the first part of the first slash
    const path = route.data?.relativePath
    let lang: string

    if (path?.includes('/')) {
      lang = path.split('/').shift()
    } else {
      lang = 'zh-CN'
    }
    return lang
  })
}

import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

export function useLanguageLinks() {
  const { site, localePath, theme } = useData()

  return computed(() => {
    const { langs } = site.value
    const localePaths = Object.keys(langs)

    // one language juse use this
    if (localePaths.length < 2) {
      return null
    }
    const route = useRoute()

    // intentionally remove the leading slash because each locale has one
    const currentPath = route.path.replace(localePath.value, '')
    const candidates = localePaths.map((localeText) => ({
      text: langs[localeText].label,
      value: localeText,
      link: `${localeText}${currentPath}`
    }))
    const selectText = theme.value.selectText || 'Languages'

    return {
      text: selectText,
      items: candidates
    }
  })
}

export default {}

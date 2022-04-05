import { computed } from 'vue'
import { useData } from 'vitepress'
import { isArray, ensureStartingSlash, removeExtention } from '../utils'
import { getSideBarConfig, getFlatSideBarLinks } from '../composables/sideBar'
import { useLang } from './lang'

export function useNextAndPrevLinks() {
  const { page, theme } = useData()
  const lang = useLang()
  const path = computed(() => removeExtention(ensureStartingSlash(page.value.relativePath)))
  const candidates = computed(() => {
    const config = getSideBarConfig(
      theme.value.sidebar,
      path.value,
      lang.value
    )

    return isArray(config) ? getFlatSideBarLinks(config) : []
  })
  const index = computed(() => candidates.value.findIndex((item) => item.link === path.value))
  const next = computed(() => {
    if (theme.value.nextLinks !== false
            && index.value > -1
            && index.value < candidates.value.length - 1) {
      return candidates.value[index.value + 1]
    }
  })
  const prev = computed(() => {
    if (theme.value.prevLinks !== false && index.value > 0) {
      return candidates.value[index.value - 1]
    }
  })
  const hasLinks = computed(() => !!next.value || !!prev.value)

  return {
    next,
    prev,
    hasLinks
  }
}

export default {}

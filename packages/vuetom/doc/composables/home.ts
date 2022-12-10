import { useData } from 'vitepress'

export function useFlash() {
  const { site, theme } = useData()
  const { base } = site.value
  let { flashEnable, flashColor, bgImg } = theme.value
  if (flashColor === undefined) flashColor = ['0,0,0', '0,0,0']
  if (typeof flashColor === 'string') flashColor = [flashColor, flashColor]
  let flashStyle = ''

  if (bgImg && flashEnable) {
    const bgImgSrc = (`${base}${bgImg}`).replaceAll('//', '/')
    flashStyle = `
      -webkit-linear-gradient(top,
        rgba(${flashColor[0]}, 0.8) 0%,
        rgba(${flashColor[0]}, 0.2) 20%,
        rgba(${flashColor[0]}, 0) 80%,
        rgba(${flashColor[0]}, 0) 100%
      ),
      -webkit-linear-gradient(left, 
        rgba(${flashColor[1]}, 0) 0%, 
        rgba(${flashColor[1]}, 0) 20%, 
        rgba(${flashColor[1]}, 0.2) 80%, 
        rgba(${flashColor[1]}, 0.8) 100%),
        url(${bgImgSrc})
    `
  }

  return {
    flashEnable,
    flashStyle,
  }
}

export function useBackground() {
  const { site, theme } = useData()
  const { base } = site.value
  let { bgImg, bgColor, bgOpacity } = theme.value
  let bgEnable = false
  let bgStyle = ''
  let bgInnerOpacity = 0.3
  if (bgImg) bgEnable = true
  if (bgColor === undefined) bgColor = '0,0,0'
  if (bgOpacity === undefined) bgOpacity = 0.6
  bgInnerOpacity = bgOpacity - 0.3 <= 0 ? 0 : bgOpacity - 0.3
  if (bgEnable) {
    const bgImgSrc = (`${base}${bgImg}`).replaceAll('//', '/')
    bgStyle = `
      -webkit-linear-gradient(top,
        rgba(${bgColor},${bgOpacity}) 0%,
        rgba(${bgColor},${bgInnerOpacity}) 20%,
        rgba(${bgColor},${bgInnerOpacity}) 80%,
        rgba(${bgColor},${bgOpacity}) 100%
      ),
      -webkit-linear-gradient(left,
        rgba(${bgColor},${bgOpacity}) 0%,
        rgba(${bgColor},${bgInnerOpacity}) 20%,
        rgba(${bgColor},${bgInnerOpacity}) 80%,
        rgba(${bgColor},${bgOpacity}) 100%),
      url(${bgImgSrc})
    `
  }
  return {
    bgEnable,
    bgStyle,
  }
}

export function useFeatures() {
  const { theme } = useData()
  let { featuresColor } = theme.value
  let ftStyle = 'rgba(255,255,255,0.8)'
  if (typeof featuresColor === 'string') {
    ftStyle = featuresColor
  } else if (typeof featuresColor === 'object') {
    if (featuresColor.length >= 2) {
      ftStyle = `
        linear-gradient(to right,
          ${featuresColor[0]},
          ${featuresColor[1]}
        )
      `
    }
  }
  return {
    ftStyle,
  }
}

export function useHeroMove() {
  const { theme } = useData()
  const { parallaxEnable } = theme.value
  function heroMove(e: any) {
    document
      .querySelectorAll(
        `
        .VPHomeHero .name,
        .VPHomeHero .text,
        .VPHomeHero .tagline,
        .VPHomeHero .VPButton,
        .VPHome .VPHomeFeatures
      `
      )
      .forEach((h: Element) => {
        const hd: any = h
        const speed: any = hd.getAttribute('data-speed') || 10
        let x = (window.innerWidth - e.pageX * speed) / 100
        let y = (window.innerHeight - e.pageY * speed) / 100
        switch (hd.className.substring(0, 3).toUpperCase()) {
          case 'VPF':
            x /= 8
            y /= 8
            break
          case 'TAG':
            x /= 6
            y /= 6
            break
          case 'TEX':
            x /= 4
            y /= 4
            break
          case 'VPB':
            x /= 2
            y /= 2
            break
          case 'NAM':
            x /= 1
            y /= 1
            break
          default:
            break
        }
        const hds = hd?.style
        if (hds) {
          hds.transform = `translateX(${x}px) translateY(${y}px)`
          hds.transition = 'transform 0.2s ease-out'
        }
      })
  }
  return {
    parallaxEnable,
    heroMove,
  }
}

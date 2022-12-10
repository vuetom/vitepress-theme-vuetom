import { useData } from 'vitepress'

export function useHomeBg() {
  const { site, theme } = useData()
  const { base } = site.value
  const {
    logoImg, bgImg 
  } = theme.value
  let { bgColor, flashColor, bgOpacity } = theme.value
  let baseUrl = base
  let bgStyle = ''
  let bgImgSrc = ''
  let bgInnerOpacity = 0.3
  // let ftStyle = 'rgba(255,255,255,0.8)'
  
  if (base === '/' || base.endsWith('/')) {
    baseUrl = base.substring(0, base.length - 1)
  }
  
  // hero logo
  const homeLogoSrc = `${baseUrl}/${logoImg}`.replaceAll('//', '/')
  
  // feat color check
  // if (typeof featuresColor === 'string') {
  //   ftStyle = featuresColor
  // } else if (typeof featuresColor === 'object') {
  //   if (featuresColor.length >= 2) {
  //     ftStyle = `
  //       linear-gradient(to right,
  //         ${featuresColor[0]},
  //         ${featuresColor[1]}
  //       )
  //     `
  //   }
  // }
  
  // 背景色默认黑色
  if (bgColor === undefined) bgColor = '0,0,0'
  // 背景图透明度
  if (bgOpacity === undefined) bgOpacity = 0
  if (flashColor === undefined) flashColor = ['0,0,0', '0,0,0']
  if (typeof flashColor === 'string') flashColor = [flashColor, flashColor]
  
  if (bgImg) {
    bgImgSrc = `${baseUrl}/${bgImg}`.replaceAll('//', '/')
    bgInnerOpacity = bgOpacity - 0.3 <= 0 ? 0 : bgOpacity - 0.3
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
    homeLogoSrc,
    bgStyle,
    bgImgSrc
  }
}

export function useHomeParallax() {
  const { theme } = useData()
  // const { base } = site.value
  const { parallaxEnable } = theme.value 
  return {
    parallaxEnable 
  }
}
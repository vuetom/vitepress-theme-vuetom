--- 
title: 主题配置
head:
  - - meta
    - name: description
      content: vuetom 主题配置项
  - - meta
    - name: keywords
      content: vuetom theme config
---

# {{ $frontmatter.title }}

主题的配置在 `.vitepress/config.ts` 文件中的 themeConfig 属性中配置

下面是一些简要的配置项一览：

其中 head、sidebar、nav 对应的分别是 head脚本、侧边栏菜单、头部导航栏都可以默认为 []

<br>

以下是版本号满足 `vitepress >= 1.x.x` `vuetom-theme >= 2.x.x` 的配置

```js macos
// .vitepress/config.ts
export default defineConfigWithTheme<VuetomThemeConfig>({
  lang: 'en-US',
  base: '/vt',
  title: 'Vuetom Theme',
  description: 'Theme For Vitepress',
  // head,
  themeConfig: {
    nav: nav(),
    sidebar: {
      'zh-CN/guide/': sidebarGuide(),
      'zh-CN/mdshow/': sidebarMdShow()
    },
    socialLinks: [
      { icon: 'github', link: pkg.repository }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Lauset'
    },
    logoImg: '/logo/vuetom-logo-m.png',
    bgImg: '/imgs/homg-bg01.jpg',
    bgColor: '0,0,0',
    bgOpacity: 0.6,
    flashEnable: true,
    flashColor: ['238,17,17', '0,98,255'],
    parallaxEnable: true,
    pageBgEnable: true,
    pageBgOpacity: 0.8,
    featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)']

  },
  markdown: {
    lineNumbers: false,
    config: (md) => mdPlugin(md)
  },
  lastUpdated: false
})
```

<br>

以下是版本号满足 `vitepress = 0.x.x` `vuetom-theme = 1.x.x` 的配置

```js macos
import { defineConfigWithTheme } from 'vitepress'
import type { VuetomThemeConfig } from 'vitepress-theme-vuetom'

// .vitepress/config.ts
// 部分配置项
export default defineConfigWithTheme<VuetomThemeConfig>({
  title: 'Vuetom',
  base: '/',
  head,
  themeConfig: {
    repo: 'GIT地址',
    docsDir: 'docs',
    sidebar,
    nav,
    bgImg: '/imgs/homg-bg01.jpg',
    bgColor: '0,0,0',
    bgOpacity: 0.6,
    flashEnable: true,
    flashColor: ['238,17,17', '0,98,255'],
    pageBgEnable: true,
    pageBgOpacity: 0.8,
    featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)']
  },

  // ...
})
```

以下是对配置项的简要说明

## 首页LOGO

**logoImg**

- 类型：`string`
- 默认值：`''`

首页上方LOGO，路径中的首个 `/` 表示 `public` 目录

例如：`'/logo/homg-logo.jpg'`

## 首页背景图

**bgImg**

- 类型：`string`
- 默认值：`undefined`

首页全屏背景图，路径中的首个 `/` 表示 `public` 目录

例如：`'/imgs/homg-bg01.jpg'` 等同于 `/public/imgs/home-bg01.jpg`

**bgColor**

- 类型：`string`
- 默认值：`'0,0,0'`

背景图边缘的覆盖颜色，值是 `rgb` 的颜色值 `rgb(0,0,0)` 则写为 `'0,0,0'`，默认为黑色

**bgOpacity**

- 类型：`0 - 1`
- 默认值：`0.6`

覆盖颜色的透明度，搭配上面的覆盖颜色使用，图片中间透明度要比图片边缘透明度要小

图片中间透明度为 `当前bgOpacity - 0.3`，也就是说默认为 `0.3`

## 文章页背景图

注意：文章页背景图片与首页一致

**pageBgEnable**

- 类型：`boolean`
- 默认值：`true`

文章页面背景图是否开启，默认开启

**pageBgOpacity**

- 类型：`0 - 1`
- 默认值：`0.8`

文章页背景图透明度，1将看不到背景图，0能清晰看到背景图

**featuresColor**

- 类型：`string | Array`
- 默认值：`rgba(255,255,255,0.8)`

首页功能面板背景色，可以是单个颜色字符串，也可以是两个字符串组成的数组

**flashEnable**

- 类型：`boolean`
- 默认值：`false`
  
是否开启首页背景图闪烁功能，效果类似于朋克风故障

**flashColor**

- 类型：`string | Array`
- 默认值：`['0,0,0','0,0,0']`

首页背景闪烁时附加的色彩，0: Top位置的颜色，1: Right位置的颜色，默认都是黑色

**parallaxEnable**

- 类型：`boolean`
- 默认值：`false`
  
是否开启首页部分元素视觉差效果

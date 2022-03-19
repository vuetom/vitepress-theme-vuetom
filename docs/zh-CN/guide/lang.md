---
title: 多国语言配置
lang: en-US
---

# {{ $frontmatter.title }}

你也可以配置多国语言，以首页为例，先在配置文件里配置下 locales，然后创建对应的语言文件夹与文件


## 改配置文件

需要在 config.ts 中配置 locales，注意 themeConfig 属性里也要配，两个 locales 内容是不一样的

```js
export default defineConfigWithTheme<VuetomThemeConfig>({
  // ...
  themeConfig: {
    // ...
    locales: {
      '/zh-CN/': {
        label: '简体中文',
        selectText: '多国语言'
      },
      '/en-US/': {
        label: 'English',
        selectText: 'Languages'
      }
    }
  },
  locales: {
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Vuetom 主题',
      description: '为 Vitepress 提供的一款主题'
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Vuetom Theme',
      description: 'Theme For Vitepress'
    }
  }
})
```

**locales** 中的属性介绍

<b>lang</b>: 会直接设置给 `<html>` 标签

<b>title</b>: 不同语言时网站的标题，会替换之前定义的 title

<b>description</b>: 不同语言时网站的描述

<b>label</b>: 语言选择时展示出来的文本内容（例如：中文或English）

<b>selectText</b>: 语言选择时下拉菜单的文本（例如：多语言或者Languages）



## 改首页

在 .vitepress 同级目录新建 `zh-CN` 和 `en-US` 文件夹，然后在这个文件夹中分别创建一个 `index.md` 文件

**zh-CN/index.md** 中写入 **中文首页** 要展示的内容

**en-US/index.md** 中写入 **英文首页** 要展示的内容

原来与 .vitepress 同级的 `index.md` 文件中可以改为转发至 `zh-CN/index` 或者 `en-US/index`

例如下方的代码，会直接将 `/` 转发到 `/zh-CN/` 这样就会直接前往中文首页了

```markdown
---
title: 'Vuetom Theme'
lang: en-US
page: true
---

<script setup>

if (typeof window !== 'undefined') {
  const preferredLang = 'zh-CN'
  window.location.pathname = `/${preferredLang}/`
}

</script>
```

下面试试访问一下：

访问 localhost:3000/zh-CN/ 会前往中文首页

访问 localhost:3000/en-US/ 会前往英文首页

访问 localhost:3000 会前往 localhost:3000/zh-CN/

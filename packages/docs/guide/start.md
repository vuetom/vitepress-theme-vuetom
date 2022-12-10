--- 
title: 快速使用
head:
  - - meta
    - name: description
      content: 教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: 开始使用
---

# {{ $frontmatter.title }}

使用主题前请确保你已经搭建了一个 Vitepress 文档项目，因为主题是建立在该框架的基础上使用的。

请确保你使用的 vue >= 3.2 且 vitepress >= 1.x 哦。

## 最快捷的方式

直接拉取本项目至本地，packages/docs 和 packages/blog 目录下分别是文档和博客示例，根据 `README.md` 进行依赖安装、构件、打包、预览即可

## 其他方式

### **1.** 使用脚手架初始化

可用脚手架 `vuetom-cli` 来进行主题的初始化，这会在你本地初始化一个模版

网速慢可以再次尝试或者直接前往模版仓库拉取 [模版仓库](https://github.com/lauset/vuetom-cli)

- 分支1: **temp-docs** (文档模版)

- 分支2: **temp-blog** (博客模版)

1. 首先安装脚手架，NPM安装前请确保开启管理员身份运行保证有权限

```sh light
npm i -g vuetom-cli
```

2. 查看是否安装成功，黑窗口运行一下命令，返回版本号 x.x.x 则表示安装成功

```bash light
vuetom-cli -v
```

1. 初始化模版，可以选择是否新建目录、仓息、作者、模版仓库等。

   初始化选择从 github 源拉取模版可以保证模版是最新的代码

```bash light
vuetom-cli init
```

1. 然后便会下载模版，下载完成后，执行以下命令安装依赖并运行文档网站

```bash macos
# 安装依赖
pnpm i

# 本地运行
pnpm dev
```

::: warning
模版是从 github 上拉取的，可能有时候会有网速的困惑，也可手动前往拉取下载本地启用

文档模版：<https://github.com/lauset/vuetom-cli/tree/temp-docs>

博客模版：<https://github.com/lauset/vuetom-cli/tree/temp-blog>
:::

<br/>

### **2.** 通过NPM下载安装主题（最新版本为 2.3.0）

:::danger  ⚠️ 写在前面

正常引入主题后，还需在 .vitepress/config.ts 文件中配置以下内容

```js macos
vite: {
  ssr: {
    noExternal: ["vitepress-theme-vuetom"]
  }
}
```

:::

使用这个方式首先你要搭建一个 vitepress 项目，主题是会覆盖文档默认样式而已，所以项目还是得搭起来的，可以前往下面 vitepress 官网链接从头开始搭建

[vitepress搭建文档](https://vitepress.vuejs.org/guide/getting-started.html)

搭建完后最简单的样子就是项目目录里有个 index.md 文件，那么开始下一步

1. 安装主题依赖

使用 NPM 安装最新版本的 vitepress-theme-vuetom 主题包，在你的 vitepress 项目下安装，打开 `终端（DOS）` 输入

```sh light
npm i -D vitepress-theme-vuetom
```

2. 开始引入主题
  
先在 .vitepress （这个文件夹和首页 index.md 是同级目录，没有的自己创建）中新建一个名为 theme 的文件夹，在该文件下新建一个 index.ts 文件，当然用 js 还是 ts 文件就看你自己项目的决定了。

大致内容如下:

`VuetomTheme` 是主要的主题布局

`VuetomUI` 是内置的UI组件

```javascript light
// .vitepress/theme/index.ts

// 文档风格引入 2.3.0 版本之后改为 /docs 中引入了
import VuetomTheme from 'vitepress-theme-vuetom/docs'

// 博客风格引入
// import BlogTheme from 'vitepress-theme-vuetom/blog'

export default {
  ...VuetomTheme,
  enhanceApp({ app, router, siteData }) {
  }
}
```

引入了主题，然后你的 index.md 里写上一些内容应该就可以看出效果了

```html light
---
home: true
heroImage: /logo/vuetom-logo-m.png
heroAlt: LOGO
heroText: Vuetom
tagline: vitepress flat theme 

actionText: 快 速 开 始
actionLink: /guide/info

altActionText: 配 置
altActionLink: /guide/config

features:
  - title: 📦 优化的构建
    details: 可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
  - title: 🔩 通用的插件
    details: 在开发和构建之间共享 Rollup-superset 插件接口。
  - title: 🔑 完全类型化的API
    details: 灵活的 API 和完整 TypeScript 类型。

footer: MIT Licensed
---

<div class="frontpage sponsors">
  <h2>{{ data.text }}</h2>
</div>

<script setup>
import { onMounted, reactive } from 'vue'
const data = reactive({
    text: '自定义内容'
})
onMounted(() => {
})
</script>

<style>
</style>
```

运行项目后，在 [localhost:3000] 中进入首页

:::tip
至少到这里主题已经安装完成了，下一步就是主题的配置了，主题什么样还是要看你配的什么样子哦。
:::

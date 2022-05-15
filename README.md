
<p align="center"><a href="https://gitee.com/lauset/vitepress-theme-vuetom" target="_blank" rel="noopener noreferrer"><img width="180" src="https://gitee.com/lauset/vitepress-theme-vuetom/raw/main/docs/public/logo/vuetom-logo.png" alt="logo"></a></p>

<p align="center">
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE"><img src="https://img.shields.io/github/license/xugaoyi/vuepress-theme-vdoing
" alt="License"></a>
  <a href="https://www.npmjs.com/package/vitepress-theme-vuetom"><img alt="npm" src="https://img.shields.io/npm/v/vitepress-theme-vuetom"></a>
</p>

<h2 align="center">vitepress-theme-vuetom</h2>

## 简要说明

1. 基于 vitepress 打造的主题
2. 提供文档与博客两种风格的主题，更多的选择。

[**更新日志**](CHANGELOG.md)

## 主题风格

* [文档风格](http://tomhub.cn)

* 博客风格(Coming soon...)


## 快速上手

- 拉取项目

```bash
git clone https://github.com/lauset/vitepress-theme-vuetom.git

cd vitepress-theme-vuetom
```

- 安装依赖
```bash
pnpm install
```

- 构建主题
```bash
pnpm build
```

- 分步构建
```bash
# 清除文件
pnpm clean

# 打包样式
pnpm build:css

# 打包主程序
pnpm build:vt
```

- 发布主题包
```bash
pnpm pub
```

- 启动文档示例
```bash
cd docs
npm run dev
```

- 启动博客示例
```bash
cd blog
npm run dev
```

## 文档目录多语言

查看项目文件列表

```shell
$ crowdin:list
```

上传待翻译的源文件

```shell
$ crowdin:upload
```

查看预下载文件列表

```shell
$ crowdin:dryrun
```

下载en-US翻译文件

```shell
$ crowdin:us
```

下载zh-TW翻译文件

```shell
$ crowdin:tw
```

## 简单展示

![首页](/resources/pic01.png)

![暗黑主题](/resources/pic02.png)

![语法示例](/resources/pic03.png)

![其他](/resources/pic04.png)

## 仓库地址

[github](https://github.com/lauset/vitepress-theme-vuetom)

[gitee](https://gitee.com/lauset/vitepress-theme-vuetom)

## 感谢

[Vite](https://vitejs.cn/)

[Vitepress](https://vitepress.vuejs.org/)

[ElementPlus](https://element-plus.gitee.io/zh-CN/)

[Crowdin](https://crowdin.com/)

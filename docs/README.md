
<h1 align="center">Vitepress Documents Template</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/element-plus">
    <img src="https://img.shields.io/npm/v/element-plus.svg">
  </a>
  <a href="https://npmcharts.com/compare/element-plus?minimal=true">
    <img src="http://img.shields.io/npm/dm/element-plus.svg">
  </a>
  <br>
</p>

<p align="center">With Element Plus</p>

- 💪 Vitepress 
- 🔥 TypeScript



## Change log

### 0.0.3

_2021-10-30_

#### Features

- Use svg icons in components (#3492 by @adaex)
- Remove font icon scss & font-path (#4074 by @YunYouJun)


#### Bug fixes

- Tag should support large size too (#3948 by @cbbfcd)


### 0.0.2

_2021-10-20_



## 开始操作

#### 安装依赖

```bash
$ pnpm i
```

#### 多语言

1. 先清理生成代码

```shell
$ pnpm clean
```

2. 查看crowdin项目资源列表

```shell
$ pnpm crowdin:l
```

4. 拉取crowdin项目资源

```shell
$ pnpm crowdin:zh
```

5. 编译语言

```shell
$ pnpm gen:lang
```

#### 本地开发

```bash
$ pnpm dev
```

#### 线上环境

1. 打包

```shell
$ pnpm build
```
2. 预览

```shell
$ pnpm serve
```



## 项目目录

.vitepress: 存放 vitepress 一些配置、路由、全局界面、组件

en-US: 存放 markdown 文件，是页面主要组成部分

pages: 存放 vue 页面，可在 md 文件中引入

public: 存放公共静态资源



## Thanks🔥

[Vite](https://vitejs.cn/)

[ElementPlus](https://element-plus.gitee.io/zh-CN/)

[Crowdin](https://crowdin.com/)

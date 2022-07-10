---
title: 夜间模式
lang: en-US
---


# {{ $frontmatter.title }}

:::warning
适配于 vitepress 1.x.x 版本的功能正在制作，下面是 0.x.x 版本的国际化方案
:::

默认的话夜间模式切换按钮是一直有的，右上角那个太阳图标


## 原理

开关操作修改的是 HTML 根标签的样式，会加上 dark 样式

当然切换语言时也会为其修改 lang 属性

```html
<html class="dark" lang="zh-CN"></html>
```

我们可以事先定义一些 css变量来完成不同语言下或者不同模式下的样式变换


## css变量

css 变量文件在 vuetom/styles/vars.scss 文件中

简单展示部分

```css
:root {
  --c-brand: #1496ce;
  --c-brand-light: #19aeee;
  --color-border: #ad295c8a;
  --color-block: #2a7f8a;
  --color-strong: #c13e74;
  --color-code: #7ea1c5;
  --color-border-left: #1d8ab9;
  --color-code-bg: rgba(77,208,225,0.08);
  --color-block-bg: rgba(77,208,225,0.15);
  --linear-title: linear-gradient(to right, #32defd, rgb(247 69 152));
  --vt-shadow: 0 5px 6px -5px rgba(133,133,133,.6);
  --vt-code-shadow: 5px 5px 1px rgba(255, 255, 255, 0.4);
  --vt-code-shadow-h: 5px 5px 10px rgba(255, 255, 255, 0.4);
}

.dark {
  --c-brand: #18baff;
  --c-brand-light: #189bd3;
  --color-border: #ad295c8a;
  --color-block: #2a7f8a;
  --color-strong: #c13e74;
  --color-code: #7ea1c5;
  --color-border-left: #1d8ab9;
  --color-code-bg: rgba(77,208,225,0.08);
  --color-block-bg: rgba(77,208,225,0.15);
  --linear-title: linear-gradient(to right, #32defd, rgb(247 69 152));
  --vt-shadow: 0 5px 6px -5px rgba(0, 0, 0, 0.6);
  --vt-code-shadow: 5px 5px 1px rgba(0, 0, 0, 0.4);
  --vt-code-shadow-h: 5px 5px 10px rgba(0, 0, 0, 0.4);
}
```

页面引用可以使用

```css
color: var(--c-brand);
```

当然也可以在文档中重新定义

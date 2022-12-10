---
title: 夜间模式
lang: en-US
---


# {{ $frontmatter.title }}

默认的话夜间模式切换按钮是一直有的，右上角那个太阳图标

## 原理

开关操作修改的是 HTML 根标签的样式，会加上 dark 样式

```html
<html class="dark" lang="zh-CN"></html>
```

我们可以事先定义一些 css变量来完成不同语言下或者不同模式下的样式变换

## 主题色覆盖

修改 theme/custom.scss 文件即可

简单展示部分

```css
:root {
  // 重写主题色

  // 主色
  --vp-c-brand: var(--vp-c-blue);
  --vp-c-brand-light: var(--vp-c-blue-light);
  --vp-c-brand-lighter: var(--vp-c-blue-lighter);
  --vp-c-brand-dark: var(--vp-c-blue-dark);
  --vp-c-brand-darker: var(--vp-c-blue-darker);

  // 副色
  --vp-c-second: var(--vp-c-pink);
  --vp-c-second-light: var(--vp-c-pink-light);
  --vp-c-second-lighter: var(--vp-c-pink-lighter);
  --vp-c-second-dark: var(--vp-c-pink-dark);
  --vp-c-second-darker: var(--vp-c-pink-darker); 
}

.dark {

}
```

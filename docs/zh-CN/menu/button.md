--- 
title: 按钮 Button
head:
  - - meta
    - name: description
      content: Button 按钮
  - - meta
    - name: keywords
      content: button
---
# 按钮 Button

## 基础用法

### 普通按钮

<p>使用 type、plain、round 和 circle 来定义按钮的样式。</p>
<p>shadow 属性可以让按钮悬浮有阴影。</p>

:::demo  
button/btn-basic
:::

### 文字按钮
<p>加上 text 属性能让按钮变成文字按钮。</p>

:::demo  
button/btn-text
:::

### 禁用按钮
<p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>

:::demo  
button/btn-disable
:::

### 带图标的按钮

:::demo
button/btn-icon
:::

### 链接式按钮

:::demo
button/btn-link
:::

## 按钮属性

| Attribute   | Description                            | Type    | Accepted Values                                    | Default |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button size                            | string  | medium / small / mini                              | —       |
| type        | button type                            | string  | primary / success / warning / danger / info / text | —       |
| plain       | determine whether it's a plain button  | boolean | —                                                  | false   |
| round       | determine whether it's a round button  | boolean | —                                                  | false   |
| circle      | determine whether it's a circle button | boolean | —                                                  | false   |
| loading     | determine whether it's loading         | boolean | —                                                  | false   |
| disabled    | disable the button                     | boolean | —                                                  | false   |
| icon        | icon class name                        | string  | —                                                  | —       |
| autofocus   | same as native button's `autofocus`    | boolean | —                                                  | false   |
| native-type | same as native button's `type`         | string  | button / submit / reset                            | button  |

## 按钮组属性

| Attribute | Description                                      | Type   | Accepted Values       | Default |
| --------- | ------------------------------------------------ | ------ | --------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini | —       |

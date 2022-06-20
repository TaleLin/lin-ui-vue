---
title: 按钮 Button
level: 2
order: 1
parent: 基础
routePath: '/button'
---

# 按钮
Lin UI 致力于给小程序开发者提供愉悦的开发体验。

> 常用的操作按钮

### 主题色按钮

通过设置`type`属性为`default`、success、error、warning来创建不同样式的Button，样式默认为default。

```html
<template>
  <div>
    <lin-button type="default">default</lin-button>
    <lin-button type="error">error</lin-button>
    <lin-button type="success">success</lin-button>
    <lin-button type="warning">warning</lin-button>
  </div>
</template>
```
::: warning
**使用 Lin UI 务必勾选`Es6 转 ES5`和`使用 npm 模块`选项**
:::

::: error
  WARNING 2222
:::

::: info
  友情提示
  WARNING 2222
:::
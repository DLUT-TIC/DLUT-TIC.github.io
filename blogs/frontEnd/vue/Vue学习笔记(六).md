---
title: Vue笔记（六）：生命周期钩子、路由、Element Plus
date: 2024/9/16
categories:
 - fe
author: aoxuexinghuo
tags:
 - Vue
 - 手写
 - 前端框架
---
## Vue学习笔记（六）：生命周期钩子、路由、Element Plus

### 一、生命周期钩子

#### 1.生命周期

每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。

我们一般把生命周期分为以下四个阶段，先大致了解一下即可：

##### （1）创建阶段

**beforeCreate:**

- 组件实例初始化之后，数据观测和事件机制尚未启动。
- 无法访问`data`、`computed`、`methods`等中的数据，因为它们还未被初始化。

**created:**

- 组件实例已经创建完成，数据观测和事件机制已经启动。
- 可以访问和修改`data`、`computed`、`methods`，此时可以进行数据的初始化等操作。
- 组件还未挂载到 DOM 中，因此无法进行 DOM 操作。

#####  （2）挂载阶段

**beforeMount:**

- 在挂载开始之前被调用
- 此时模板已编译，但尚未渲染到页面上
- 可以访问并修改 DOM，虽然此时的 DOM 仍未完全生成。

**mounted:**

- 组件挂载完成后调用，此时组件的 DOM 已经生成并插入到页面中。
- 适合进行依赖于 DOM 的操作，比如访问子组件或使用第三方库操作 DOM。

##### （3）更新阶段

**beforeUpdate:**

- 组件的响应式数据发生变化，开始重新渲染之前调用。
- 此时可以在数据变化前执行一些操作，如手动修改数据。

**updated:**

- 组件的重新渲染完成之后调用。
- 可以在这个钩子中执行依赖于 DOM 结构更新后的操作。

##### （4）取消挂载阶段

**beforeUnmount:**

- 在组件实例即将从 DOM 中移除之前调用。
- 此时组件仍然存在于 DOM 中，你可以执行一些清理工作，比如移除事件监听器或取消定时器。
- 适用于需要在组件完全移除前进行处理的场景。

**unmounted:**

- 组件实例从 DOM 中移除之后调用。

- 此时组件的所有绑定事件、子组件等都已被解除，DOM 元素也被彻底删除。
- 适合用于完全清理资源或进行一些统计、日志记录等操作。
- 下面这张图可以帮助我们更好地了解一个 Vue 组件所经历生命周期：

![a9btf](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/a9btf.png)

#### 2.钩子函数

上述 Vue 组件的这些生命周期阶段为我们提供了不同的钩子函数，可以帮助我们在组件的不同生命周期阶段执行特定的逻辑。

下面让我们以最常用的钩子函数`mounted()`进行举例说明：

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      message: '欢迎来到 TIC!'
    };
  },
  mounted() {
    // 设置页面标题
    document.title = 'Vue 示例';
    // 控制台输出消息
    console.log('组件已挂载，页面标题已设置。');
  }
};
</script>
```

![pk1ue](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/pk1ue.png)


可以看到网页的标题成功修改，同时控制台也打印了相关信息。

`mounted()`钩子函数在 Vue 组件中广泛用于绘图，尤其是我们需要在组件挂载后操作 DOM 或使用外部库来绘制图表或图形时。因为`mounted()`确保了组件的模板已经渲染完毕，DOM 元素已经存在，因此非常适合在这个阶段进行绘图操作。

读者如果感兴趣可以自行去了解 chart.js，mermaid 等绘图工具的使用。

**注意：**不要在 `updated` 钩子中更改组件的状态，因为这会导致无限的更新循环。

### 二、路由

#### 1.路由的含义

Vue 的路由管理通常通过 Vue Router 来实现，它是 Vue.js 官方提供的路由库。路由的作用是根据 URL 的变化来渲染不同的组件，帮助开发者构建单页面应用（SPA）。但如果我们只需要一个简单的页面路由，而不想为此引入一整个路由库，可以通过动态组件的方式。

#### 2.动态组件方式实现路由

让我们以下面这段代码为例进行解释:

```vue
<script>
import Home from './Home.vue';
import About from './About.vue';
import NotFound from './NotFound.vue';
 
const routes = {
  '/': Home,
  '/about': About
};
 
export default {
  data() {
    return {
      currentPath: window.location.hash.slice(1) || '/'
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath] || NotFound;
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash.slice(1);
    });
  }
};
</script>
 
<template>
  <div>
    <nav>
      <a href="#/">Home</a> |
      <a href="#/about">About</a> |
      <a href="#/non-existent-path">Broken Link</a>
    </nav>
    <component :is="currentView" />
  </div>
</template>
```

##### （1）引入组件部分

```javascript
import Home from './Home.vue';
import About from './About.vue';
import NotFound from './NotFound.vue';
```

这部分代码导入了三个组件：Home.vue、About.vue 和 NotFound.vue。这些组件对应不同的页面视图。当用户导航到不同的路径时，将显示不同的组件。当然，我们要事先在对应的路径上创建好这三个组件。

##### （2）定义路由对象

```javascript
const routes = {
  '/': Home,
  '/about': About
};
```

`routes` 是一个简单的对象，用于将路径映射到组件。前面的键是路径字符串，后面的值是对应的组件。这意味着当路径为 '/' 时，将显示 Home 组件；当路径为 `'/about'` 时，将显示 About 组件。

##### （3）data 选项

```javascript
data() {
  return {
    currentPath: window.location.hash.slice(1) || '/'
  };
}
```

data 返回了一个对象，包含了组件的响应式状态。这里的 `currentPath` 用于存储当前的路径。`window.location.hash.slice(1)` 是获取当前 URL 的 hash 值并去掉前面的 #。如果没有 hash，则默认返回 '/'。

那么什么是 hash 呢？

hash 是指 URL 中的一个片段，它以 # 开头，通常用来表示页面中的某个部分或状态。hash 是 URL 的一部分，但它不会被发送到服务器，因此不会触发页面的重新加载。例如一个典型的 URL 包含以下部分：`http://example.com/path/page.html#section`

其中，`#section` 就是 hash。也就是说，hash 是 URL 的一部分，用于表示页面中的特定位置或状态。它不会触发页面重新加载，因此非常适合在单页面应用中实现无刷新导航和客户端路由。

##### （4）computed 选项

```javascript
computed: {
  currentView() {
    return routes[this.currentPath] || NotFound;
  }
}
```

`computed` 定义了计算属性 `currentView`。它根据 `currentPath` 返回相应的组件。如果 `currentPath` 对应的路径在 `routes` 中存在，返回相应组件；如果不存在，返回 `NotFound` 组件。

##### （5）mounted 生命周期钩子

```javascript
mounted() {
  window.addEventListener('hashchange', () => {
    this.currentPath = window.location.hash.slice(1);
  });
}
```

`mounted` 是我们前面刚刚讲到的 Vue 的生命周期钩子之一，表示组件已经挂载到 DOM 上。这里使用 `window.addEventListener` 监听 `hashchange` 事件。当 URL 的 `hash` 改变时，更新 `currentPath`，从而触发视图重新渲染。

##### （6）模板部分

```vue
<template>
  <div>
    <nav>
      <a href="#/">Home</a> |
      <a href="#/about">About</a> |
      <a href="#/non-existent-path">Broken Link</a>
    </nav>
    <component :is="currentView" />
  </div>
</template>
```

`<nav>`标签中定义了三个链接，点击这些链接会改变 URL 的 hash 部分，从而触发路径更新和视图切换。

`<component :is="currentView" />` 是 Vue 的动态组件，用于根据 `currentView` 的值动态渲染不同的组件。

##### （7）实现效果

![qve3t](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/qve3t.png)

![766ah](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/766ah.png)

![gow9b](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/gow9b.png)

可以看到，当我们点击不同的链接时，会改变 URL 的 hash 部分，从而触发 Vue.js 应用中对应的组件显示。

#### 3.Vue Router 实现路由

相较于动态组件方式实现路由，Vue Router 提供了一种灵活且强大的方式来管理 Vue.js 应用中的路由，使得开发者能够创建复杂的单页面应用（SPA）。它支持动态路由、嵌套路由、懒加载组件和导航守卫等特性，能够简化页面导航逻辑、提高应用性能，并增强用户体验。通过集成 Vue Router，开发者可以更轻松地管理应用的视图状态，进行组件的动态切换，以及实现复杂的路由控制和权限管理。

由于内容较多，就不在此处进行展开，读者如果感兴趣，可以自行前往官方文档：[Vue Router - Vue.js 的官方路由](https://router.vuejs.org/zh/) 了解更多关于 Vue Router 的使用方式和细节。

### 三、Element Plus

Vue.js 是一个高度组件化的前端框架。组件化是 Vue.js 的核心特性之一，它将用户界面分解成可重用的、独立的组件，使得开发和维护变得更加高效和组织化。相信通过前面的学习，大家对此应该也有所体会。既然是一个如此高度组件化的前端框架，那么有没有什么能够直接供我们使用的组件呢？

这就是我们现在要介绍的 Element Plus 了：[Element Plus - 基于 Vue 3，面向设计师和开发者的组件库](https://element-plus.org/zh-CN/)

Element Plus 是一个与 Vue 3 完美匹配的 UI 组件库，专门为构建现代网页应用设计。它提供了很多现成的组件，比如按钮、表单和对话框，让你可以轻松地用 Vue 的方式快速创建漂亮的界面。每个组件都封装了自己的样式和功能，像一个个积木块一样，方便你在不同地方重复使用。通过结合 Vue 的组件化特性，Element Plus 使得设计和维护界面变得更加简单和高效。

善用 Element Plus 能够使我们的 Vue 项目开发事半功倍。

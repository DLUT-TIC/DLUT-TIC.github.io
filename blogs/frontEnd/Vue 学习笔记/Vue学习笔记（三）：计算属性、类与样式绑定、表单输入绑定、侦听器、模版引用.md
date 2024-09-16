---
title: Vue笔记
date: 2024/9/16
categories:
 - fe
author: aoxuexinghuo
tags:
 - Vue
 - 手写笔记
 - 前端框架
---
##  Vue学习笔记（三）：计算属性、类与样式绑定、表单输入绑定、侦听器、模版引用

[TOC]

### 一、计算属性

#### 1.使用方式

在前面模版语法的学习中我们了解到，Vue 在所有的数据绑定中都支持使用完整地 JavaScript 表达式。但当模版中的表达式较为复杂时，可能会显得十分臃肿，难以维护。这时就要用到我们的计算属性了。下面以一个简单的代码为例，用来检查`names`数组中是否有元素：

```vue
<template>
  <p>{{ isNames }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
        names: ["小火龙", "妙蛙种子", "杰尼龟"]
      }
    },
    computed: {
      isNames() {
        return this.names.length > 0 ? "Yes" : "No"
      }
    }
  }
</script>
```


 我们通常将计算属性放在与`data`同级的`computed`中，与方法不同的是，我们在调用计算属性时不需要加括号，而是直接写函数名，使用方式与一般的属性相同。

既然提到方法，我们不免疑惑，我们使用方法似乎也能实现相同的功能，为什么又要引入所谓的计算属性呢？计算属性和传统的方法相比有什么优势？

#### 2.计算属性与方法的区别

计算属性与方法的不同之处在于计算属性值会基于其响应式依赖而被缓存。一个计算属性只会在其响应式依赖更新时才会重新计算，否则无论被访问多少次都会直接返回先前的计算结果，而不用重复执行函数。以上面的代码为例，如果我们额外添加一行  `<p>{{ isNames }}</p>`，`isNames`函数也只会被执行一次，只有当其所依赖的`names`更新时，其才会被重新执行。

与此相对的，方法调用总是会在重渲染发生时再次执行函数。

### 二、类与样式绑定

为了方便使用，Vue 为`class`和`style`属性的`v-bind`用法提供了功能增强，使其除了能和一般的属性一样绑定字符串外，还能够进行对象或者数组的绑定。

#### 1.Class 的绑定

**绑定对象：**
我们可以通过给`v-bind: class`传递一个对象的方式来切换`class`：

```vue
<template>
  <p :class = pokStyle>{{ name }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
        name: "宝可梦",
        pokStyle: {
          Size: true,
          Color: true
        }
      }
    }
  }
</script>
 
<style>
  .Size {
    font-size: 40px;
  }
  .Color {
    color: red;
  }
</style>
```

**绑定数组：**
也可以将其修改为数组的形式：

```vue
<template>
  <p :class = Class>{{ name }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
        name: "宝可梦",
        Class: ["Size", "Color"]
      }
    }
  }
</script>
```

`：class`指令可以也和一般的`class`属性共存：

```vue
<p class = "active" :class = Class>{{ name }}</p>
```

#### 2.Style 绑定

`style`与对象绑定的使用方法与`class`相同：

```vue
<template>
  <p :style = "{color: Color, fontSize: fontSize + 'px'}">{{ name }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
        name: "宝可梦",
        Color: "blue",
        fontSize :30
      }
    }
  }
</script>
```

`style`同样也可以与数组绑定，但其用处与对象绑定重合度较高且意义不大，这里就不在进行赘述。

### 三、表单输入绑定

#### 1.v-model 指令

在前端处理表单数据时，我们往往需要将用户在表单框中输入的内容同步给 JavaScript 中相应的变量。手动连接值绑定和更改事件监听器是一件很麻烦的事情，而 Vue 为我们提供的`v-model`指令可以帮助我们优雅地解决这个问题。

下面我们依旧以一段简单的代码为例进行讲解：

```vue
<template>
  <input type = "text" v-model = "name">
  <p>{{ name }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
        name: ""
      }
    }
  }
</script>
```

这里我们使用`v-model`指令把表单与`name`进行绑定，当我们在表单中输入内容时，下方的`name`也会实时更新，与我们所输入的内容保持一致。

简单点的理解就是`v-bind`绑定属性，属于单向绑定，而`v-model`则属于双向绑定，修改任何一边都会同步到另外一边。

#### 2.v-model 修饰符

`v-model`指令为我们提供了以下几种修饰符：

`.laze`

默认情况下，`v-model`会在每次`input`事件后更新数据，我们可以添加`.lazy`修饰符来改为在每次`change`事件后更新数据。这里的`change`事件我们可以简单理解为其失去焦点或者我们按下 Enter 键。

`.number`

强制将用户输入的内容转换为数字类型，这样我们的属性值就会始终是一个数字。但要注意的是该修饰符只会尝试将用户输入的值转换为数字类型。如果用户输入的值无法转换为有效的数字，那么属性的值将保持为 NaN（非数字）。

`.trim`

自动去除用户输入值的首尾空格。

### 四、侦听器

侦听器的作用是侦听页面中响应式数据的变化，这些数据一旦发生变化，侦听器就会侦听到，从而进行一系列我们想要的逻辑操作。而所谓的响应式数据，我们可以简单理解为我们在`data`中声明、被 {{ }} 绑定的数据。

让我们以下面的代码为例详细讲解：

```vue
<template>
  <p>{{ name }}</p>
  <button @click = "Update">mega进化!</button>
</template>
 
<script>
  export default {
    data() {
      return {
        name: "喷火龙"
      }
    },
    methods: {
      Update() {
        this.name = "mega喷火龙X"
      }
    },
    watch: {
      name(newValue, oldValue) {
        console.log(newValue, oldValue)
      }
    }
  }
</script>
```


我们一般把侦听函数放在与`data`同级的`watch`中，且侦听函数的函数名必须要与其侦听的数据名相同，例如我们这里的`name()`函数的作用就是侦听`name`的变化。同时侦听函数可以使用两个参数分别表示数据变化后的新值和变化前的旧值。

当我们点击按钮后，“喷火龙”mega进化为“mega喷火龙X”，`name()`函数侦听到这一变化，开始执行，将`name`的新值和旧值分别打印出来。

### 五、模版引用

#### 1.引子

在讲模版引用之前，我们先回顾一下目前已经掌握的对 DOM 的几种操作：

- 改变内容：使用 {{ }} 模版语法；
- 改变属性：使用`v-bind`指令；
- 绑定事件：使用`v-on`指令；

可以看到，目前为止，我们对于 DOM 的操作，都是通过 Vue 为我们提供的方案来实现的。虽然这几种方法已经基本满足了我们对于 DOM 操作的需求，但如果在某些特殊的情况下我们依旧想要直接地去操作 DOM，我们可以通过模版引用的方式。

#### 2.模版引用获取 DOM 操作

想要实现直接访问底层 DOM 元素，我们可以使用特殊的`ref`属性。`ref`属性允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用。在挂载结束后，引用都会被暴露在`this.$refs`之上，下面给出代码示例：

```vue
<template>
  <div ref = "container">{{ name }}</div>
  <button @click = "getElementHandle">超极巨化</button>
</template>
 
<script>
  export default {
    data() {
      return {
        name: "皮卡丘"
      }
    },
    methods: {
      getElementHandle() {
        console.log(this.$refs.container);
        this.$refs.container.innerHTML = "超极巨皮卡丘";
      }
    }
  }
</script>
```


可以看到，我们给 div 标签添加了`ref = "container"`时，当该标签被挂载后，我们可以直接使用`this.$refs.container`获取相应的 DOM 节点（注意此处的写法，不要漏掉 $ 符号和 s），将该组件打印出来，并修改其文本内容。而此处的`innerHTML`就是原生 JS 里的属性，同样，通过这种方式我们可以实现以前我在原生 JS 中的所有操作。

需要注意的是，我们只有在组件挂载后才能访问模版引用，而如果我们在模版中的表达式上访问`this.$refs.container`，那么在初次渲染时会是`undefined`。这是因为在初次渲染前这个元素还不存在。

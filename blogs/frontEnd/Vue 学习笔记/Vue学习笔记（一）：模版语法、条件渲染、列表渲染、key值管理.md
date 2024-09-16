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
## Vue学习笔记（一）：模版语法、条件渲染、列表渲染、key 值管理

[TOC]

### 一、模版语法

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

#### 1.文本插值

文本插值最基本的数据绑定语法，采用双大括号{{   }}的形式。

```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
  export default {
    data() {
      return {
        message: "宝可梦百科"
      }
    }
  }
</script>
```

{{   }}标签的内容将会被替代为对应组件实例中 message 属性的值，如果 message 属性的值发生了改变，{{   }} 标签内容也会更新。

因此，如果不想改变标签的内容，可以通过使用 `v-once` 指令执行一次性地插值，当数据改变时，插值处的内容不会更新。

```vue
<p v-once>该值不会改变：{{ message }}</p>
```

在上面的演示中，我们绑定的只是简单的属性名，但实际上，Vue在所有的数据绑定中都支持完整的 JavaScript 表达式。例如：

```vue
<p>{{ message.split("").reverse().join("") }}</p>
```

但需要注意的是，每个绑定仅支持单一表达式，也就是一段能够被求值的 JavaScript 代码。我们可以通过其能否合法放在`return`的后面来进行判断。

#### 2.原始 HTML

双大括号会将数据插值为纯文本，而不是 HTML。若想插入 HTML，则需要使用`v-html`指令。我们可以通过下面的代码来观察两者的区别。

```vue
<template>
  <div>
    <p>{{ PMHtml }}</p>
    <p v-html = "PMHtml"></p>
  </div>
</template>
 
<script>
  export default {
    data() {
      return {
        PMHtml: "<a href='https://wiki.52poke.com/wiki/%E4%B8%BB%E9%A1%B5'>宝可梦百科</a>"
      }
    }
  }
</script>
```

![img](https://i-blog.csdnimg.cn/blog_migrate/688e7b6e19362ec0a89b1e8283fee227.png)

我们可以看到，前者只是做了单纯的文本替换，后者则是将我们想要的链接成功渲染出来（渲染方式为在p标签里嵌套一个a标签）。

#### 3.属性绑定

从前文`v-html`指令的使用中，我们可以想到，既然双大括号不能用于插入 HTML，那么修改 HTML 属性显然也是不行的。当我们想要响应式地绑定一个属性，应该使用`v-bind`指令。而如果绑定的值是`null`或者`undefined`，那么该属性将会从渲染的元素上移除。

```vue
<template>
    <p v-bind:class = "testClass" v-bind:id = "testId" v-bind:title = "testTitle">小火龙</p>
</template>
 
<script>
  export default {
    data() {
      return {
        testClass: "火",
        testId: "小火龙",
        testTitle: null
      }
    }
  }
</script>
```

![img](https://i-blog.csdnimg.cn/blog_migrate/058ad1e487ae154b573a3545313fefa0.png)

 我们可以看到，在 HTML 中，`class`和`id`都被成功赋值，`title`由于被赋予的值为`null`而被移除。

由于`v-bind`指令使用过于频繁，我们可以通过简写的方式把`v-bind`省略，只保留冒号，如：

```vue
<p :class = "testClass" :id = "testId" :title = "testTitle">小火龙</p>
```

`v-bind`也可用于绑定布尔属性：

```vue
<template>
  <button disabled>按钮A</button>
  <button v-bind:disabled = "isDisabled">按钮B</button>
</template>
 
<script>
  export default {
    data() {
      return {
        isDisabled:false
      }
    }
  }
</script>
```

当我们想要动态绑定多属性时，也可以借助 JavaScript 对象：

```vue
<template>
    <p v-bind = Object>小火龙</p>
</template>
 
<script>
  export default {
    data() {
      return {
        Object: {
          class: "火",
          id: "小火龙"
        }
      }
    }
  }
</script>
```

### 二、条件渲染

条件渲染主要借助`v-if`，`v-else`，`v-else-if`，`v-show`指令。其具体的用法与逻辑很简单，我们可以通过下面的例子具体感受：

```vue
<template>
  <div v-if = "flag">小火龙</div>
 
  <div v-if = "flag">妙蛙种子</div>
  <div v-else>杰尼龟</div>
 
  <div v-if = "type === 'A'">小火龙</div>
  <div v-else-if = "type === 'B'">火恐龙</div>
  <div v-else-if = "type === 'C'">喷火龙</div>
  <div v-else>mega喷火龙X</div>
 
  <div v-show = "flag">杰尼龟</div>
</template>
 
<script>
  export default {
    data() {
      return {
        flag: true,
        type: "D"
      }
    }
  }
</script>
```

![img](https://i-blog.csdnimg.cn/blog_migrate/365223ab25db3d457e0bd3e7438665f7.png)

有些同学可能会发现，`v-if`与`v-show`的功能似乎是一样的，那么我们又为什么要引入`v-show`指令呢？或者说两者有什么区别呢？

**`v-if`与`v-show`区别：**

`v-if`是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听和子组件都会被销毁与重建。

同事`v-if`也是惰性的，如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才会被渲染。

相比之下，`v-show`更加简单，元素无论初始条件如何，始终会被渲染，只有 CSS 的`display`属性会被切换。

总的来说，`v-if`有更高的切换开销，而`v-show`有更高的初始渲染开销。因此，如果需要频繁切换，则使用`v-show`比较好；如果在运行时绑定条件很少改变，则`v-if`会更合适。

### 三、列表渲染

我们可以使用`v-for`指令基于一个数组来渲染一个列表。`v-for`指令的值需要使用`item in items`形式的特殊语法，其中`items`是源数据的数组，而`item`是迭代项的别名（可自行更改）。

遍历的对象既可以是数组，也可以是对象，或者是更为复杂的对象数组。

```vue
<template>
  <p v-for = "item in names">{{ item }}</p>
  <p v-for = "item in pokemon">{{ item }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
        names: ["小火龙","妙蛙种子","杰尼龟"],
        pokemon: {
            name: "小火龙",
            id: 1,
            system: "fire"
        }
      }
    }
  }
</script>
```

![img](https://i-blog.csdnimg.cn/blog_migrate/db52c75254542a9c62c41bd5491bdeed.png)

`v-for`也支持使用可选的参数`index`，`key`，`value`等（`value`可以替换为`item`）。

```vue
<template>
  <p v-for = "(item, index) in names">{{ index }}:{{ item }}</p>
  <p v-for = "(value, key, index) in pokemon">{{index}}-{{ key }}:{{ value }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
        names: ["小火龙","妙蛙种子","杰尼龟"],
        pokemon: {
            name: "小火龙",
            id: 1,
            system: "fire"
        }
      }
    }
  }
</script>
```


此外，我们也可以用of作为分隔符来代替in，这更加接近JavaScript的迭代器语法：

```vue
<p v-for = "item of names">{{ item }}</p>
```

### #通过 key 管理状态

Vue 默认按照“就地更新”的策略来更新通过`v-for`渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动DOM元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，我们需要为每一个元素对应的块提供一个唯一的 key attribute。

```vue
<template>
  <p v-for = "item in names" :key = "index">{{ item }}</p>
</template>
<script>
  export default {
    data() {
      return {
          names: ["小火龙", "妙蛙种子", "杰尼龟"]
      }
    }
  }
</script>
```

`key`在这里是通过`v-blind`绑定的特殊 attribute（此处的`v-blind`被省略）。

推荐在任何可行的时候为`v-for`提供一个 key attribute（在 Vue2 版本中不添加key会导致出现警告信息，而在最新的 Vue3 版本中取消了这一限制，我们以最新的 Vue3 为基准）。

`key`绑定的值期望是一个基础类型的值，例如字符串或`number`类型。一般情况下，不建议使用`index`作为`key`值，因为数据的插入和删除会导致`index`的改变，而我们要确保每一条数据的唯一索引不会发生变化。例如，如果对象数据存在唯一的`id`属性，我们可以把`id`属性的值作为`key`。
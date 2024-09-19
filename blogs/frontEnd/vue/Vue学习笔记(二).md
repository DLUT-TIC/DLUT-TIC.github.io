---
title: Vue笔记（二）：事件处理、事件传参、修饰符、数组变化侦测
date: 2024/9/16
categories:
 - fe
author: aoxuexinghuo
tags:
 - Vue
 - 手写
 - 前端框架
---
## Vue学习笔记（二）：事件处理、事件传参、修饰符、数组变化侦测

### 一、事件处理

在 Vue 中我们可以使用 `v-on` 指令来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。此外，`v-on` 指令可以缩写为 @ 符号。

具体用法为：`v-on: click = "handler"`或者`@click = "handler"`。

事件处理器 （handler）的值可以是内联事件处理器，也可以是方法事件处理器。

#### 1.内联事件处理器

内联事件处理器是指事件被触发时执行的内联 JavaScript 语句 (与 `onclick` 类似)，通常用于简单场景：

```vue
<template>
  <button @click = "count++">Add</button>
  <p>Counter is: {{ count }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
          count: 0
      }
    }
  }
</script>
```

#### 2.方法事件处理器

方法事件处理器是一个指向组件上定义的方法的属性名或是路径，能够更加灵活地处理一些较为复杂的问题。

一般我们将所有的方法或者函数都放在与`data`同级的`methods`中，通过`this`读取`data`中的数据：

```vue
<template>
  <button @click = "addCount">Add</button>
  <p>Counter is: {{ count }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
          count:0
      }
    },
    methods: {
      addCount() {
        console.log("pika");
        this.count ++
      }
    }
  }
</script>
```

### 二、事件传参

事件参数可以获取`event`对象和通过事件传递数据，Vue 中的`event`对象与原生 JS 中的`event`类似

#### 1.获取 event 对象

```vue
<template>
  <button @click = "addCount">Add</button>
  <p>Counter is: {{ count }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
          count:0
      }
    },
    methods: {
      addCount(e) {
        console.log(e);
        e.target.innerHTML = "Add" + this.count;
        this.count ++
      }
    }
  }
</script>
```



#### 2.传递参数

除了直接绑定方法名，我们还可以在内联事件处理器中调用方法。这允许我们向方法传入自定义参数以代替原生事件：

```vue
<template>
  <p @click = "Deliver(item)" v-for = "(item, index) of names" :key="index">{{ item }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
          names: ["小火龙", "妙蛙种子", "杰尼龟"]
      }
    },
    methods: {
      Deliver(text) {
        console.log(text)
      }
    }
  }
</script>
```


当我们用自定义参数代替原生事件后，如果我们还想要获取`event`，不能在参数后直接添加`event`，而是需要在`event`前添加一个**$**符号：

```vue
<template>
  <p @click = "Deliver(item, $event)" v-for = "(item, index) of names" :key="index">{{ item }}</p>
</template>
 
<script>
  export default {
    data() {
      return {
          names: ["小火龙", "妙蛙种子", "杰尼龟"]
      }
    },
    methods: {
      Deliver(text, e) {
        console.log(text,e)
      }
    }
  }
</script>
```

###  三、修饰符

#### 1.事件修饰符

在处理事件时调用`event.preventDefault()` 阻止默认事件或`event.stopPropagation()` 阻止事件冒泡是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。

为解决这一问题，Vue 为`v-on`提供了事件修饰符。修饰符是用 `.` 表示的指令后缀，例如以下这些：

`.stop`		单击事件将停止传递

`.prevent` 	  提交事件将不再重新加载页面

`.self` 	       只有在事件是从绑定的元素本身触发时才触发处理器。

`.once` 	       确保事件处理程序最多只触发一次

`.passive`	   提升事件的性能，尤其是滚动事件。

下面以`.stop`为例，阻止事件冒泡：

```vue
<template>
  <div @click.stop = "clickDiv">
    <p @click.stop = "clickP">测试冒泡</p>
  </div>
</template>
 
<script>
  export default {
    methods: {
      clickDiv() {
        console.log("DIV")
      },
      clickP() {
        console.log("P")
      }
    }
  }
</script>
```


当我们点击“测试冒泡”时，只打印了 P，而没有打印外层的 DIV，说明阻止冒泡成功。

同时修饰语既可以采用链式书，写也可以只有修饰符 ：

```vue
<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>
 
<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>
```

#### 2.按键修饰符

在监听键盘事件时，我们经常需要检查某些特定的按键。Vue 允许我们在`v-on`或`@`监听按键事件时

添加按键修饰符，同时为一些常用的按键提供了别名：

`.enter`

`.tab`

`.delete`	（捕获 “Delete” 和 “Backspace” 两个按键）

`.esc`

`.space`

`.up`

`.down`

`.left`

`.right`

下面以`.enter`为例，只有当 key 为 “Enter” 时，才会调用 “submit”：

```vue
<template>
  <input @keyup.enter="submit" />
</template>
 
<script>
  export default {
    methods: {
      submit() {
        console.log("Submitted!")
      }
    }
  }
</script>
```

除了上述按键修饰符外，还存在四个特殊的系统按键修饰符：

`.ctrl`

`.alt`

`.shift`

`.meta`

系统按键修饰符和常规按键的区别在于：与`keyup`事件一起使用时，该按键必须在时间发出时处于按下状态。也就是说，`keyup.ctrl`只会在你仍然按住`ctrl`但松开了另一个键时被触发。若单独松开`ctrl`键将不会触发。这一点，大家在日常使用电脑的过程中应该也都深有体会。

```vue
  <!-- Alt + Enter -->
  <input @keyup.alt.enter="submit" />
  <!-- Ctrl + 点击 -->
  <div @click.ctrl="submit">Ctrl + 点击</div>
```

#### 3.鼠标按键修饰符

鼠标按键修饰符有一下三种:

`.left`

`.right`

`.middle`

这些修饰符将处理程序限定为由特定鼠标按键触发的事件。具体用法与前文类似，这里就不在赘述。

### 四、数组变化侦测

#### 1.变更方法

Vue 能够侦听响应式数组的变更方法，并在他们被调用时触发相关的更新。这些变更方法包括：

`push()`

`pop()`

`shift()`

`unshift()`

`splice()`

`sort()`

`reverse()`

也就是说，当我使用上述这些变更方法时，UI 可以自动被实时更新，当数组发生变化，UI 便会产生相应的响应。下面我们来举例说明：

```vue
<template>
  <button @click = "addList">添加宝可梦</button>
  <ul>
    <li v-for = "(item, index) of names" :key = "index">{{ item }}</li>
  </ul>
</template>
 
<script>
  export default {
    data() {
      return {
        names:["小火龙", "妙蛙种子", "杰尼龟"]
      }
    },
    methods: {
      addList() {
        this.names.push("皮卡丘")
      }
    }
  }
</script>
```

![4463j](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/4463j.png)


可以看到，当我们点击按钮时，`names`数组被添加了一个元素，而 UI 界面也发生了变化，将新加入的元素渲染了出来。

#### 2.替换方法

变更方法会对调用他们的原数组进行变更。相对的，也有一些不可变方法：`filter()`，`concat()`和`slice()`，这些都不会更改原数组，而是返回一个新的数组，不会引起 UI 的变化。

例如，我们将上文的`addList`修改为如下：

```javascript
      addList() {
        console.log(this.names.concat("皮卡丘"));
        console.log(this.names)
      }
```
![arq6t](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/arq6t.png)

![oei2g](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/oei2g.png)

我们可以看到按下按钮后，我们得到了一个新的数组，而原数组并没有发生变化，UI 也没有更新。

特别的，如果我们在使用`concat()`时想要原数组也发生变化，可以通过给原数组赋值的方式实现：

```javascript
this.names = this.names.concat("皮卡丘");
```


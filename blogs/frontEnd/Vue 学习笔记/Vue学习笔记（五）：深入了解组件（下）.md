---
title: Vue笔记（五）：深入了解组件（下）
date: 2024/9/16
categories:
 - fe
author: aoxuexinghuo
tags:
 - Vue
 - 手写
 - 前端框架
---
## Vue学习笔记（五）：深入了解组件（下）

### 一、组件事件（$emit）

在组件的模版表达时候中，我们可以直接使用`$emit`方法触发自定义事件，触发自定义事件的目的一般是组件之间传递数据。可是在上一篇博客中我们讲到的`Props`的作用就是数据传递，为什么我们这里还要讲`$emit`呢？

实际上，在`Props`的内容里我们也提到过，那就是其只能用于父组件向子组件传递数据，而`$emit`能够实现子组件向父组件传递数据。

依旧是两个父子嵌套关系的文件：

**Parent:**

```vue
<template>
    <h3>Parent</h3>
    <Child @someEvent = "getHandle"/>
</template>
 
<script>
    import Child from "./Child.vue"
    export default {
        methods: {
            getHandle(data) {
                console.log("成功触发");
                console.log(data)
            }
        },
        components: {
            Child
        }
    }
</script>
```

**Child:**

```vue
<template>
    <h3>Child</h3>
    <button @click = "clickEventHandle">数据传递</button>
</template>
 
<script>
    export default {
        emits: ["someEvent"],
        methods: {
            clickEventHandle() {
                this.$emit("someEvent", "路卡利欧")
            }
        }
    }
</script>
```

我们首先在 Child 文件中给按钮的`click`事件绑定一个`clickEventHandle()`函数，在函数中使用`this.$emit`的方式将自定义事件`someEvent`传递给 Parent（注意这里我们可以选择使用两个参数，第二个参数用于额外的数据传递，可以不加）。然后我们就可以在 Parent 中以`<Child @someEvent = "getHandle"/>`的方式将接收到的自定义事件与正常函数绑定使用了。

此外，我们需要在子组件添加`emits`选项来声明自定义事件的名称，否则控制台会出现警告。

### 二、组件与 v-model

在前面的学习中我们已经了解了`v-model`在单个元素中的使用，其双向绑定的功能可以帮助我们轻松实现实时读取用户在输入框内输入的数据并将其同步显示出来。但如果用户输入的地方和我们想要显示或使用数据的地方不在同一个组件中，我们又该怎么解决这种跨组件的问题呢？

**Show:**

```vue
<template>
    <div>搜索内容为：{{ Text }}</div>
    <Search @searchEvent = "getSearch"/>
</template>
 
<script>
    import Search from "./Search.vue"
    export default {
        data() {
            return {
                Text: ""
            }
        },
        components: {
            Search
        },
        methods: {
            getSearch(data) {
                this.Text = data
            }
        }
    }
</script>
```

**Search:**

```vue
<template>
    搜索：<input type = "text" v-model = "Text">
</template>
<script>
    export default {
        data() {
            return {
                Text: ""
            }
        },
        emits: ["searchEvent"],
        watch: {
            Text(newValue, oldValue) {
                this.$emit("searchEvent", newValue)
            }
        }
    }
</script>
```

![img](https://i-blog.csdnimg.cn/blog_migrate/4947fd680a2e0d35bcc9d2826db448b6.png)


这里我们实现的功能是在 Search 组件中输入数据然后在 Show 组件中将其实时显示出来。下面我们对整个过程详细解释：

首先我们在 Search 组件中使用`v-model`指令将 input 组件与`Text`双向绑定，为数据`Text`设置一个监听函数，每当`Text`内容更新时，就会触发监听函数，将变化后的新值通过`$emit`传递给Show组件，Show 组件每次接收到全新的`Text`值就会触发我们的自定义事件，将对自己的`Text`进行更新，将其渲染在网页上。这里我们巧妙的借助了监听函数与自定义事件的结合，实现了数据的跨组件实时传递功能。

### 三、组件数据传递

前面我们讲到关于数据传递的内容有：

- 父组件给子组件传递数据：采用`props`

- 子组件给父组件传递数据：采用自定义事件

除了自定义事件能够实现子传父之外，我们还可以使用`props`。咳咳，是的，你没看错，就是`props`。虽然`props`不能够直接实现子传父，但是我们可以借助回调函数实现这一功能。前面关于`props`的内容我们讲到，`props`传递的可以是字符串、数组、对象，实际上，他还能够传递函数，由于函数是能够携带参数的，借助这一特点，我们便能够实现子传父。下面给出示例代码：

**Parent：**

```vue
<template>
    <h3>Parent</h3>
    <p>父元素：{{ message }}</p>
    <Child :onEvent = "dataFn"/>
</template>
 
<script>
    import Child from "./Child.vue"
    export default {
        data() {
            return {
                message: ""
            }
        },
        components: {
            Child
        },
        methods: {
            dataFn(data) {
                this.message = data
            }
        }
    }
</script>
```

**Child:**

```vue
<template>
    <h3>Child</h3>
    <p>{{ onEvent("传递数据") }}</p>
</template>
 
<script>
    export default {
        props: {
            onEvent: {
                type: Function
            }
        }
    }
</script>
```

### 四、透传 Attributes

#### 1.透传 Attributes 的使用

透传 Attributes 指的是以类似于继承的方式将一个属性或`v-on`事件监听器传递给子组件。这要求继承该内容的组件只能以单个根元素作渲染。例如我们存在下面这样一个以单元素为根的组件：

```vue
<template>
    <h3>哲尔尼亚斯</h3>
</template>
 
<style>
    .pk{
        color: pink;
    }
</style>
```

当其父元素以`<Child class = "pk"/>`使用该组件时，相当于为其唯一的根元素传递了一个`class`属性，从而使 CSS 样式生效，字体颜色变为粉色。

但如果子组件存在多个根元素，继承则不会生效，例如我们为上面的代码再添加一个`<h3>`标签：

```vue
<template>
    <h3>哲尔尼亚斯</h3>
    <h3>伊菲尔塔尔</h3>
</template>
```

此时，CSS 样式不会对任何一个元素生效，字体颜色都为默认的黑色。

#### 2.禁用透传 Attributes

如果我们不想要一个组件自动地继承`attribute`，可以在组件选项中设置：`inheritAttrs: false`。

```vue
<script>
    export default {
        inheritAttrs: false
    }
</script>
```

实际上，我们在日常中很少为用到透传 Attributes，一般情况下也不建议大家通过这种方式来为组件元素设置属性。

### 五、插槽 Slots

#### 1.插槽的使用

前面我们了解到`props`能够用于接收任意类型的 JavaScript 的值，但如果我们想要传递的是一些 HTML 片段呢？这时我们就需要借助插槽了。具体使用方式来看下面的示例代码：

**Parent:**

```vue
<template>
    <h3>Parent</h3>
    <Child>
        <div>
            <h3>插槽</h3>
            <p>插槽内容</p>
        </div>
    </Child>
</template>
 
<script>
    import Child from "./Child.vue"
    export default {
        components: {
            Child
        }
    }
</script>
```

**Child:**

```vue
<template>
    <h3>Child</h3>
    <slot></slot>
</template>
```

这里我们将原本的`<Child/>`单标签修改为双标签，在里面写下我们需要传递的 HTML 片段。然后我们就可以在 Child 以`<slot></slot>`的方式使用该片段。这里的`<slot>`元素是一个插槽出口，标示了父元素提供的插槽内容将会在哪里被渲染，我们可以自行为其选定位置，也可以多次使用。下面这张来自官网的图片也能够帮我们更加具体的了解插槽的使用原理：

![img](https://i-blog.csdnimg.cn/blog_migrate/fac938cd2c14e6eb2520f411fdf70f20.png)

#### 2.渲染作用域

插槽的内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模版中定义的：

**parent:**

```vue
<template>
    <h3>Parent</h3>
    <Child>
        <div>
            <h3>插槽</h3>
            <p>{{ message }}</p>
        </div>
    </Child>
</template>
 
<script>
    import Child from "./Child.vue"
    export default {
        data() {
            return{
                message: "插槽内容"
            }
        },
        components: {
            Child
        }
    }
</script>
```


简单来说就是当我们需要在插槽内添加动态数据时，应该把数据内容写在父组件中，而不是子组件。

#### 3.插槽默认值

我们在子组件中使用插槽时，可以为其设置默认值，当父组件没有传递插槽内容或传递内容为空时，子组件中的插槽部分就会显示默认值的内容，否则正常显示来自父组件的插槽内容，实现方式也很简单，直接写在标签中间即可：

```vue
<slot>插槽默认值</slot>
```

#### 4.具名插槽

如果我们想要传递多个不同的插槽，可以通过为插槽起名字的方式，借助`v-slot`指令实现将不同的内容传递给对应名字的插槽：

**Parent:**

```vue
<template>
    <h3>Parent</h3>
    <Child>
        <template v-slot:A>
            <h3>插槽A</h3>
        </template>
        <template v-slot:B>
            <h3>插槽B</h3>
        </template>
    </Child>
</template>
 
<script>
    import Child from "./Child.vue"
    export default {
        components: {
            Child
        }
    }
</script>
```

**Child:**

```vue
<template>
    <h3>Child</h3>
     <slot name = "A"></slot>
     <slot name = "B"></slot>
</template>
```

我们在 Child 中通过`name`属性为不同的插槽取名，然后在 Parent 中就可以使用`v-slot`指令将对应的片段传递给相应名字的插槽，这里的`v-slot:`必须写在`<template>`标签中。此外，`v-slot:` 也可以简写为`#`符号。

注意：`v-slot:`或`#`后不要跟空格，直接写对应插槽的名字，如果在其后面添加了空格，Vue 会将其视为无效的指令，并显示错误消息（个人亲身经历，找了好久才发现是这个问题23333）。

#### 5.插槽中的数据传递

前面我们讲到在插槽内添加动态数据时，应该把数据内容写在父组件中。但在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据，想要做到这一点，我们需要一种方式来让子组件在渲染时将一部分数据提供给插槽。那就是像对组件传递`props`那样，向一个插槽的出口上传递`attributes`。示例代码如下：

**Parent:**

```vue
<template>
    <h3>Parent</h3>
    <Child v-slot = "SlotProps">
            <h3>{{ SlotProps.msg }}</h3>
    </Child>
</template>
 
<script>
    import Child from "./Child.vue"
    export default {
        components: {
            Child
        }
    }
</script>
```

**Child:**

```vue
<template>
    <h3>Child</h3>
     <slot :msg = "Childmessage"></slot>
</template>
<script>
    export default {
        data(){
            return {
                Childmessage: "子组件数据"
            }
        }
    }
</script>
```

其大致流程是：我们先把数据传递给父组件，父组件的插槽在接收到数据后再将该数据传递回子组件。

我们在子组件中以`:` （`v-bind:`的简写）加属性的方式发送数据，然后在`<Child>`中以`v-slot = "SlotProps"`的方式来接收。注意此处的`"SlotProps"`是一个对象，名字可自定义，此处便于理解我们将其起名为`SlotProps`。下面我们就可以在插槽内通过访问对象内容的方式来访问我们接收到的数据了。

**注意：**此处使用的是`v-slot =`而不是`v-slot:` 因此不可以简写为`#`。

而对于具名插槽，我们可以将两者写在一起：

```vue
<template v-slot:A = "SlotProps">
    <h3>{{ SlotProps.msg }}</h3>
</template>
<!-- 或者 -->
<template #A = "SlotProps">
    <h3>{{ SlotProps.msg }}</h3>
</template>
```
---
title: Vue笔记（四）
date: 2024/9/16
categories:
 - fe
author: aoxuexinghuo
tags:
 - Vue
 - 手写笔记
 - 前端框架
---
### 一、组件基础

#### 1.引子

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。当我们使用构建步骤时，我们一般会将 Vue 组件定义在一个单独的`.vue`文件中，这被叫做单文件组件（简称 SFC）。实际上，我们前面的代码示例也都是在一个单独的组件内实现的。

#### 2.组件组成结构

一个最基本的组件，其组成结构如下：

```vue
<template>
  <div>HTML标签</div>
</template>
 
<script>
  export default {
 
  }
</script>
 
<style scoped>
 
</style>
```

- `<template>`用来承载所有的 HTML 标签；
- `<script>`用于承载所有的业务逻辑；
- `<style>`用于承载各种样式；

可以看到，一个完整的 Vue 组件包含所有我们在网页上需要呈现的内容：HTML，JavaScript 以及 CSS。

有些人可能会注意到这里的`<style>`标签里有一个`scoped`，它的作用是什么呢？

答案很简单，`scoped`的作用是让当前样式只在当前组件中生效，如果不加`scoped`，这里的样式就为成为全局样式，对于任何组件都会生效，所以一般为了避免各个组件之间相互干扰，我们都会选择给`<style>`标签加上一个`scoped`，对其作用域进行限制。

#### 3.组件的引用

组件的引用分为三个步骤：

首先，在`<script>`标签中使用 ES6 所提供的`import`去引入这个组件，格式为`import MyComponent from "./components.MyComponent.vue"`。前面的`MyComponent`是用户自己为所引入组件所起的名字，可以不与文件名相同，后面的引号内容则是所要引入组件的文件地址。然后，在`export default`中与`data`同级的`components`里注册组件。这个组件将会以其注册时的名字作为模板中的标签名。最后，我们在`<template>`中以标签的形式将组件显示出来。代码示例如下：

```vue
<template>
  <!-- 第三步：显示组件 -->
  <MyComponent/>
</template>
 
<script>
  //第一步：引入组件
  import MyComponent from "./components/MyComponent.vue"
  //第二步：注册组件
  export default {
    components: {
      MyComponent
    }
  }
</script>
```

**注意事项：**

1.这里的`<MyComponent/>`我们也可以写成`<my-component/>`，两者的关系是等价的。因为 Vue 支持将模板中使用 `kebab-case` 的标签解析为使用 `PascalCase` 注册的组件。

2.同一个组件可以被我们使用多次，但要注意是，每一个组件都在维护着各自的状态，是不同的 count，因为每当我们使用一个组件，就创建了一个新的实例，具体理解有点类似于我们在 c++ 中学到的对象。

### 二、组件嵌套关系

在实际应用中，组件常常被我们组织成层层嵌套的树状结构：

![img](https://i-blog.csdnimg.cn/blog_migrate/f834aed42551ad7c2ca062e7d43dfe0b.png)

上方这张图来自于官方文档，就让我们以这张图所提供的嵌套方式为例，进行页面创建：

**App.vue:**

```vue
<template>
  <Header/>
  <Main/>
  <Aside/>
</template>
 
<script>
  import Header from "./pages/Header.vue"
  import Main from "./pages/Main.vue"
  import Aside from "./pages/Aside.vue"
  export default {
    components: {
      Header,
      Main,
      Aside
    }
  }
</script>
```

**Main.vue:**

```vue
<template>
    <div class = "main">
        <h3>Main</h3>
        <Article/>
        <Article/>
    </div>
</template>
 
<script>
    import Article from "./Article.vue"
    export default {
        components: {
            Article
        }
    }
</script>
 
<style scoped>
    .main {
        float: left;
        width: 70%;
        height: 400px;
        border: 5px solid DimGray;
        box-sizing: border-box;
        border-top: 0;
        background-color:lightgray;
    }
</style>
```

**Article.vue:**

```vue
<template>
    <h3>Article</h3>
</template>
 
<style scoped>
    h3 {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        line-height: 100px;
        box-sizing: border-box;
        margin-top: 50px;
        background: #999;
    }
</style>
```

**Aside.vue:**

```vue
<template>
    <div class = "aside">
        <h3>Aside</h3>
        <Item/>
        <Item/>
        <Item/>
    </div>
</template>
 
<script>
    import Item from "./Item.vue"
    export default {
        components: {
            Item
        }
    }
</script>
 
<style>
    .aside {
        float: right;
        width: 30%;
        height: 400px;
        border: 5px solid DimGray;
        box-sizing: border-box;
        border-left: 0;
        border-top: 0;
        background-color:lightgray;
    }
</style>
```

**Item.vue:**

```vue
<template>
    <h3>Item</h3>
</template>
 
<style scoped>
    h3 {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        line-height: 100px;
        box-sizing: border-box;
        margin-top: 10px;
        background-color: #999;
    }
</style>
```

这里我们单独建立了一个 pages 网页用于存储各个组件，读者可根据实际情况自行调整文件路径。最后我们就能得到如下的网页了，怎么样，是不是和官方文档的图片很像呢？记得要仔细观察各个组件之间的嵌套逻辑以及嵌套实现方式哦！

![img](https://i-blog.csdnimg.cn/blog_migrate/e9c21049f7f53ce7f710bfaef6ace455.png)

### 三、组件注册方式

一个 Vue 组件在被我们使用前需要先被“注册”，这样 Vue 才能在渲染模版的时候找到其对应的实现，组件的注册方式有两种：全局注册和局部注册。

#### 1.全局注册

一般情况下，我们使用 Vue 应用实例的`.component()`方法来让组件全局可用，打开我们项目中的`main.js`文件，我们会发现它存在下面这样的默认内容：

```js
import { createApp } from 'vue'
import App from './App.vue'
 
createApp(App).mount('#app')
```

我们首先使用`import`将组件文件引入，接着将此处的`createApp(App).mount('#app')`拆分为两部分，最后在他们之间写入我们要全局注册的内容：

```js
import { createApp } from 'vue'
import App from './App.vue'
import Header from './pages/Header.vue'
 
const app = createApp(App)
//在此处写组件的注册
app.component("Header",Header)
 
app.mount('#app')
```

 这里的`app.component("Header",Header)`中第一个`"Header"`是我们为注册的组件取得变量名，即日后我们引入该组件时使用的名字，第二个`Header`则是我们要所注册的组件的名字。通过这种方式注册的组件就可以直接在全局中使用了。

`.component()`方法也可以被链式调用：

```js
app
  .component("Header", Header)
  .component("Main", Main)
  .component("Aside", Aside)
```

#### 2.局部注册

实际上，前面我们讲到的组件的引用就是采用的局部注册方式。对于局部注册，我们要注意的是，**局部注册的组件在其后代组件中不可用**，只能使用于当前组件。与局部注册相比，全局注册似乎有着天然的优势，那么我们为什么又要选择局部注册呢？前者的劣势又是什么呢？

#### 3.全局注册的劣势

1. 全局注册，但没有被使用的组件无法在生产打包时被自动移除（也叫做 tree-shaking），仍然会出现在打包后的 JS 文件中。
2. 全局注册在大型项目中使项目的依赖关系变得不这么明确，在父组件中使用子组件时，不容易定位子组件的实现，和使用过多的全局变量一样，可能会影响应用长期的可维护性。

与之相对应的也就是局部注册的优势啦，这里就不再一一赘述。 

### 四、组件传递数据（Props）

#### 1.Props 传递静态数据

我们先创建出有着嵌套关系的Parent和Child文件，然后结合示例代码详细讲解数据传递的过程：

**Parent.vue:**

```vue
<template>
    <h3>Parent</h3>
    <Child test = "雷希拉姆"/>
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

 **Child.vue:**

```vue
<template>
    <h3>Child</h3>
    <p>{{ test }}</p>
</template>
 
<script>
    export default {
        props: ["test"]
    }
</script>
```

首先我们在Parent文件的`<Child/>`标签中以`key = value`的形式写下我们想要传递给 Child 的数据，然后在 Child 的`props`中接收数据，注意这里要以数组的形式，且`key`要加双引号。之后，我们就可以在 Child 文件中正常使用该数据了。

实际上`props`能够传递任何数据类型，包括数字，字符串，数组，对象等。

**props 也支持同时传递多个数据：**

```vue
Parent文件：
    <Child test1 = "雷希拉姆" test2 = "捷克罗姆"/>
 
Child文件：
    props: ["test1", "test2"]
```

#### 2.props 传递动态数据

```vue
<template>
    <h3>Parent</h3>
    <Child :test = "message"/>
</template>
 
<script>
    import Child from "./Child.vue"
    export default {
        data() {
            return {
                message: "雷希拉姆"
            }
        },
        components: {
            Child
        }
    }
</script>
```


要注意`Props`传递动态数据时，我们需要借助`v-bind`指令，这里我们采用的是其简写形式。

#### 3.使用一个对象绑定多个 prop

如果我们想要将一个对象的所有属性都当作 props 传入，可以选择使用没有参数的`v-bind`，即只使用`v-bind`而非`: prop-name`。示例如下：

存在对象：

```vue
  pika: {
    id: 25,
    color: yellow
  }
```
我们可以使用以下方式为其每一个属性都绑定一个`prop`

```vue
<Child v-bind = "pika" />
```

这种实现方式实际上等价于：

```vue
<Child :id = "pika.id" :title = "pika.title" />
```

#### 4. 单向数据流

所有的props都遵循着单向绑定的原则，即只能父组件给子组件传递数据，不能反其道而行之。这样`props`因父组件的更新而变化，自然地就会将新的状态向下流往子组件，而不会逆向传递，避免了子组件意外修改父组件的状态。（当然，我们其实还是有方法实现逆向传递数据的，这点我们后面会讲到）

其次，`pros`是只读的，这也就意味着我们不能在子组件中去更改一个`prop`，否则 Vue 会在程序台上报错。

#### 5.Prop 校验

Vue 组件可以更加细致地声明对传入的`props`的校验要求：

```vue
<template>
    <h3>Child</h3>
    <p>{{ test }}</p>
</template>
 
<script>
    export default {
        props: {
            test: {
                type: Number
            }
        }
    }
</script>
```

 上面这段代码的含义就是要求接受到的`test`的数据类型为`Number`（注意此处的 N 要大写，否则会显示`number`未定义），如果不是`Number`类型，控制台就会出现警告。 

![img](https://i-blog.csdnimg.cn/blog_migrate/b15105112fc24871fe0c6ddadf6d4254.png)

 同样的`Prop`还能校验`String`，`Array`，`Object`等数据类型，此外还能兼容多个数据类型，例如：

```js
type: [Number, String, Array]
```

 表示允许接受的数据类型为这三种的任何一种。

#### 6.默认值

有时候我们在子组件中选择接收某个数据，但是实际上父组件并没有传递该数据，这时网页上将会直接不显示该数据，而当网页的内容多起来时我们往往很难注意到这一点。想要解决这个问题我们可以通过设置默认值的方式来填补这块空白，以便我们观察或达成格式的统一。

```vue
<template>
    <h3>Child</h3>
    <p>{{ test }}</p>
</template>
 
<script>
    export default {
        props: {
            test: {
                type: [Number, String, Array],
                default: "未接收"
            }
        }
    }
</script>
```

此时，我们取消父组件的数据传递，我们发现，原本应该出现“雷希拉姆”（原`test`数据内容）的地方变成了我们设置的默认值：未接收。

需要注意的是，如果默认值是字符串或者数字，我们可以直接写在`default:` 的后面，但如果是数组或对象，我们必须通过函数返回值的形式来设置默认值。例如：

```vue
default() {
    return ["雷希拉姆", "捷克罗姆"]
}
```

#### 7.必选项

在上一小节中我们了解到当子组件没有接受到来自父组件的数据时，会选择直接不在页面中显示对应模块，我们可以通过设置必选项的方式来让某个数据必须被接收到，否则控制台就会弹出警告。具体实现方式如下：

```vue
    export default {
        props: {
            test: {
                type: [Number, String, Array],
                required: true
            }
        }
    }
```

![img](https://i-blog.csdnimg.cn/blog_migrate/cc9c3b3227cc1ed676e373d7666db17e.png)
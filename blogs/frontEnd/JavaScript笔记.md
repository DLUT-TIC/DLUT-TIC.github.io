---
title: 前端
date: 2024/9/15
categories:
 - fe
author: Q
tags:
 - 手写
 - javascript
---
# 简介：

##   JS简介：

###     什么是JS：

   JS编程语言写出来的程序被称为**脚本** 它们可以被直接写在网页的 HTML 中，在页面加载的时候自动执行。脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。


**浏览器嵌入了一种JavaScript引擎（在这里我们把JavaScript引擎称为****JS****引擎，又称为：JavaScript****虚拟机****），而JS引擎它可以把JS代码解析成浏览器能够识别的代码，因此JS代码可以在含有JS引擎的浏览器中运行。**

不同的JS引擎有不同的代号，例如：

Chrome 和 Opera 中的 JS引擎------V8引擎

**引擎是如何工作的？**

引擎很复杂，但是基本原理很简单。

1. 引擎（如果是浏览器，则引擎被嵌入在其中）读取（“解析”）脚本。
    
2. 然后，引擎将脚本转化（“编译”）为机器语言。
    
3. 然后，机器代码快速地执行。
    

###     JS功能：

    现代的 JavaScript 是一种“安全的”编程语言。**它不提供对****内存****或** **CPU** **的底层访问**。JavaScript 的能力很大程度上取决于它运行的环境。例如，[Node.js](https://wikipedia.org/wiki/Node.js) 支持允许 JavaScript 读取/写入任意文件，执行网络请求等的函数。**浏览器中的 JavaScript 可以做与网页操作、用户交互和 Web 服务器相关的所有事情。**

1. 浏览器中的 JavaScript 可以做下面这些事：
    

- 在网页中添加新的 HTML，修改网页已有内容和网页的样式。
    
- 响应用户的行为，响应鼠标的点击，指针的移动，按键的按动。
    
- 向远程服务器发送网络请求，下载和上传文件（所谓的 [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) 和 [COMET](https://en.wikipedia.org/wiki/Comet_(programming)) 技术）。
    
- 获取或设置 cookie，向访问者提出问题或发送消息。
    
- 记住客户端的数据（“本地存储”）。
    
    - 为了用户的（信息）安全，在浏览器中的 JavaScript 的能力是受限的。目的是防止恶意网页获取用户私人信息或损害用户数据。
        
- 网页中的 JavaScript 不能读、写、复制和执行硬盘上的任意文件。它没有直接访问操作系统的功能。
    
- 不同的标签页/窗口之间通常互不了解。有时候，也会有一些联系，例如一个标签页通过 JavaScript 打开的另外一个标签页。但即使在这种情况下，如果两个标签页打开的不是同一个网站（域名、协议或者端口任一不相同的网站），它们都不能相互通信。
    
- JavaScript 可以轻松地通过互联网与当前页面所在的服务器进行通信。但是从其他网站/域的服务器中接收数据的能力被削弱了。尽管可以，但是需要来自远程服务器的明确协议（在 HTTP header 中）。这也是为了用户的信息安全。
    

- [Dart](https://www.dartlang.org/) 是一门独立的语言。它拥有自己的引擎，该引擎可以在非浏览器环境中运行（例如手机应用），它也可以被编译成 JavaScript。由 Google 开发。
    
- [Kotlin](https://kotlinlang.org/docs/reference/js-overview.html) 是一个现代、简洁且安全的编程语言，编写出的应用程序可以在浏览器和 Node 环境中运行。
    

这些语言在浏览器中执行之前，都会被 **编译**（转化）成 JavaScript。

# JS基础知识：

##   JS代码位置：

- 对于服务器端环境（如 Node.js），你只需要使用诸如 `"node ---.js"` 的命令行来执行它。
    
- 客户端环境中，使用 `<script>` 标签将 JavaScript 程序插入到 HTML 文档的任何位置。
    

```JavaScript
<!DOCTYPE HTML>
<html>

<body>

  <p>script 标签之前...</p>

  <script>alert('Hello, world!');</script>

  <p>...script 标签之后</p>

</body>

</html>
```

- 如果你有大量的 JavaScript 代码，我们可以将它放入一个单独的文件。脚本文件可以通过 `src` 特性（attribute）添加到 HTML 文件中。
    

```JavaScript
<script src="/path/to/script.js"></script>
```

    一般来说，只有最简单的脚本才嵌入到 HTML 中。更复杂的脚本存放在单独的文件中。

    使用独立文件的好处是浏览器会下载它，然后将它保存到浏览器的 [缓存](https://en.wikipedia.org/wiki/Web_cache) 中。

    之后，其他页面想要相同的脚本就会从缓存中获取，而不是下载它。所以文件实际上只会下载一次。

    这可以节省流量，并使得页面（加载）更快。

##   JS语法特殊之处：

###     变量：

我们可以使用 `var`、`let` 或 `const` 声明变量来存储数据。

- `let` — 现代的变量声明方式。
    
- `var` — 老旧的变量声明方式。一般情况下，我们不会再使用它。但是，我们会在 [老旧的 "var"](https://zh.javascript.info/var) 章节介绍 `var` 和 `let` 的微妙差别，以防你需要它们。
    
- `const` — 类似于 `let`，但是变量的值无法被修改。
    

变量应当以一种容易理解变量内部是什么的方式进行命名。

JavaScript被认为是一种动态类型语言，这意味着变量的类型是在运行时确定的，而不是在编译时。这使得JavaScript非常灵活，可以在程序执行过程中根据需要动态地改变变量的类型。

例如，同一个变量可以在不同的语句中被赋予不同类型的值，而不会出现编译时的类型错误

  

###     数据类型：

    JavaScript 中有八种基本的数据类型。

1. 七种原始数据类型（基本数据类型）：
    
    1. `number` 用于任何类型的数字：整数或浮点数，在 `±(2(53)-1)` 范围内的整数。
        
    2. `bigint` 用于任意长度的整数。
        
    3. `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
        
    4. `boolean` 用于 `true` 和 `false`。
        
    5. `null` 用于未知的值 —— 只有一个 `null` 值的独立类型。
        
    6. `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
        
    7. `symbol` 用于唯一的标识符。
        
2. 以及一种非原始数据类型（复杂数据类型）：
    
    1. `object` 用于更复杂的数据结构。
        

    我们可以通过 `typeof` 运算符查看存储在变量中的数据类型。

- 通常用作 `typeof x`，但 `typeof(x)` 也可行。
    
- 以字符串的形式返回类型名称，例如 `"string"`。
    
- `typeof null` 会返回 `"object"` —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 `object`
    

###     三个交互函数：

    **`alert`**显示信息。

    **`prompt`**显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 `null`。

    **`confirm`**显示信息等待用户点击确定或取消。点击确定返回 `true`，点击取消或按下 Esc 键返回 `false`。

    这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除

> 上述所有方法共有两个限制：
> 
> 1. 模态窗口的确切位置由浏览器决定。通常在页面中心。
>     
> 2. 窗口的确切外观也取决于浏览器。我们不能修改它。
>     

###    类型转换：

  有三种常用的类型转换：转换为 string 类型、转换为 number 类型和转换为 boolean 类型。

  **字符串转换** —— 转换发生在输出内容的时候，也可以通过 `String(value)` 进行显式转换。原始类型值的 string 类型转换通常是很明显的。

  **数字型转换** —— 转换发生在进行算术操作时，也可以通过 `Number(value)` 进行显式转换。

  数字型转换遵循以下规则：

|   |   |
|---|---|
|值|变成……|
|undefined|NaN|
|null|0|
|true / false|1 / 0|
|string|“按原样读取”字符串，两端的空白字符（空格、换行符 \n、制表符 \t 等）会被忽略。空字符串变成 0。转换出错则输出 NaN。|

  **布尔型转换** —— 转换发生在进行逻辑操作时，也可以通过 `Boolean(value)` 进行显式转换。

  布尔型转换遵循以下规则：

|   |   |
|---|---|
|值|变成……|
|0, null, undefined, NaN, ""|FALSE|
|其他值|TRUE|

- 对 `undefined` 进行数字型转换时，输出结果为 `NaN`，而非 `0`。
    
- 对 `"0"` 和只有空格的字符串（比如：`" "`）进行布尔型转换时，输出结果为 `true`。
    

###   值的比较：

- 比较运算符始终返回布尔值。
    
- 字符串的比较，会按照“词典”顺序逐字符地比较大小。
    
- 当对不同类型的值进行比较时，它们会先被转化为数字（不包括严格相等检查）再进行比较。
    
- 在非严格相等 `==` 下，`null` 和 `undefined` 相等且各自不等于任何其他的值。
    
- 在使用 `>` 或 `<` 进行比较时，需要注意变量可能为 `null/undefined` 的情况。比较好的方法是单独检查变量是否等于 `null/undefined`。
    

1. **严格相等（===）**：
    
    1. 使用严格相等运算符时（===），比较的两个操作数不仅要求值相等，还要求它们的类型也必须相同。如果类型不同，即使值相同，也会被视为不相等[[2](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)].
        
2. **非严格相等（==）**：
    
    1. 非严格相等运算符（==）在比较前会尝试将操作数转换为相同的类型，然后再进行比较。这种转换可能会导致一些意外的结果，因此在日常开发中推荐尽可能使用严格相等（===）来避免类型转换带来的问题[[4](https://juejin.cn/post/7135007326607507464)][[6](https://segmentfault.com/a/1190000004208564)].
        

在实际应用中，建议尽量使用严格相等（===），因为它可以提供更明确、可预测的比较结果，避免了类型转换可能引发的错误。

### 函数：

- 函数是值。它们可以在代码的任何地方被分配，复制或声明。
    

```JavaScript
function ask(question, yes, no) {  //yes和no都是函数，以值的形式出现
  if (confirm(question)) yes()
  else no();
}


ask("Do you agree?",function() { alert("You agreed."); },function() { alert("You canceled the execution."); });
//这两个函数没有名字，所以叫 匿名函数。这样的函数在 ask 外无法访问（因为没有对它们分配变量），不过这正是我们想要的。


// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
//ask 的两个参数值 showOk 和 showCancel 可以被称为 回调函数 或简称 回调。主要思想是我们传递一个函数，并期望在稍后必要时将其“回调”。在我们的例子中，showOk 是回答 “yes” 的回调，showCancel 是回答 “no” 的回调。
```

- 如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
    

```JavaScript
function sayHi() {
  alert( "Hello" );
}
```

- 如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
    

```JavaScript
let sayHi = function() {
  alert( "Hello" );
};
```

- 在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
    
- 函数表达式在执行流程到达时创建。
    

在大多数情况下，当我们需要声明一个函数时，最好使用函数声明，因为函数在被声明之前也是可见的。这使我们在代码组织方面更具灵活性，通常也会使得代码可读性更高。

所以，仅当函数声明不适合对应的任务时，才应使用函数表达式。

### 箭头函数：

箭头函数对于简单的操作很方便，特别是对于单行的函数。它具体有两种形式：

1. 不带花括号：`(...args) => expression` —— 右侧是一个表达式：函数计算表达式并返回其结果。如果只有一个参数，则可以省略括号，例如 `n => n*2`。
    

```JavaScript
let func = (arg1, arg2, ..., argN) => expression;
```

2. 带花括号：`(...args) => { body }` —— 花括号允许我们在函数中编写多个语句，但是我们需要显式地 `return` 来返回一些内容。
    

```JavaScript
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};
```

  

## 对象：

###   对象基础：

  对象是具有一些特殊特性的关联数组。它们存储属性（键值对），其中：

- 属性的键必须是字符串或者 symbol（通常是字符串）。
    
- 值可以是任何类型。
    

  我们可以用下面的方法访问属性：

- 点符号: `obj.property`。
    
- 方括号 `obj["property"]`，方括号允许从变量中获取键，例如 `obj[varWithKey]`。
    

  其他操作：

- 删除属性：`delete obj.prop`。
    
- 检查是否存在给定键的属性：`"key" in obj`。
    
- 遍历对象：`for(let key in obj)` 循环。
    

整数属性会被进行排序，其他属性则按照创建的顺序显示。

```JavaScript
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {alert(code); // 1, 41, 44, 49}


//我们可以使用非整数属性名来 欺骗 程序。只需要给每个键名加一个加号 "+" 前缀就行了。
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```

```JavaScript
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // 增加一个

// 非整数属性是按照创建的顺序来排列的
for (let prop in user) {
  alert( prop ); // name, surname, age
}
```

  

  

### 对象的引用以及复制：

  对象通过引用被赋值和拷贝。换句话说，一个变量存储的不是“对象的值”，而是一个对值的“引用”（内存地址）。因此，拷贝此类变量或将其作为函数参数传递时，所拷贝的是引用，而不是对象本身。所有通过被拷贝的引用的操作（如添加、删除属性）都作用在同一个对象上。

```JavaScript
// a 和 b 两个变量都引用同一个对象，所以它们相等
let a = {};
let b = a; // 复制引用

alert( a == b ); // true，都引用同一对象
alert( a === b ); // true

//两个独立的对象则并不相等，即使它们看起来很像（都为空）：
let a = {};
let b = {}; // 两个独立的对象

alert( a == b ); // false

//对于类似 obj1 > obj2 的比较，或者跟一个原始类型值的比较 obj == 5，对象都会被转换为原始值。我们很快就会学到对象是如何转换的，但是说实话，很少需要进行这样的比较 —— 通常是在编程错误的时候才会出现这种情况。
```

  

为了创建“真正的拷贝”（一个克隆），我们可以使用 `Object.assign` 来做所谓的“浅拷贝”（嵌套对象被通过引用进行拷贝）或者使用“深拷贝”函数，例如 [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep)。

```JavaScript
Object.assign(dest, [src1, src2, src3...])
```

- 第一个参数 `dest` 是指目标对象。
    
- 更后面的参数 `src1, ..., srcN`（可按需传递多个参数）是源对象。
    
- 该方法将所有源对象的属性拷贝到目标对象 `dest` 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。
    
- 调用结果返回 `dest`。
    

例如，我们可以用它来合并多个对象：

```JavaScript
let user = { name: "John" };let permissions1 = { canView: true };let permissions2 = { canEdit: true };// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);// 现在 user = { name: "John", canView: true, canEdit: true }

let user = {
  name: "John",
  age: 30
};
let clone = Object.assign({}, user);
```

```JavaScript
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```

  

### 垃圾回收：

- 垃圾回收是自动完成的，我们不能强制执行或是阻止执行。
    
- 当对象是可达状态时，它一定是存在于内存中的。
    

JavaScript 中主要的内存管理概念是 **可达性**。

简而言之，“可达”值是那些以某种方式可访问或可用的值。它们被存储在内存中。

- 被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都不可达，正如我们在上面的例子中看到的那样。
    

  

### 对象方法，“this”

- 存储在对象属性中的函数被称为“方法”。
    
- 方法允许对象进行像 `object.doSomething()` 这样的“操作”。
    
- 方法可以将对象引用为 `this`。
    

`this` 的值是在程序运行时得到的。

- 一个函数在声明时，可能就使用了 `this`，但是这个 `this` 只有在函数被调用时才会有值。
    
- 可以在对象之间复制函数。
    
- 以“方法”的语法调用函数时：`object.method()`，调用过程中的 `this` 值是 `object`。
    

请注意箭头函数有些特别：它们没有 `this`。在箭头函数内部访问到的 `this` 都是从外部获取的。

```JavaScript
let obj = {
  count: 0,
  start: function() {
    setInterval(() => {
      this.count++; // 此处的 this 指向 obj 对象，因为箭头函数继承了 start 方法的 this
      console.log(this.count);
    }, 1000);
  }
};

obj.start();
```

  

### 构造器和操作符“new”

- 构造函数，或简称构造器，就是常规函数，但大家对于构造器有个共同的约定，就是其命名首字母要大写。
    
- 构造函数只能使用 `new` 来调用。这样的调用意味着在开始时创建了空的 `this`，并在最后返回填充了值的 `this`。
    

当一个函数被使用 `new` 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 `this`。
    
2. 函数体执行。通常它会修改 `this`，为其添加新的属性。
    
3. 返回 `this` 的值。
    

```JavaScript
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```

  

### symbol类型：

  根据规范，只有两种原始类型可以用作对象属性键：

- 字符串类型
    
- symbol 类型
    

  否则，如果使用另一种类型，例如数字，它会被自动转换为字符串。所以 `obj[1]` 与 `obj["1"]` 相同，而 `obj[true]` 与 `obj["true"]` 相同。

  

#### Symbol

“symbol” 值表示唯一的标识符。创建时，我们可以给 symbol 一个描述（也称为 symbol 名），这在代码调试时非常有用：

```JavaScript
// id 是描述为 "id" 的 symbol
let id = Symbol("id");
```

symbol 保证是唯一的。即使我们创建了许多具有相同描述的 symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。

```JavaScript
//这里有两个描述相同的 symbol —— 它们不相等：
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
alert(id1 === id2); // false
```

**symbol 不会被自动转换为字符串：**

JavaScript 中的大多数值都支持字符串的隐式转换。例如，我们可以 `alert` 任何值，都可以生效。symbol 比较特殊，它不会被自动转换。

例如，这个 `alert` 将会提示出错：

```JavaScript
let id = Symbol("id");alert(id); // 类型错误：无法将 symbol 值转换为字符串。
```

这是一种防止混乱的“语言保护”，因为字符串和 symbol 有本质上的不同，不应该意外地将它们转换成另一个。

如果我们真的想显示一个 symbol，我们需要在它上面调用 `.toString()`，如下所示：

```JavaScript
let id = Symbol("id");alert(id.toString()); // Symbol(id)，现在它有效了
```

或者获取 `symbol.description` 属性，只显示描述（description）：

```JavaScript
let id = Symbol("id");alert(id.description); // id
```

#### “隐藏属性”

symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。

例如，如果我们使用的是属于第三方代码的 `user` 对象，我们想要给它们添加一些标识符。

我们可以给它们使用 symbol 键：

```JavaScript
let user = { // 属于另一个代码name: "John"};let id = Symbol("id");
user[id] = 1;
alert( user[id] ); // 我们可以使用 symbol 作为键来访问数据
```

使用 `Symbol("id")` 作为键，比起用字符串 `"id"` 来有什么好处呢？

由于 `user` 对象属于另一个代码库，所以向它们添加字段是不安全的，因为我们可能会影响代码库中的其他预定义行为。但 symbol 属性不会被意外访问到。第三方代码不会知道新定义的 symbol，因此将 symbol 添加到 `user` 对象是安全的。

另外，假设另一个脚本希望在 `user` 中有自己的标识符，以实现自己的目的。

那么，该脚本可以创建自己的 `Symbol("id")`，像这样：

```JavaScript
let user = {
  name: "John"
};

let id1 = Symbol("id");
let id2 = Symbol("id");

user[id1] = 1;
user[id2] = "Their id value";

alert(user[id1]); // 1
alert(user[id2]); // "Their id value"
```

#### 全局symbol

正如我们所看到的，通常所有的 symbol 都是不同的，即使它们有相同的名字。但有时我们想要名字相同的 symbol 具有相同的实体。例如，应用程序的不同部分想要访问的 symbol `"id"` 指的是完全相同的属性。

##### `Symbol.for(key)`

为了实现这一点，这里有一个 **全局 symbol 注册表**。我们可以在其中创建 symbol 并在稍后访问它们，它可以确保每次访问相同名字的 symbol 时，返回的都是相同的 symbol。

要从注册表中读取（不存在则创建）symbol，请使用 `Symbol.for(key)`。

该调用会检查全局注册表，如果有一个描述为 `key` 的 symbol，则返回该 symbol，否则将创建一个新 symbol（`Symbol(key)`），并通过给定的 `key` 将其存储在注册表中。

例如：

```JavaScript
// 从全局注册表中读取
let id = Symbol.for("id"); 
// 如果该 symbol 不存在，则创建它
// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");
// 相同的 symbol
alert( id === idAgain );// true
alert( id == idAgain );// true
```

注册表内的 symbol 被称为 **全局 symbol**。如果我们想要一个应用程序范围内的 symbol，可以在代码中随处访问 —— 这就是它们的用途。

#####   `Symbol.keyFor(sym)`

  我们已经看到，对于全局 symbol，`Symbol.for(key)` 按名字返回一个 symbol。相反，通过全局 symbol 返回一个名字，我们可以使用 `Symbol.keyFor(sym)`：

  例如：

```JavaScript
// 通过 name 获取 symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// 通过 symbol 获取 name
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```

  `Symbol.keyFor` 内部使用全局 symbol 注册表来查找 symbol 的键。所以它不适用于非全局 symbol。如果 symbol 不是全局的，它将无法找到它并返回 `undefined`。

  但是，所有 symbol 都具有 `description` 属性。

  例如：

```JavaScript
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
alert( Symbol.keyFor(globalSymbol) );
 // name，全局 symbol
 alert( Symbol.keyFor(localSymbol) );  // undefined，非全局
 alert( localSymbol.description ); // name
```

  

## 对象———原始值转换

###   转换规则：

1. 没有转换为布尔值。所有的对象在布尔上下文（context）中均为 `true`，就这么简单。只有字符串和数字转换。
    
2. 数字转换发生在对象相减或应用数学函数时。例如，`Date` 对象（将在 [日期和时间](https://zh.javascript.info/date) 一章中介绍）可以相减，`date1 - date2` 的结果是两个日期之间的差值。
    
3. 至于字符串转换 —— 通常发生在我们像 `alert(obj)` 这样输出一个对象和类似的上下文中。
    

  我们可以使用特殊的对象方法，自己实现字符串和数字的转换。

###   hint：

  当我们对期望一个字符串的对象执行操作时，如 “alert”，对象到字符串的转换。**"string"**

```JavaScript
// 输出
alert(obj);
// 将对象作为属性键
anotherObj[obj] = 123;
```

    当我们进行数学运算时，对象到数字的转换。**"number"**

```JavaScript
// 显式转换
let num = Number(obj);
// 数学运算（除了二元加法）
let n = +obj; // 一元加法
let delta = date1 - date2;
// 小于/大于的比较
let greater = user1 > user2;
```

  当运算符“不确定”期望值的类型时（在少数情况下发生）。**"default"**

```JavaScript
// 二元加法使用默认 hint
let total = obj1 + obj2;

// obj == number 使用默认 hint
if (user == 1) { ... };
```

    **为了进行转换，JavaScript 尝试查找并调用三个对象方法：**

1. 调用 `obj[Symbol.toPrimitive](hint)` —— 带有 symbol 键 `Symbol.toPrimitive`（系统 symbol）的方法，如果这个方法存在的话，
    
2. 否则，如果 hint 是 `"string"` —— 尝试调用 `obj.toString()` 或 `obj.valueOf()`，无论哪个存在。
    
3. 否则，如果 hint 是 `"number"` 或 `"default"` —— 尝试调用 `obj.valueOf()` 或 `obj.toString()`，无论哪个存在。
    

###   Symbol.toPrimitive

  有一个名为 `Symbol.toPrimitive` 的内建 symbol，它被用来给转换方法命名，像这样：

```JavaScript
obj[Symbol.toPrimitive] = function(hint) {
  // 这里是将此对象转换为原始值的代码
  // 它必须返回一个原始值
  // hint = "string"、"number" 或 "default" 中的一个
}
```

  如果 `Symbol.toPrimitive` 方法存在，则它会被用于所有 hint，无需更多其他方法。

```JavaScript
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// 转换演示：
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

  从代码中我们可以看到，根据转换的不同，`user` 变成一个自描述字符串或者一个金额。`user[Symbol.toPrimitive]` 方法处理了所有的转换情况。

###   toString/valueOf

  如果没有 `Symbol.toPrimitive`，那么 JavaScript 将尝试寻找 `toString` 和 `valueOf` 方法：

- 对于 `"string"` hint：调用 `toString` 方法，如果它不存在，则调用 `valueOf` 方法（因此，对于字符串转换，优先调用 `toString`）。
    
- 对于其他 hint：调用 `valueOf` 方法，如果它不存在，则调用 `toString` 方法（因此，对于数学运算，优先调用 `valueOf` 方法）。
    

```JavaScript
let user = {
  name: "John",
  money: 1000,

  // 对于 hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // 对于 hint="number" 或 "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
```

```JavaScript
//通常我们希望有一个“全能”的地方来处理所有原始转换。在这种情况下，我们可以只实现 toString，就像这样：
let user = {
  name: "John",

  toString() {
    return this.name;
  }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500
//如果没有 Symbol.toPrimitive 和 valueOf，toString 将处理所有原始转换。
```
---
title: Dart语言入门
date: 2024/9/16
author: SimonWuzy
---

### Dart简介

- Dart是谷歌开发的计算机语言，它是开源的，诞生于2011年10月10日。Dart是一款高效、简洁、已通过实战检验的语言，能够应对现代应用程序开发的挑战，并大大加强和精简了类型系统，清理了语法，并重建了大部分开发工具链，使得移动和Web开发更愉快高效。

- Dart有着这样一些特性，被Flutter团队看重：
	- AOT（Ahead Of Time）编译，编译成快速、可预测的本地代码，使得Flutter变得更快且几乎所有组件可定制
	- 也可以JIT（Just In Time）编译，开发周期非常短，支持了Flutter流行的亚秒级有状态热重载
	- 可以在没有锁的情况下进行对象分配与垃圾回收
	- 不需要单独的声明式布局语言或单独的可视化界面构建器，因为其声明式编程易读且可视化，Flutter容易提供高级工具使布局更简单
	- 易于学习，具有静态语言和动态语言用户都熟悉的特性
- 这些特性并不是Dart所独有的，但Dart将它们组合的恰到好处

- 在Dart里，有这样一些**重要特性**：
	- 所有东西都是对象，包括变量、数字、函数等，所有的对象都是类的实例，且继承自内置的Object类
	- 弱数据类型，支持动态类型dynamic  var 
	- Dart在运行前解析，指定数据类型和编译时常量能提高运行速度
	- 统一的程序入main()
	- 没有public、protected与private，私有特性通过在变量或函数加上下划线表示
	- 支持anync/await异步处理

### 变量
- 声明变量使用var关键字，**变量保存的是对象的引用**，也可以使用对象类型和动态类型（dynamic）来声明。未初始化的变量默认值是 null。即使变量是数字类型默认值也是 null，因为在 Dart 中一切都是对象。
```dart
	var nameA = 'jmmmjA';
	String nameB = 'jmmmjB';
	dynamic nameC = 'jmmmjC';
	
	int a;
	assert(a == null);
```
- 且在声明局部变量时，官方的代码风格建议使用var来声明。
	- 声明常量使用final或const关键字，其区别是：const用于编译时常量，其实际上是隐式的final类型，还可以用来创建常量值；而final声明的常量可以且仅可以被赋值一次。
	- 数字类型字面量是编译时常量。 在算术表达式中，只要参与计算的因子是编译时常量， 那么算术表达式的结果也是编译时常量。
```dart
	final a = 1;	
	final int b = 2;
	//这两种都是可以的
```

### 基本数据类型

- Dart内建类型包括：Number、String、Boolean、List、Map

- Number：包括int与double，整数值不大于64位， 具体取决于平台。 在 Dart VM 上， 值的范围从 -263 到 263 - 1。Dart 被编译为 JavaScript 时，使用 [JavaScript numbers,](https://stackoverflow.com/questions/2802957/number-of-bits-in-javascript-numbers/2803010#2803010) 值的范围从 -253 到 253 - 1；double是64位（双精度）浮点数，依据 IEEE 754 标准。

- String：Dart 字符串是一组 UTF-16 单元序列。 字符串通过单引号或者双引号创建，可以通过 `${`_`expression`_`}` 的方式内嵌表达式。 如果表达式是一个标识符，则 {} 可以省略。 在 Dart 中通过调用就对象的 `toString()` 方法来得到对象相应的字符串。在字符串中，如果两个字符串包含了相同的编码序列，那么这两个字符串相等，即可以用 == 运算符比较两个字符串是否相等。字符串直接可以用+运算符。

- Boolean：Dart 使用 `bool` 类型表示布尔值。 Dart 只有字面量 `true` and `false` 是布尔类型， 这两个对象都是编译时常量；Dart 支持类型安全，意味着不能使用 `if (nonbooleanValue)` 或者 `assert (nonbooleanValue)`。 而是应该像下面这样，明确的进行值检查：
```dart
	// 检查空字符串。
	var fullName = '';
	assert(fullName.isEmpty);
	
	// 检查 0 值。
	var hitPoints = 0;
	assert(hitPoints <= 0);
	
	// 检查 null 值。
	var unicorn;
	assert(unicorn == null);
	
	// 检查 NaN 。
	var iMeantToDoThis = 0 / 0;
	assert(iMeantToDoThis.isNaN);
```
- List：表示数组，在 Dart 中的 _Array_ 就是 List对象， 通常称之为 _List_ 。List 类型包含了很多 List 的操作函数。其字面量用`[]`表示。

- Map：用于关联key/value，其字面量用`{key:value}`表示，且{}默认表示Map。

- Set：表示集合，在Dart2.2中引入，其字面量用`{}`表示。

- Rune：Rune 用来表示字符串中的 UTF-32 编码字符。由于 Dart 字符串是一系列 UTF-16 编码单元， 因此要在字符串中表示32位 Unicode 值需要特殊语法支持。

- Symbol：一个 Symbol 对象表示 Dart 程序中声明的运算符或者标识符。 你也许永远都不需要使用 Symbol ，但要按名称引用标识符的 API 时， Symbol 就非常有用了。 因为代码压缩后会改变标识符的名称，但不会改变标识符的符号。 通过字面量 Symbol ，也就是标识符前面添加一个 `#` 号，来获取标识符的 Symbol 。Symbol 字面量是编译时常量。

### 函数

- 函数是对象，类型是_Function_，意味着函数也可以作为参数直接传入函数。

- Dart里的函数具有这些特性：

	- 所有应用都需要有main()
	
	- 支持箭头语法`=>{ return expr; }`或`=> expr;`
		注意函数调用两种方法和各自区别：
		onPressed: () => _login(),
		onPressed: login(),
	
	- 支持可选参数，包括命名可选参数与位置可选参数，命名可选参数是在调用函数时，可以使用指定命名参数 `paramName: value`，要求定义函数时，使用 `{param1, param2, …}` 来指定命名参数；位置可选参数则用`[]`括起来即可。
	    
	    使用 @required注释表示参数是 _required_ 性质的命名参数。
	    
	    Flutter 创建实例的表达式可能很复杂， 因此窗口小部件构造函数仅使用命名参数。 这样创建实例的表达式更易于阅读。
	    
	- 支持参数默认值，使用方式如`[int a = 1]`,这样a是可选的，且未传入时默认值为1
	
	- 支持匿名函数
	    
	    ([[_Type_] _param1_[, …]]) { _codeBlock_; };
	    
	- 所有函数都有返回值，若没有指定则默认返回null（系统会在最后添加隐式return）
	
	- 支持词法闭包
	    
	    _闭包_ 即一个函数对象，即使函数对象的调用在它原始作用域之外， 依然能够访问在它词法作用域内的变量。
	    
	    函数可以封闭定义到它作用域内的变量。 接下来的示例中， `makeAdder()` 捕获了变量 `addBy`。 无论在什么时候执行返回函数，函数都会使用捕获的 `addBy` 变量。
	    
	    用 == 比较闭包相等时，若是引用不同实例对象的同名方法会得到false
```dart
	Function makeAdder(num addBy) {
	  return (num i) => addBy + i;
	}
	
	void main() {
	  // 创建一个加 2 的函数。
	  var add2 = makeAdder(2);
	
	  // 创建一个加 4 的函数。
	  var add4 = makeAdder(4);
	
	  print(add2(3) == 5);//true
	  print(add4(3) == 7);//true
	}
```
### 运算符
- Dart定义了多种运算符，且大部分可重载，部分较为独特的运算符如下：

	- `~/` 返回一个整数值的除法
	
	- `??` a??会在a不为null时返回true，否则为false
	
	- `expr1??expr2` 如果 _expr1_ 是 non-null， 返回 _expr1_ 的值； 否则, 执行并返回 _expr2_ 的值
	
	- `as` 类型转换，且类型不符合或为null时会抛出异常
	
	- `is` 对象是相应类型时返回true
	
	- `is!` 对象不是相应类型时返回true
	
	- `??=` 左为null时赋值
	
```dart
	querySelector('#confirm') // 获取对象。
	..text = 'Confirm' // 调用成员变量。
	..classes.add('important')
	..onClick.listen((e) => window.alert('Confirmed!'));
	
	// 上面的写法和下面等价
	
	var button = querySelector('#confirm');
	button.text = 'Confirm';
	button.classes.add('important');
	button.onClick.listen((e) => window.alert('Confirmed!'));
```
### 类与泛型
#### 构造函数

- 构造函数构造函数的名字可以是 `ClassName` 或者 `ClassName.identifier`。**在没有声明构造函数的情况下， Dart 会提供一个默认的构造函数， 默认构造函数没有参数并会调用父类的无参构造函数。使用构造函数时的new关键字是可选的。
    
- 构造函数支持**初始化列表**，类似C++。
    
- 支持**重定向构造函数**。
```dart
	class Point {
	  num x, y;
	
	  Point(num x, num y) {
	    this.x = x;
	    this.y = y;
	  }
	  //根据dart语法糖可以这样写： Point(this.x, this.y);
	
	  // 命名构造函数
	  Point.origin() {
	    x = 0;
	    y = 0;
	  }
	
	  // 指向主构造函数
	  Point.alongXAxis(num x) : this(x, 0);
	}
```
- 支持[**常量构造函数**](https://www.dartcn.com/guides/language/language-tour#%e5%b8%b8%e9%87%8f%e6%9e%84%e9%80%a0%e5%87%bd%e6%95%b0)，如果该类生成的对象是固定不变的， 那么就可以把这些对象定义为编译时常量。 为此，需要定义一个 `const` 构造函数， 并且声明所有实例变量为 `final`。 使用常量构造函数构造常量时，需要在构造函数名之前加 `const` 关键字；构造两个相同的编译时常量会产生一个唯一的， 标准的实例。在 _常量上下文_ 中， 构造函数或者字面量前的 `const` 可以省略。 例如，下面代码创建了一个 const 类型的 map 对象，可以保留第一个 `const` 关键字，其余的全部省略。如果常量构造函数在常量上下文之外， 且省略了 `const` 关键字， 此时创建的对象是非常量对象。使用对象的 `runtimeType` 属性， 可以在运行时获取对象的类型， `runtimeType` 属性回返回一个 [Type](https://api.dartlang.org/stable/dart-core/Type-class.html) 对象。
```dart
	// 这里有很多的 const 关键字。
	const pointAndLine = const {
	  'point': const [const ImmutablePoint(0, 0)],
	  'line': const [const ImmutablePoint(1, 10), const ImmutablePoint(-2, 11)],
	};
	// 仅有一个 const ，由该 const 建立常量上下文。
	const pointAndLine = {
	  'point': [ImmutablePoint(0, 0)],
	  'line': [ImmutablePoint(1, 10), ImmutablePoint(-2, 11)],
	}; 
```
- 支持**工厂构造函数**：当执行构造函数并不总是创建这个类的一个新实例时，则使用 `factory` 关键字。 例如，一个工厂构造函数可能会返回一个 cache 中的实例， 或者可能返回一个子类的实例。以下示例演示了从缓存中返回对象的工厂构造函数：
```dart
	class Logger {
	  final String name;
	  bool mute = false;
	
	  // 从命名的 _ 可以知，
	  // _cache 是私有属性。
	  static final Map<String, Logger> _cache =
	      <String, Logger>{};
	
	  factory Logger(String name) {
	    if (_cache.containsKey(name)) {
	      return _cache[name];
	    } else {
	      final logger = Logger._internal(name);
	      _cache[name] = logger;
	      return logger;
	    }
	  }
	
	  Logger._internal(this.name);
	
	  void log(String msg) {
	    if (!mute) print(msg);
	  }
	}
	
	// 工厂构造函数无法访问 this。
```
- **子类不会继承父类的构造函数**。 子类不声明构造函数，那么它就只有默认构造函数 (匿名，没有参数) 。 这意味着父类的命名构造函数不会被子类继承。 如果希望使用父类中定义的命名构造函数创建子类， 就必须在子类中实现该构造函数。

- **默认情况下，子类的构造函数会自动调用父类的默认构造函数（匿名，无参数）**。 父类的构造函数在子类构造函数体开始执行的位置被调用。 如果提供了一个 [initializer list](https://www.dartcn.com/guides/language/language-tour#initializer-list) （初始化参数列表）， 则初始化参数列表在父类构造函数执行之前执行。 执行顺序如下：
	1. initializer list （初始化参数列表）
	2. superclass’s no-arg constructor （父类的无名构造函数，不能访问this）
	3. main class’s no-arg constructor （主类的无名构造函数）

- 如果父类中没有匿名无参的构造函数， 则需要手工调用父类的其他构造函数。 在当前构造函数冒号 (`:`) 之后，函数体之前，声明调用父类构造函数。
#### 方法与变量

- dart里定义非构造函数的方法默认是实例方法，定义类方法则在前加static关键字，但对于常见或广泛使用的工具和函数， 应该考虑使用顶级函数而不是静态方法。静态函数可以当做编译时常量使用。 例如，可以将静态方法作为参数传递给常量构造函数。
    
- 定义静态变量也是加static关键字
    
- Getter 和 Setter 是用于对象属性读和写的特殊方法。 回想之前的例子，每个实例变量都有一个隐式 Getter ，通常情况下还会有一个 Setter 。 使用 `get` 和 `set` 关键字实现 Getter 和 Setter ，能够为实例创建额外的属性。

```dart
	class Rectangle {
	  num left, top, width, height;
	
	  Rectangle(this.left, this.top, this.width, this.height);
	
	  // 定义两个计算属性： right 和 bottom。
	  num get right => left + width;
	  set right(num value) => left = value - width;
	  num get bottom => top + height;
	  set bottom(num value) => top = value - height;
	}
	
	void main() {
	  var rect = Rectangle(3, 4, 20, 15);
	  assert(rect.left == 3);
	  rect.right = 12;
	  assert(rect.left == -8);
	}
```
- 最开始实现 Getter 和 Setter 也许是直接返回成员变量； 随着需求变化， Getter 和 Setter 可能需要进行计算处理而使用方法来实现； 但是，调用对象的代码不需要做任何的修改。

- 类似 (++) 之类操作符不管是否定义了 getter 方法，都能够正确的执行。 为了避免一些问题，操作符只调用一次 getter 方法， 然后把值保存到一个临时的变量中。
#### 抽象类与抽象方法

- 抽象类：定义抽象类需要加abstract关键字，抽象类里可以定义工厂构造函数来实例化

- 抽象方法：抽象类里的方法默认是抽象方法。

#### 隐式接口

- 每个类都隐式的定义了一个接口，接口包含了该类所有的实例成员及其实现的接口。 如果要创建一个 A 类，A 要支持 B 类的 API ，但是不需要继承 B 的实现， 那么可以通过 A 实现 B 的接口。

- 一个类可以通过 `implements` 关键字来实现一个或者多个接口， 并实现每个接口要求的 API。

#### 类继承与重载
- 类的继承使用`extends`关键字，支持*@override*注解
    
- 子类可以重写实例方法，getter 和 setter。下面的运算符可以被重载。 例如，想要实现两个向量对象相加，可以重载`+` 方法。
    
    | `<` | `+` | `|` | `[]` | | —- | —- | —- | —– | | `>` | `/` | `^` | `[]=` | | `<=` | `~/` | `&` | `~` | | `>=` | `*` | `<<` | `==` | | `–` | `%` | `>>` | |
    
    java不支持运算符重载  支持重写函数  
    java不允许多继承
```dart
	class Vector {
	  final int x, y;
	
	  Vector(this.x, this.y);
	
	  Vector operator +(Vector v) => Vector(x + v.x, y + v.y);
	  Vector operator -(Vector v) => Vector(x - v.x, y - v.y);
	
	  // ···
	}
```
- `!=` 运算符为非可重载运算符。 因为 `e1 != e2` 表达式仅仅是 `!(e1 == e2)` 的语法糖。

- 如果要重载 `==` 操作符，需要重写对象的 `hashCode` getter 方法。 重载 `==` 和 `hashCode` 的实例。

#### 类混合（Mixin）！！缓存

- Mixin 是复用类代码的一种途径， 复用的类可以在不同层级，之间可以不存在继承关系。

- 通过 `with` 后面跟一个或多个混入的名称，来 _使用_ Mixin ， 下面的示例演示了两个使用 Mixin 的类：
```dart
	class Musician extends Performer with Musical {
	  // ···
	}
	
	class Maestro extends Person
	    with Musical, Aggressive, Demented {
	  Maestro(String maestroName) {
	    name = maestroName;
	    canConduct = true;
	  }
	}
```

### 一些资源  
[Dart官方文档](https://dart.dev/language)
[Dart官方API库](https://dart.dev/effective-dart/usage)
[Flutter组件速学](https://www.youtube.com/watch?v=MqjCIITfCIA&list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG&index=8)
[Flutter组件速查](https://github.com/toly1994328/FlutterUnit)
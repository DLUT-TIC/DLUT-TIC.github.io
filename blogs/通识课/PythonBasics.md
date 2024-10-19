---
title: Basic of Python
date: 2024/10/19
author: saber
categories:
 - Blog
tags:
 - python
---



## Reference
- [python官方文档](https://docs.python.org/3/)
- [Zen of python](https://peps.python.org/pep-0020/)   
- [Python 教程 — Python 3.13.0 文档](https://docs.python.org/zh-cn/3/tutorial/index.html)
- [CS 61A Fall 2024](https://cs61a.org/)  👈 **强烈推荐**

## The Zen of Python

Python之禅  

> _Beautiful is better than ugly_  
> _Simple is better than complex_
> ......

Python是一门优雅简洁的语言  
至少设计的时候是这么想的  

## 基本介绍

### 在哪里写python

- vscode YES!
- python
- ipython
- jupyter notebook
- jupyter lab

####  Python 解释器
就是python自带的解释器  

```shell
python
>>> 像这样就已经唤出python
```

![Pasted image 20241017162142](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241017162142.png)  
> 此时会唤醒当前环境下的 python.exe  
> 观察python的信息可以看出一些端倪

可以看到是在当前的虚拟环境下的python   
![Pasted image 20241017162749](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241017162749.png)  


####  IPython
更加强大的解释器  

```shell
ipython
```

![Pasted image 20241017163111](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241017163111.png)

展示一下python  
```python
from sympy import *
inti_printting()
x = var('x')

y = asin(x)
diff(y)

integrate(y)
```

#### Jupyter 
一个很热门的数据科学工具   

```shell
jupyter notebook
jupyter lab
```

新建环境加入jupyter 的命令(上一次有讲过)  
```shell
conda install ipykernel
```

##### jupyter notebook

![Pasted image 20241017223534](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241017223534.png)   

右上角新建一个笔记本   
![Pasted image 20241017223747](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241017223747.png)   

选择一个环境(创建环境后安装了ipykernel正常能够看到)  
![Pasted image 20241017223819](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241017223819.png)   

与vscode中运行一致  
支持markdown cell(单元) 和 code cell(单元)  
shift+回车 运行  
![Pasted image 20241017223952](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241017223952.png)   

##### jupyter lab
更加友好的jupyter notebook  

![Pasted image 20241017223659](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241017223659.png)  


更多可以自行搜索，或者  
- [Project Jupyter Documentation — Jupyter Documentation 4.1.1 alpha documentation](https://docs.jupyter.org/en/latest/)
- [How to Use Jupyter Notebook in 2024: A Beginner’s Tutorial](https://www.dataquest.io/blog/jupyter-notebook-tutorial/)
- [Jupyter Notebook 完整介紹、安裝及使用說明. Python 開發環境介紹 - Jupyter Notebook 快速入門指南… | by Coding Lab | AI for K-12 | Medium](https://medium.com/ai-for-k12/jupyter-notebook-%E5%AE%8C%E6%95%B4%E4%BB%8B%E7%B4%B9-%E5%AE%89%E8%A3%9D%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AA%AA%E6%98%8E-846b5432f044)
- [史上最详细、最完全的jupyter notebook使用教程，Python使用者必备！——ipython系列之三-CSDN博客](https://blog.csdn.net/qq_27825451/article/details/84427269)


### Python是什么

几个观点  
- python是胶水语言
- python是解释型语言
- python是动态语言
- python是脚本语言

#### 胶水语言

```python
import numpy as np
import pandas as pd
DF = pd.DataFrame({"a":[1,2,3], "b":[4,5,6]})
```

Numpy 怎么写的  
![Pasted image 20241018144950](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018144950.png)

DataFrame是怎么来的  
![Pasted image 20241018150305](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018150305.png)  

python涉及的领域  
- 前端  `django`
- 后端  `flask`
- 游戏  `PyGame`
- 数据科学  `numpy pandas ...`
- 机器学习  `Keras`
- 深度学习  `tensorflow torch`

#### 解释型语言

不需要进行编译，通过解释器逐行读取执行的语言  
解释器不像编译器一样直接生成机器指令，指令会通过另外的程序执行  
传统的python程序会将程序编译(狭义的编译)成字节码，由python虚拟机执行   
![Pasted image 20241018153415](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018153415.png)   

解释型语言通常  
- 与底层交互的功能受限
- 语言会有比较多的限制
- 速度比较慢
- 简单
- 容易调试

#### 动态语言

python 的允许在运行时(at run time)决定变量类型  
具有如下特性
- 不需要显式的声明
- 根据赋值的值(value)推断类型
- 可以在运行过程更改变量的类型
- 隐式的类型转换

![Pasted image 20241018225141](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018225141.png)  

C语言是怎样的  
![Pasted image 20241018225315](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018225315.png)  


#### 脚本语言

起初脚本仅限于自动化shell，现在含义拓宽，很多高级语言也称为脚本语言   
一般有以下特点  
- 简单
- 自动化
- 解释型
- 从代码的头部开始(不需要main函数)  


#### 一切皆对象

python 中一切都是对象，每个变量相当于一个容器，或者说一个名字(label)，存放赋予的值(value)，当下一次赋值时，只是另一个value赋给了这个名字  

![Pasted image 20241018154231](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018154231.png)  

> `id`返回一个对象的唯一标识，代表内存中的地址，真正是对象的不是变量名而是 value 

![Pasted image 20241018154515](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018154515.png)  
![Pasted image 20241018154735](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018154735.png)  


### Python怎么写

#### 基本的

##### 赋值 
```python
a = 123
a = "Hello TIC"  
a = 1.
```
![Pasted image 20241018232519|443](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/Pasted%20image%2020241018232519.png)   

还可以  
```python
a, b, c = 1, 2, 3
```

##### 值得一提的运算   
```python
# 除法
4/3
# 指数运算
2**2
# 取商
4//3


# 字符串
"Hello" + "TIC"
"-"*30
"" '' #是相同的

# 没有 ++
```

##### 标准输入输出   
```python
# 输入
a = input("say something, please ")

# 输出
print(a)  # 结尾会自动加上换行
```

##### 条件   
```python
a = 1
# correct one
if a == 1:
	print("Hello TIC")
elif a == 2:
	print("⛔⛔⛔")
elif a == 3:
	print("⛔⛔⛔")
```

##### 循环   
```python
# while 循环
a = 1
while a < 10:
	print(a)
	a += 1

# for 循环
for i in range(10):
	print(i)

# for 多重循环
for i in range(10):
	for j in range(10):
		print("Hello TIC")

# range(start, end, step) 可以认为是得到 从start到end-1，步数为step的一串数 
# 没有 do while 循环
```


#### 函数

编程的函数与数学上的函数十分相似  
$$y = f(x,y)$$  
**给定输入，得到输出**  

##### 基本形式

赋值是一种抽象，将具体的数值与一个名字(label/name)绑定起来   
函数也是一种抽象思想，将语句(statement)与名字绑定起来   

```python
def <name>(<formal parameters>):
    return <return expression>
```

- 关键字：`def`
- `<name>` 函数名字
- `()`  括号内是函数的参数
- `return`  函数的返回值，即$f(x，y)$得到的值


##### Example

```python
def summation(n):
	total = 0
	for i in range(1, n+1):
		total += i

	return total

summation(10)
```


函数封装了一段代码，对外提供一个接口，即函数调用  
- 封装是一个重要概念，**代码变得优雅**
- 增强了复用性

python允许使用函数作为参数   
```python
def summation(n, term):
	total, k = 0, 0
	while k < n:
		total, k = total + term(k, 1), k+1
	return total
```

```python
from math import add
summation(10, add)
```

两个代码是等价的  
但是实际上存在一些问题   
以函数为参数的`summation`很明显知道传入的函数需要两个参数，一个是`k`，另一个是`1`，并不合理，有点像是面向答案编程   

函数定义了传入的参数应该是什么样的   
但最好提供比较宽泛的定义   

如果函数定义`term`这个函数只能传入k进行计算，要求传入`term`的时候，由程序员考虑如何得到想要的累加和，会比较好，更具有一般性   

但是`add`有两个参数      
如何解决这个问题？  

##### Function as return value

python允许在函数内定义函数，将函数作为返回值   

```python
def f1(x):
	def f2():
		print(x)
	return f2
```

```python
f2 = f1("Hello TIC")
f2
f2()
```

##### 柯里化
transform a multi argument function into a single argument function that takes the rest of the arguments.  
将多元函数转变为接受单参数的函数，让这个函数接受其余的参数  

只要返回一个已经传了一个参数的函数，就可以使add参数变成一个   
```python
from operator import add
```

```python
def GetNewAdd(x):
	def NewAdd(y):
		return add(y, x)
	return NewAdd
```

```python
NewAdd = GetNewAdd(1)
NewAdd(2)
```

```python
def summation(n, term):
    total, k = 0, 0
    while k < n:
        total, k = total + term(k), k + 1
    return total
```

```python
summation(10, NewAdd)
```

##### Lambda expression

```python
lambda x : x+1
```

为什么使用lambda  
[What is the purpose of Lambda expressions? - Python Help - Discussions on Python.org](https://discuss.python.org/t/what-is-the-purpose-of-lambda-expressions/12415/2)   

lambda表达式又称匿名函数，定义lambda的时候不需要给这个函数命名(相比于`def`)  
lambda设计的目的是用于一次性的函数，以至于不需要给它名字  👈 作为参数使用  

```python
summation(10, lambda x: x+1)
```

lambda 同样可以以函数为参数，返回函数  
```python
lambda f, x: f(x)
lambda : lambda x: x+1
```

```python
a = lambda f, x: f(x)
GetNewAdd = lambda x: lambda y: x+y
NewAdd = GetNewAdd(1)
summation(10, NewAdd)
```

#### 递归
什么是递归    
自己直接或间接地调用自己称为递归  
函数的递归利用了函数抽象的特性，将问题拆分为更小的子问题，隐去了问题的复杂性  

递归函数通常分为两个部分，一个是跳出递归的base case，一个是进行递归的function call  

##### Example
直接递归  

计算前n个自然数的和  
$$S(n) = S(n-1) + n$$  
```python
def RecursiveSum(n):
	if n == 0:
		return 0
	else:
		return n + RecursiveSum(n-1)
```

```python
RecursiveSum(10)
```

斐波那契数组   

|index|1|2|3|4|5|6|7|-| 
|-----|-|-|-|-|-|-|-|-| 
|number|1|1|2|3|5|8|13|-| 

```python
def fibonacci(n):
    if n == 1 or n == 2:
        return 1
    else: 
        return fibonacci(n-1) + fibonacci(n-2)
```

```python
for i in range(1, 8):
	print(fibonacci(i))
```

```python
fibonacci(100)
```

间接递归  
判断奇偶数  
```python
def IsEven(n):
	if n == 0:
    	return True
    else:
    	return IsOdd(n - 1)
def IsOdd(n):
	if n == 0:
    	return False
    else:
    	return IsEven(n - 1)
```

```python
IsOdd(13)
IsEven(13)
```

> 不要思考内部细节！  
> 但是你想知道的话  
>- 无论调用哪个函数，到达 IsEven中的0判断一定经过偶数次`-1` 
>- 无论调用哪个函数，到达 IsOdd中的0判断一定经过奇数次`-1` 

更多参见练习题  

#### 数据结构

##### 简单介绍一下  

python 比较常用的数据结构   `list, tuple, dict, set`  

列表  
列表的元素可以是不同类型的  
```python
l = ["我", "是", "列表"]
type(l)
```

元组  
```python
t = ("我", "是", "元组")
type(t)
```

字典  
```python
d = {"我": "字典"}  # key : value
```

列表的元素是可变(mutable)的  
```python
l[0] = "你"
```

元组是不可变的  
```python
t[0] = "试一下"
```

字典的值(value)是可变的  
```python
d["我"] = "字典吗"
```

##### 索引与切片  index and slides

索引，可以和C索引是一致的   
```python
l[0], l[1], l[2]
t[0], t[1], t[2]
t[3] #越界
```
也可以  
```python
l[-1]
l[-2]
l[-3]
```


切片，范围性的索引  
`slide[start:end+1:step]`   
返回原来的数据类型   
更复杂的切片参考 `numpy`  `pandas` 的使用    
```python
l[0:3:1]
l[0:3:2]
t[0:]
t[:3]
t[:-1]
```

##### 一个比较常用的技巧 list comprehension  

```python
l1 = [i for i in range(10)]
l2 = [j for i in range(10) for j in range(5)]
l2 = [j for i in range(10) for j in range(5) if j >= 2]
```
更多的用法请自行搜索   
或者需要时再学习  


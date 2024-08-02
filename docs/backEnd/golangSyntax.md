---
title: Golang入门
date: 2024/8/2
view: 0
---

# Golang入门

## 语言学习

- 学习内容

  - **变量、常量、数据类型、控制结构（if, switch, for）**

  - **函数、方法、结构体、接口**

  - **切片、数组、字典**

  - **并发编程（goroutines, channels）**

  - **错误处理与defer机制**

  - **Go Modules (依赖管理)**

  - **单元测试与Benchmark测试**

推荐入门书籍《Go程序设计语言》或者《Go 语言学习笔记》，如果你是语言小白， 没学过其余语言，那就去看《Go程序设计语言》；如果你有其余语言基础，比如Java 或者C++，那就去看《Go 语言学习笔记》即可

![image-20240802102810057](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021116702.png)

![image-20240802102915583](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021116815.png)

你需要做的就是跟着书籍多敲敲代码，**多动手才能学会**。

不管看完入门书籍还是跟着学完某个视频，可以针对练习练习，也好加深一下印象。
推荐一个github上不错的[Go单元测试仓库](https://studygolang.gitbook.io/learn-go-with-tests/)
![image-20240802104448301](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021117124.png)


- **学习资源**
  - 视频:
    - [【2024新版】Go入门教程，十年大厂程序员讲解，通俗易懂](https://www.bilibili.com/video/BV1gx4y1r7xb/?p=24&share_source=copy_web&vd_source=9bb0aa9c2c3cc1b12ca6f343a55b4e80)
    - [8小时入门go语言开发 | 2023重制版](https://www.bilibili.com/video/BV1zu4y187Wb)
  - 文档和书籍:
    - [go程序设计语言](https://github.com/hongye612430/awesome-programming-books-1/blob/master/golang/go程序设计语言.pdf)
    - [go-study | Go语言学习笔记 (jsmond2016.github.io)](https://jsmond2016.github.io/go-study/)
    - [Go by Example中文版(推荐，学习到Embedding即可)](https://gobyexample-cn.github.io/)
    - [Go语言设计与实现](https://draveness.me/golang/)

## 练手项目
很多人的可能都比较喜欢实操，这里也推荐几个在学完初级语言基础后可以进行实操的项目。

1. [starcharts](https://github.com/caarlos0/starcharts), 
    - 项目的功能是生成 Github 上面的项目的 star 趋势图（如下图），核心代码不多，用来练手很合适。
    ![image-20240802104007765](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021117684.png)

2. [gorched](https://github.com/zladovan/gorched), 
    - 使用 Go 写的一个小游戏。
    ![img](https://raw.githubusercontent.com/zladovan/gorched/master/showcase.gif)

3. [pacgo](https://github.com/danicat/pacgo), 
    - 也是使用 Go 写的一个小游戏，每一步都有详细的描述和代码实现。
    ![img](https://raw.githubusercontent.com/danicat/pacgo/master/screenshot.jpg)

4. [wechat-go](https://github.com/songtianyi/wechat-go), 
    -   微信 web 版 API 的 Go 实现，模拟微信网页版的登录／联系人／消息收发等功能。
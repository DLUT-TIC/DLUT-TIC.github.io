---
title: 网站编辑方法
date: 2024/8/2
author: lyydsheep
tags:
 - 使用方法
password: 0dd093641855dfab83795bfba3f3f84e
---

# 网站内容编辑方法

> 本网站使用vuepress-theme-reco 2.0搭建<br>亦可参考[官方文档](https://theme-reco.vuejs.press/docs/guide/introduce.html)进行编辑。

## 书写技术路线部分需要注意什么？

在我们的技术路线部分的页面中，大体可以分为四个部分：
- 顶部导航栏（navbar）
- 左侧系列栏（series）
- 文档内容（markdown）
- 当前文档目录
![image-20240802141905040](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021419116.png)

在书写技术路线部分时，我们只需要把注意力放在**左侧系列栏**（红色）和**文档内容**（蓝色）部分即可

## 左侧系列栏

编辑左侧系列栏，我们需要修改`/.vuepress/config/zh/series.ts`文件中的配置项

![image-20240802142911702](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021429742.png)

目前的`series.ts`文件正如下图，三个重要的部分被框起来了
![image-20240802144755079](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021447112.png)

在我的理解中，一个**绿色部分**就是一个系列栏。很显然，我们有三个技术路线，应当有三个系列栏（绿色部分），但是不同的技术页面应该呈现其对应的系列栏，比如前端技术就只能呈现前端技术路线的系列栏，而不能出现人工智能技术的系列栏。<br>
解决这个问题就需要依赖红色部分<br>
红色部分是一个**路由前缀**，用于限定这个系列栏（绿色部分）出现在哪些页面。<br>而蓝色部分则是一系列的markdown文档名称，也是系列栏中的内容，可能听起来有点抽象，对照着看看下面的文件分布，你就能一清二楚了（**注意看路径和文件的名称**）
![image-20240802150232739](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021502773.png)

右侧是网页呈现的效果，六个md文件，对应六个条目

::: warning
注意右侧呈现的名字和md文件名字不同，这是我在md文件中编辑LE title元素所造成的，稍后会提到
:::

举个例子，假设需要在人工智能技术路线中展示：overview、学习Ai、成为Ai、超越Ai这三个步骤，那么需要先这样编写`series.ts`文件
![image-20240802154026213](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021540240.png)

然后在`docs/ai`目录下，分别编写四个md文件<br>
![image-20240802154101703](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021541739.png)

最终展示效果就是这样的😂（由于除了overview文件外都没设置title元素，因此展示的就是路径名了）
![image-20240802154326099](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021543154.png)

## 编辑文档内容

编写文档时，有两个重要部分值得我们注意，以`docs/ai/overview.md`为例<br>
红色部分是对文档的一些配置信息，绿色部分则是正文内容，写法与正常的markdown一致<br>
需要注意的是红色部分中的配置项

![image-20240802155423716](https://raw.githubusercontent.com/lyydsheep/pic/main/202408021554756.png)

目前为止，我利用的所有配置项就仅限于
- title：定制文档的标题
- date：文档写作实践
- categories：分类
- author：作者
- tags：标签

::: warning
正如你所见，title元素的值就是影响系列栏展示的文本，如果没有，则会是一串地址<br><br>
author如果不写，则是**TIC-TEAM**（即author的默认值是TIC-TEAM）<br><br>
categories和tags元素，用于自动生成“务虚笔记”和“标签”的内容。主要用于`/blogs`目录下的文档，在技术路线中可以不写<br>
即技术路线部分文档应该有至少有**title、date**两个元素
:::
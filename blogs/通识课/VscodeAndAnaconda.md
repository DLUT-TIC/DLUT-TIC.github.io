---
title: 【教程】vscode+anaconda配置python环境
date: 2024/10/9
categories:
 - Blog
author: Sazerac
tags:
 - python
 - Anaconda
---


## 1. 下载vscode

- [官网链接](https://code.visualstudio.com/download)

  ![image-20241008154927026](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081549164.png)

  根据自己的电脑情况下载对应的版本，例如`windows`建议下载`System Installer`版本。

  <font color="red">！！！文件路径可以根据自己的喜好进行设置。</font>   

  下载完之后打开，建议勾选全部。

  ![image-20241008183031816](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081830905.png)

- 插件推荐

  1. Chinese(Simplified) (简体中文)

     ![image-20241008183854201](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081838269.png)

  2. Prettier- 代码格式化程序

  3. Jupyter-在vscode上面运行jupyter notebook

- markdown支持

  vscode本身就支持markdown的编辑和渲染，创建`××.md`文件可以直接编辑。

  ![image-20241008184156359](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081841414.png)

## 2. Anaconda下载

### 2.1 下载

- [conda官网](https://www.anaconda.com/download#)

  ![b47af4165875526b8339e1cdecc08ad](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082141890.png)

- 写入自己的邮箱，并提交。（邮箱下面的选项不建议点）

  ![image-20241008185624778](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081856872.png)

- 选择合适的版本下载。

- 其他选项默认即可，但是这个安装路径建议不要安装在C盘。（时间比较长，请耐心等待~）

  ![image-20241008185930822](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081859861.png)

- 安装完成~

  ![image-20241008191853393](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081918491.png)

### 2.2 配置环境变量：

![image-20241008192139623](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081921675.png)

- 在系统设置中找到环境变量，具体步骤是：`windows + S`输入`环境变量`，打开`编辑系统环境变量`出现以下界面：（或者是点击`设置`搜索`环境变量`)

![image-20241008192444371](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081924413.png)

- 点击环境变量之后，下面系统变量有一个`Path`点击`编辑`

![image-20241008192718328](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081927372.png)

- 找到anaconda的安装路径
  将以下三个路径增加到系统路径中，分别`确定`-->`确定`-->`确定`。

![img](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081903106.png)

![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081931225.png)

- **注意**：这里 D:\Download 是你安装anaconda的路径，根据你自己安装时选择的路径去找。如果找不到，可以在“搜索”中找到 anaconda，再不断定位回anaconda的安装路径即可。
  以上三个路径主要表示：**python所在路径**、**conda命令**和**常用脚本**的路径。

- 检验：`windows + R`输入`cmd`进入命令行窗口，分别输入`conda -V`和`python --version`，如果能够像下图那般显示，则证明环境变量配置成功。

  ![image-20241008193425889](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410081934928.png)

### 2.3 conda常用命令

1. 创建环境：

   ```cmd
   conda create -n ENV_NAME python=3.××
   ```

   这是conda创建虚拟环境的一个命令，里面`ENV_NAME`表示你创建的虚拟环境的名字，`python=3.××`表示设置python的版本，例如可以`python=3.10`表示创建虚拟环境中的python版本是3.10。

2. 激活环境：

   ```cmd
   conda activate ENV_NAME
   ```

   创建好环境并不代表虚拟环境自动运行，需要执行这条命令，`ENV_NAME`仍代表你创建好的环境名称。

3. 退出环境：

   ```cmd
   conda deactivate
   ```

4. 删除环境：

   ```cmd
   conda env remove -n ENV_NAME
   ```

5. 安装包：

   ```cmd
   conda install PACKAGE_NAME
   ```

   和c语言相同，python也有很多**包**，这里面封装了很多方便好用的函数，我们在具体应用中会经常用到这条命令。这个操作我们平时也叫配环境。

6. 卸载包：

   ```cmd
   conda remove PACKAGE_NAME
   ```

7. 显示安装的包：

   ```cmd
   conda list
   ```

8. 显示创建的环境：

   ```cmd
   conda env list
   ```

9. 添加清华镜像源：

   ```cmd
   conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
   conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
   conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
   conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
   conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
   ```

10. 查看当前镜像：

    ```cmd
    conda config --show channels
    ```

## 3. vscode+conda环境

- 打开vscode，添加插件`python`。

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082059067.png)

- 先创建虚拟环境（参照2.3的命令）。具体方法有两种：

  （1）`windows + R`输入cmd，打开命令行文件，输入命令例如`conda create -n test_python python=3.10`，出现以下代表创建成功。

  ![image-20241008210951871](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082109918.png)

  （2）或者是打开vscode，点击终端，新建cmd，输入命令，出现最后一张图代表成功。

  ![image-20241008211220579](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082112618.png)

  ![image-20241008211252794](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082112838.png)

  ![image-20241008211456818](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082114860.png)

- 创建新的python文件`test.py`，在右下角可以发现有一个环境的字，我的是`3.11.9('wkk_python':conda)`，点击，可以选择解释器。

![image-20241008205903547](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082059589.png)

![image-20241008210202100](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082102147.png)

- 在文件里输入`print("hello world")`，点击运行。

  ![image-20241008211856698](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082118753.png)

- 打印成功！！！

## 4. 一些其他的工具和配置

- `jupyter notebook`

  ![image-20241008212137987](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082121051.png)

  在anaconda里面有一个工具很好用叫`jupyter notebook`，是一个学习python很好用的软件，可以在anaaconda里面下载，然后在命令行文件里面输入`jupyter notebook`就可打开编辑了。

- vscode里面的jupyter notebook

  在插件里面搜索jupyter并下载，然后激活创建的conda虚拟环境，运行下面代码：

  ```cmd
  pip install jupyter # 一般已经装好
  pip install ipykernel 
  ```

  然后在vscode里面添加环境，创建`.ipynb`文件，编辑并运行。

  ![image-20241008213814428](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202410082138538.png)

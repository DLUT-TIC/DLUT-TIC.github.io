---
title: 【教程】Hugo+Github博客部署
date: 2024/9/18
categories:
 - Blog
author: Sazerac
tags:
 - Hugo
 - Github
---

# 【教程】Hugo+Github博客部署

## 环境准备

### 下载Hugo

- 官网址：[Hugo官网](https://gohugo.io/)

- Github地址:[gohugoio/hugo](https://github.com/gohugoio/hugo)

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/image1.png)

- 点击`Github`，点击`Tags`，选择合适的版本下载。

### 下载git

- 点击[**Git官网https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/image1.png**](https://git-scm.com/)

  ![Git官网](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181723016.png)

- 点击 **Download for Windows** 按照指引安装即可。

## 搭建博客

### 创建Blog

- 解压``hugo_extended_0.134.2_windows-amd64.zip``文件，点击进入并cmd打开命令行窗口，输入`hugo new site xxxx`创建文件（我这里是dev）。

  ![file截图](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181724763.png)

  ![cmddev](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181724285.png)

- 但是新创建的`dev`文件夹里面没有`hugo.exe`文件，为了使在`dev`文件下仍能使用`hugo`命令，需要复制`hugo.exe`文件到`dev`文件内。

  ![111](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181724772.png)

- 在命令行中切换到已创建好的`dev`文件夹，输入`hugo server -D`，运行成功出现以下界面：

  ![hugo server -D](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181725280.png)

- 打开浏览器输入`http://localhost:1313/`发现会出现以下界面：

  ![Page Not Found](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181726828.png)

- 这是因为还未下载主题，可以看到`dev\themes`文件夹下为空。

### 下载主题

- 再次进入[**Hugo官网**](https://gohugo.io/)。

- 点击`Themes`选择一款适合的主题，作为演示，我选择的是`Stack`这款主题。

  ![Stack](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181727730.png)

- 点击`Download`进入主题`github`界面，并选择适当的版本下载。
- ![image9](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181727160.png)

- 将文件解压存储在`dev\themes`文件下，并将`exampleSite`样例数据中的` Content` 和 `hugo.yaml` 复制到主文件夹中，并删掉`hugo.toml`。

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181727952.png)

- 修改`themes`文件夹下面主题文件夹的名字，使其和`hugo.yaml`中的一样。

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181728638.png)

- 再次在命令行中输入`hugo server -D`，查看主题，发现已经正确显示。

  ![theme](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181728178.png)

## Github部署

### 常规部署

- 准备工作：创建一个自己的github账号。

- 新建仓库，命名要用`{github用户名}.github.io`，如果这是你搭建的第一个博客，这一步最好在前面用自己的用户名，这会避免很多Bug（也许是我太菜了~）。

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181728849.png)

- 然后进入自己的仓库，前往`setting -> Pages -> Branch`选择main分支，然后保存，会自动开启`https://{github用户名}.github.io` 的地址，这地址也是以后访问博客的地址。（**注意：仓库需要设置为public**）

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181729976.png)

- 然后我们就可以往github仓库上传文件了，先回到`dev`文件下，进入命令行界面，输入`hugo -D`生成public文件夹。

- 在public文件夹下执行以下命令上传到github仓库上面。

  ```
  git init
  git add .
  git commit -m "first commit"
  git branch -M main
  git remote add origin {你的github仓库地址}
  git push -u origin main
  ```

- 上传成功后访`https://{github用户名}.github.io`，成功搭建属于自己的Hugo博客。

### Github Action自动部署

- Github上面重新建一个仓库，用于存放Hugo的主文件，可以设置为`private`。

- 前往`settings -> Developer Settings -> Personal access tokens`，创建一个token(classic)。

- token选择永不过期，并且勾选**repo**和**workflow**选项。

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181729591.png)

- 为保证安全，将生成的token，保存的仓库的变量中，前往`Settings -> Secrets and variables -> Actions`中设置。（**注意：token只能显示一次，可事先保存**）

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181729259.png)

  ![](https://cdn.jsdelivr.net/gh/Sazerac-kk/pictures/img/202409181730141.png)

- 在hugo主文件创建一个`.github/workflows/xxxx.yaml`文件，将以下内容复制进去，想具体了解更多，可查看【[Github Action文档](https://docs.github.com/zh/actions)】。

  ```
  name: deploy
  
  # 代码提交到main分支时触发github action
  on:
    push:
      branches:
        - main
  
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
          - name: Checkout
            uses: actions/checkout@v4
            with:
                fetch-depth: 0
  
          - name: Setup Hugo
            uses: peaceiris/actions-hugo@v3
            with:
                hugo-version: "latest"
                extended: true
  
          - name: Build Web
            run: hugo -D
  
          - name: Deploy Web
            uses: peaceiris/actions-gh-pages@v4
            with:
                PERSONAL_TOKEN: ${{ secrets.你的token变量名 }}
                EXTERNAL_REPOSITORY: 你的github名/你的仓库名
                PUBLISH_BRANCH: main
                PUBLISH_DIR: ./public
                commit_message: auto deploy
  ```

- 在hugo主文件创建`.gitignore`文件，来避免提交不必要的文件。

  ```
  # 自动生成的文件
  public
  resources
  .hugo_build.lock
  
  # hugo命令
  hugo.exe
  ```

- 将hugo的主文件上传到仓库，上传成功后会触发Github Action，来自动部署你的静态页面。

  ```
  git init
  git add .
  git commit -m "first commit"
  git branch -M main
  git remote add origin {你的github仓库地址}
  git push -u origin main
  ```

## 参考资料

- “【Hugo】Hugo + Github 免费部署自己的博客.” *莱特雷-letere*, 30 Aug. 2024 [【Hugo】Hugo + Github 免费部署自己的博客 (letere-gzj.github.io)](https://letere-gzj.github.io/hugo-stack/p/hugohugo--github-免费部署自己的博客/#32-github-action自动部署)

- [原文视频](https://www.bilibili.com/video/BV1bovfeaEtQ/?spm_id_from=333.1350.jump_directly)

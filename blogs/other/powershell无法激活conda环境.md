---
author: saber
tag: 
  - environment
  - FQA
date: 2024/10/20
---

### 问题描述

- 在powershell 执行 `conda activate`  提示需要执行 `conda init`  (报错或没反应)  
- 执行`conda init` 之后 再次运行 `conda activate` 仍然报错
- powershell 中有一片红色
![b21d7b971274c2b56b1f26310d324b25](https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/b21d7b971274c2b56b1f26310d324b25.png)

### 解决办法

- `Win+R` 输入 cmd 后，相同的命令能够执行的话，conda环境应该没有问题
- 如果cmd 也无法使用，则可能环境有问题

如果cmd可以正常激活环境  
这个问题是由于powershell 的执行策略(某种安全限制)导致的    
可以这么解决   
1. 以管理员的身份打开powershell
2. 复制并执行命令 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine`  

重新打开powershell  
`conda activate` 应该能正常执行  

更多可以看看  
- [解决PowerShell中conda activate指令无效的问题\_conda activate不能用-CSDN博客](https://blog.csdn.net/u010393510/article/details/130715238)
- [完美解决无法加载文件 WindowsPowerShell\\profile.ps1系统编译问题-CSDN博客](https://blog.csdn.net/weixin_41194129/article/details/140538410)1

有时候的CSDN也不是不行   

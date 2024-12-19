## 后端辅助测试

### 使用 Mock 工具模拟后端

**更简单一点但是学不到原理
后面再补充**
### Flask 简易后端
  
```python

# app.py

import json

  

from flask import Flask, jsonify, request

from flask_cors import CORS

  

app = Flask(__name__)

CORS(app, supports_credentials=True)

  

# 该路由登录方法是POST

@app.route('/users/login', methods=['POST'])

def login():

    # 接收前端传递的json格式数据，并输出

    data = json.loads(request.get_data())

    print(data['userName'])

    # return jsonify("login successful")

    return jsonify({"message": "login success", "token": "12313"})

  

# 该路由注册方法是POST

@app.route('/users/signup', methods=['POST'])

def signup():

    # 接收前端传递的json格式数据，并输出

    received_data = request.data.decode('utf-8')

    print(received_data)

    return jsonify({"message": "signup success"})

  

if __name__ == '__main__':

    app.run(debug=True)

```

  

将此代码复制到 python IDE 中即可运行:

  

- 初次运行会报没有 flask 和 flask_cors 包的报错

- 建议新建一个 conda 虚拟环境专门用于运行网络相关的代码 (python 版本不宜过高 3.10左右)

  - 进入该虚拟环境运行以下代码下载对应的包

  

```shell

conda install flask

conda install falsk_cors

```

  

**如果第一次激活环境建议先下载pip后使用pip安装包**

  

```shell

pip install flask

pip install falsk_cors

```

  

**上面两条安装命令在此处等价**

  

运行 current file 执行结果如下图所示:

**开启了 Debug mode 所以此处命令行提示为红色不是报错**

![屏幕截图 2024-12-19 090809](https://github.com/SimonWuZY/MarkdownPics/blob/main/imgs/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-12-19%20090809.png?raw=true)

简要说明:
- 运行在 http://127.0.0.1:5000 表明运行在本机的 5000 端口
- 使用 CTRL + C 终止运行
- 使用 HTTP/1.1 监听 users/login 和 users/sigin 使用 OPTIONS / POST 方法

## 登录注册页面板子-非正式-可拓展换图

**注意: 以下三个文件要放在同一文件夹下**

演示样例:

![Pasted image 20241219092339](https://raw.githubusercontent.com/SimonWuZY/MarkdownPics/main/imgs/Pasted%20image%2020241219092339.png)
### login.html

```html
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title> Login & Registration</title>

    <link rel="stylesheet" type="text/css" href="login.css">

</head>

<body>

    <div class="container">

        <span></span>

        <span></span>

        <span></span>

        <!-- 登录界面的窗口表格 -->

        <form id="signinForm">

            <h2>登录</h2>

            <div class="inputBox">

                <input type="text" placeholder="用户名" id="signinUsername">

            </div>

            <div class="inputBox">

                <input type="password" placeholder="密码" id="signinPassword">

            </div>

            <div class="inputBox group">

                <a href="#">忘记密码</a>

                <a href="#" id="signup">注册</a>

            </div>

            <div class="inputBox">

                <input type="submit" value="登录">

            </div>

        </form>

  

        <!-- 注册界面的窗口表格 -->

        <form id="signupForm">

            <h2>注册</h2>

            <div class="inputBox">

                <input type="text" placeholder="用户名" id="signupUsername">

            </div>

            <div class="inputBox">

                <input type="password" placeholder="输入密码" id="signupPassword">

            </div>

            <div class="inputBox">

                <input type="password" placeholder="确认密码" id="confirmPassword">

            </div>

            <div class="inputBox">

                <input type="submit" value="注册新用户">

            </div>

            <div class="inputBox group">

                <a href="#">已拥有账号? <b id="signin">去登录</b></a>

            </div>

        </form>

    </div>

    <script src="./login.js"></script>

</body>

</html>
```

### login.css

```css
@import url('https://fonts.googleapis.com/css?famil=Poppins:200,300,400,500,600,700,800,900&:display=swap');

  

* {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;

}

  

body {

    display: flex;

    justify-content: center;

    align-items: center;

    min-height: 100vh;

}

  

body::before {

    content: '';

    position: absolute;

    inset: 0;

    background: url(https://raw.githubusercontent.com/SimonWuZY/MarkdownPics/main/imgs/bg1.jpg);

    background-attachment: fixed;

    background-size: cover;

    background-position: center;

}

  

body::after {

    content: '';

    position: absolute;

    inset: 0;

    background: url(https://raw.githubusercontent.com/SimonWuZY/MarkdownPics/main/imgs/bg2.jpg);

    background-attachment: fixed;

    background-size: cover;

    background-position: center;

    opacity: 0;

    transition: 0.5s;

}

  

body.signup::after {

    opacity: 1;

}

  

.container {

    position: relative;

    width: 350px;

    height: 340px;

    border-radius: 15px;

    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);

    display: flex;

    justify-content: center;

    align-items: center;

    z-index: 1000;

    transition: 0.5s;

    overflow: hidden;

}

  

body.signup .container {

    height: 440px;

  

}

  

.container::before {

    content: '';

    position: absolute;

    width: 100%;

    height: 100%;

    background: repeating-conic-gradient(from var(--a), #45f3ff 0%,

            #45f3ff 10%, transparent 10%, transparent 80%, #45f3ff 100%);

    border-radius: 20px;

    animation: animate 2.5s linear infinite;

}

  

body.signup .container::before {

    filter: hue-rotate(140deg);

}

  

@property --a {

    syntax: '<angle>';

    inherits: false;

    initial-value: 0deg;

}

  

@keyframes animate {

    0% {

        --a: 0deg

    }

  

    100% {

        --a: 360deg

    }

}

  

.container span {

    position: absolute;

    inset: 5px;

    overflow: hidden;

    border-radius: 15px;

}

  

.container span::before {

    content: '';

    position: absolute;

    inset: 5px;

    background: url(https://raw.githubusercontent.com/SimonWuZY/MarkdownPics/main/imgs/bg1.jpg);

    background-attachment: fixed;

    background-size: cover;

    background-position: center;

    filter: blur(10px);

}

  

.container span::after {

    content: '';

    position: absolute;

    inset: 5px;

    background: url(https://raw.githubusercontent.com/SimonWuZY/MarkdownPics/main/imgs/bg1.jpg);

    background-attachment: fixed;

    background-size: cover;

    background-position: center;

    filter: blur(15px);

}

  

body.signup .container span::before,

body.signup .container span::after {

    background: url(https://raw.githubusercontent.com/SimonWuZY/MarkdownPics/main/imgs/bg2.jpg);

    background-attachment: fixed;

    background-size: cover;

    background-position: center;

    filter: blur(15px);

}

  

form {

    position: absolute;

    left: 0;

    display: flex;

    justify-content: center;

    align-items: center;

    flex-direction: column;

    width: 100%;

    gap: 15px;

    transition: 0.5s;

}

  

form#signupForm {

    left: -100%;

}

  

body.signup form#signinForm {

    left: -100%;

}

  

body.signup form#signupForm {

    left: 0%;

}

  

form h2 {

    position: relative;

    color: #fff;

    font-size: 1.5em;

    letter-spacing: 0.1em;

    text-transform: uppercase;

    font-weight: 500;

    margin-bottom: 10px;

}

  

form .inputBox {

    position: relative;

    width: 70%;

    display: flex;

    justify-content: space-between;

}

  

form .inputBox a {

    color: #b31414;

    text-decoration: none;

    font-size: 0.85em;

}

  

form .inputBox a:nth-child(2) {

    color: #45f3ff;

    text-decoration: underline;

}

  

form .inputBox input {

    width: 100%;

    outline: none;

    border: 1px solid rgba(255, 255, 255, 0.25);

    background: rgba(0, 0, 0, 0.15);

    padding: 6px 15px;

    border-radius: 4px;

    font-size: 0.85em;

    color: #fff;

}

  

form .inputBox input::placeholder {

    color: rgba(0, 0, 0, 0.5);

}

  

form .inputBox input[type="submit"] {

    background-color: #2196f3;

    font-weight: 500;

    cursor: pointer;

}

  

form#signupForm .inputBox input[type="submit"] {

    background-color: #f4242f;

}

  

form#signupForm b {

    font-weight: 500;

    color: #ffeb3b;

    text-decoration: underline;

}
```

### login.js

```js
let signup = document.querySelector('#signup');

let signin = document.querySelector('#signin');

let body = document.querySelector('body');

  

const ipConfig = "http://127.0.0.1:5000";

  

signup.onclick = function () {

    console.log("____跳转到注册页面_____");

    body.classList.add('signup');

}

signin.onclick = function () {

    console.log("____跳转到登录页面_____");

    body.classList.remove('signup');

}

  

document.querySelector('#signinForm').addEventListener('submit', function (event) {

    event.preventDefault(); // 阻止表单默认提交行为

  

    const username = document.querySelector('#signinUsername').value;

    const password = document.querySelector('#signinPassword').value;

  

    loginUser(username, password).then((token) => {

        console.log("登录成功，跳转到index.html");

  

        // 保存 用户名 用户ID 到localStorage

        localStorage.setItem('username', username);

        localStorage.setItem('userId', token);

        // 跳转到chat1.html页面

        window.location.href = "../index/chat1.html";

    }).catch(error => {

        console.error("登录失败：", error);

    });

});

  

// 绑定注册表单提交事件

document.querySelector('#signupForm').addEventListener('submit', function (event) {

    event.preventDefault(); // 阻止表单默认提交行为

  

    // 获取用户名、密码和确认密码

    const username = document.querySelector('#signupUsername').value;

    const password = document.querySelector('#signupPassword').value;

    const confirmPassword = document.querySelector('#confirmPassword').value;

  

    // 调用signupUser进行注册

    signupUser(username, password, confirmPassword).then(() => {

        console.log("注册成功，跳转到登录页面");

        window.location.href = "login.html"; // 跳转到登录页面

    }).catch(error => {

        console.error("注册失败：", error);

    });

});

  

async function loginUser(username, password) {

    const response = await fetch(ipConfig + '/users/login', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json',

        },

        body: JSON.stringify({ userName: username, password: password })

    });

    if (!response.ok) {

        throw new Error('Network response was not ok');

    }

    const data = await response.json();

    if (data.token) {

        return data.token; // 返回token

    } else {

        throw new Error('Token not found in response');

    }

}

  

async function signupUser(username, password, confirmPassword) {

    if (password !== confirmPassword) {

        return Promise.reject('密码和确认密码不匹配');

    }

  

    const data = {

        userName: username,

        password: password

    };

  

    return fetch(ipConfig + '/users/signup', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(data)

    })

        .then(response => response.json())

        .then(data => {

            console.log('注册成功:', data);

            return data;

        })

        .catch(error => {

            console.error('注册失败:', error);

            throw error;

        });

}
```

### 运行结果

**前端通过 go live 运行后输入任意用户名/密码点击登录后在python命令行中应该可以看到打印结果:**

![Pasted image 20241219092722](https://raw.githubusercontent.com/SimonWuZY/MarkdownPics/main/imgs/Pasted%20image%2020241219092722.png)

## FetchAPI 网络编程

`fetch()`的功能与 XMLHttpRequest 基本相同，但有三个主要的差异。

（1）`fetch()`使用 Promise，不使用回调函数，因此大大简化了写法，写起来更简洁。

（2）`fetch()`采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象），更合理一些；相比之下，XMLHttpRequest 的 API 设计并不是很好，输入、输出、状态都在同一个接口管理，容易写出非常混乱的代码。

（3）`fetch()`通过数据流（Stream 对象）处理数据，可以分块读取，有利于提高网站性能表现，减少内存占用，对于请求大文件或者网速慢的场景相当有用。XMLHTTPRequest 对象不支持数据流，所有的数据必须放在缓存里，不支持分块读取，必须等待全部拿到后，再一次性吐出来。

在用法上，`fetch()`接受一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象。它的基本用法如下。

```js
fetch(url)
  .then(...)
  .catch(...)
```

**后续内容先看代码
改卷子去了后面再补 (/(ㄒoㄒ)/~~)**


- 更详细完整教程请见: [阮一峰](https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)
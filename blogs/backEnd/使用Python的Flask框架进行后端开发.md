---
title: 使用 Python 的 Flask 框架进行后端开发
date: 2024/9/18
categories:
 - be
author: Limpid-8818
tags:
 - 后端
 - Python
 - Flask
---
## 使用 Python 的 Flask 框架进行后端开发



### 写在前面  

正如组里其他的学长所说，有很多种语言都可以用来进行后端开发，我们学习后端开发实际上要学习的是通用的知识。但事实上是，不同人对学习不同语言的接受、学习程度也会存在差异。我综合考虑了自己的个人情况，选择了自己更为熟悉，时下也更加热门的Python语言来作为我后端开发的主力语言。

*（当然不是想偷懒不学 Golang，只是这份笔记同时也起到了分享、教程的作用，所以还是想要带给大家自己更加熟悉的知识的讲解。Golang 也有在学，新知识的学习需要大家一起努力，共勉）*



### 目录  

1. 环境需求  
2. Python 介绍与 Flask 框架介绍  
3. 初识 Flask 框架  
4. 使用 Postman 向后端发送请求  
5. 使用 pymysql 库操作 MySQL 数据库  



### 1. 环境需求  

* IDE：**PyCharm**  
* Python虚拟环境：安装**Flask框架**、**pymysql库**  
* 数据库：**MySQL数据库**  
* 其他工具：**Postman**  



PyCharm 可以到官网下载专业版，学长之前有发过 JetBrains IDE 的全套激活码，也可以选择免费的社区版。

**下载链接：[下载 JetBrains 的 PyCharm：用于数据科学和 Web 开发的 Python IDE](https://www.jetbrains.com/pycharm/download/?section=windows)**  



Python 的虚拟环境使用 `conda` 环境即可，在命令行中启用 `conda` 虚拟环境，使用 `pip` 或 `conda` 安装我们需要的库。


```powershell
pip install flask pymysql
```

或  

```powershell
conda install flask pymysql
```

此外，在 PyCharm IDE 中，在创建项目时也提供了直接创建Flask项目的选项，创建该项目时会自动帮你安装好Flask框架及其各项依赖。  



数据库选择 MySQL 数据库，也可以自行在官网下载。  

**下载链接：[MySQL :: 下载MySQL安装程序](https://dev.mysql.com/downloads/installer/)**  

**安装教程：[Mysql超详细安装配置教程(保姆级) - 博客园 (cnblogs.com)](https://www.cnblogs.com/canfengfeixue/p/18002244)**  



Postman是一款常用的 API 测试工具，可以方便地进行接口测试、调试和文档编写。在后端开发中非常常用。

**官网链接：[Postman API Platform](https://www.postman.com/)**  



### 2. Python 介绍与 Flask 框架介绍  

其实我想 Python 大家已经很熟悉了，没有什么必要再详细进行介绍。Python 是一种现在被广泛使用的高级编程语言，简单易学，又能够支持多种编程范式，包括面向对象、命令式、函数式的编程等等。我认为 Python 是大学当中每个同学都应当掌握的一种语言，至少要知道 Python 的基础语法，一定程度上会进行应用即可。学习的方法及相关资料可以参考组内技术路线文档。  

**Flask **是一个使用 Python 语言编写的 **Web 框架**，可以让你高效地使用 Python 编写 **Web 程序**。那么什么是 **Web 程序**呢？  

**Web 程序即“网站”或“网页程序”，是指可以通过浏览器进行交互的程序。**虽然我们印象中的 Web 程序似乎都仅仅是指呈现在浏览器上的页面部分，但实际上那些看不见的，在用户界面背后的服务端程序也属于 Web 程序的一部分。我们要学习的**后端开发**就是创建完整可运行的 Web 应用服务端程序的过程，是Web应用程序开发的一部分。后端开发者使用`Java`、`Golang`等语言及其衍生的各种框架、库和解决方案来实现 Web 程序的核心业务逻辑，并向外提供特定的 API，使得 Web 程序能够高效、安全、稳定地运行。  

**Flask** 是一个轻量级的 Web 框架，并且易于使用、灵活、具有可扩展性，非常适合用于小型的项目或是作为一个大型项目的一个模块，对于我们学生来说，完全能够满足需求。因此这个框架成为了我们学习 Web 开发的理想选择。



### 3. 初识 Flask 框架  

从这节开始，我们要使用 Flask 框架创建我们的 Web 程序。

打开 PyCharm，创建新的项目，选择 **Pure Python** 选项，然后设置项目的名称、路径等等信息，并在下方设置这个项目使用的虚拟环境，我们选择 **Custom environment - Select existing** ，Type 选择 **Conda** ，并在下方选择要使用的 **Conda 虚拟环境**，这样就可以使用我们先前创建的虚拟环境了。  

![image-20240806162803766](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240806162803766.png?raw=true)

等待项目创建完成后，我们在项目目录下新建一个 `.py` 文件，命名为 `app.py` ，作为我们的程序的主入口。  

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World, Hello Flask!'
```

首先我们从 **flask** 库中导入我们需要的 **Flask** 包，使用 ``app = Flask(__name__)`` 语句创建一个程序对象。  

然后我们需要为这个程序设置路由，使用 ``@app.route()`` 语句来确定一个 URL 路径，比如这里的 ``@app.route('/')`` 就代表着这个 Web 程序的**根目录**，也就是一般意义上网站的主页。然后我们需要在这个语句下面编写一个请求处理函数，这个函数被 Flask 官方称为**视图函数（View Function）**。当浏览器访问这个 URL 时，这个函数会被触发，函数的返回值会被显示在浏览器的页面上。最后，我们要为这个程序设置入口，在上面的代码块后面添加以下语句：  

```python
if __name__ == '__main__':
    app.run(port=5000, debug=True)
```

应用程序实例 app 的 **run()** 方法会在本地运行上面所编写的程序， `port` 参数表示运行的端口，默认值为5000， `debug=True` 表示开启调试，在调试模式下，发生更改的代码会被 flask 自动重载，无需重新启动服务器。  

运行代码，控制台显示相关信息。  

![image-20240806194425170](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240806194425170.png?raw=true)

显示了一个警告：

> 这是一个开发服务器。请勿在应用部署中使用它。请改用 WSGI 服务器。  
> 

我们目前不必在意这个警告，因为我们仅把 flask 用于开发测试，如果需要实际部署 Web 程序，开发服务器的性能就不足了，需要改用性能更好的服务器。  

点击控制台中显示的链接，打开网页就可以看到视图函数 `index()` 返回的结果了。  

![image-20240806195318004](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240806195318004.png?raw=true)

既然是用网页显示视图函数返回的结果，那么我们自然可以在返回值中使用 **html** 语句：  

```python
@app.route('/')
def index():
    return '<h1>Hello World, Hello Flask!</h1><br><body>这是我的第一个flask程序</body>'
```

刷新浏览器页面就可以看到更新后的视图了。  

![image-20240806200341164](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240806200341164.png?raw=true)

但显然我们不可能只靠在函数返回值中写 html 语句来实现一整个网页界面，因此我们需要使用 **html 模板**来渲染页面视图。在项目目录下新建一个文件夹，命名为 `templates` ，在文件夹中新建一个 html 文件，命名为 `test.html` ，在 IDE 中进行编辑。（如果使用前面提到过的创建 flask 项目的方式创建这个项目，项目目录下将会自带 templates 文件夹，以及后面的 static 文件夹。）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ title }}</title>
</head>
<body>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    {% if image_url %}
        <img src="{{ image_url }}" alt="Image">
    {% endif %}
</body>
</html>
```

同时，修改 `app.py` 的代码。  

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    title = "Hello World! Hello Flask!"
    content = "This is my first flask app！"
    img_url = "./static/pepe.gif"
    return render_template('test.html', title=title, content=content, image_url=img_url)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
```

我们又从 flask 库中导入一个 `render_template()` 函数，这个函数用于将 html 模板渲染到网页视图，flask 会默认在 `templates` 文件夹中寻找模板。 `test.html` 文件需要参数，由 template 函数传入。由于这个 html 文件需要图片资源，我们需要在本地保存静态资源。项目目录下新建 `static` 文件夹，将需要的图片资源放入这个文件夹。具体的图片可以自己选择。  

刷新浏览器页面。  

![image-20240806203452629](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240806203452629.png?raw=true)

*（这里实际上应该是个动图，佩佩太可爱了~）*  

前面的部分我们着重讲了网页视图。**视图函数**这个名称很具有误导性，因为实际上即使你访问的 url 不需要返回视图，在 flask 框架中，你依然需要去实现这个函数来作为访问这个 url 的响应。  

网页界面还需要能做到与用户实现**数据的传递**，我们要学习的后端开发同样要实现前后端的数据传递。那么在flask框架中如何实现数据的传递呢？主要是通过 **HTTP 请求和响应**来实现的。  

* 通过 **URL 参数**传递数据

  **从 flask 库中导入** `request` ，这样就可以解析前端发送的请求了。然后再添加一个 url 路径和对应的视图函数。  

  ```python
@app.route('/test_get', methods=['GET'])
  def test_get():
      user_name = request.args.get("user_name")
      return "Hello," + user_name
  ```
  
  在设置 url 时，在后面传了一个参数 ``methods=['GET']`` ，表示这个路径使用了 `GET` 请求方式。  

  ``user_name = request.args.get("user_name")`` 语句表示从 `args` ，也就是路径参数列表中取得参数。  

  运行程序，打开浏览器，在输入路径时要在后面添加参数：``http://127.0.0.1:5000/test_get?user_name=张三``  

  ![image-20240807101114058](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807101114058.png?raw=true)

  如果存在多个参数需要传递，中间使用 **“&“** 号进行连接。  

* 通过**表单**传递数据

  当我们在网页中填写了一些文本框，点击了提交，这些数据就会通过表单的形式进行传递。我们先编写一个带有表单的 html 页面 `login.html` 。
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Login Page</title>
  </head>
  <body>
      <h2>Login Form</h2>
      <form action="/test_post" method="post">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required><br><br>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required><br><br>
          <input type="submit" value="Login">
      </form>
  </body>
  </html>
  ```

  `<form>` 标签表示这是供用户输入的表单。
  
  然后编写后端处理的逻辑。
  
  ```python
  @app.route('/login')
  def login():
      return render_template('login.html')
  
  @app.route('/test_post', methods=['POST'])
  def test_post():
      user_name = request.form.get("username")
      password = request.form.get("password")
      return redirect(url_for('success', user_name=user_name))
  
  @app.route('/success', methods=['GET'])
  def success():
      user_name = request.args.get("user_name")
      return "Hello,"+user_name
  ```

  ``methods=['POST']`` 表示使用了 `POST` 请求方式。用户在填写完表单，点击 “Login” 后，表单的数据就会以 `POST` 请求方式传递给 `/test_post` 路径，在 `test_post()` 视图函数中处理后，又以 `GET` 方式传递给了 `/success` 。（注意，`test_post()` 函数就是一个不返回视图的视图函数，在处理完表单数据后，立刻重定向到了成功页面。别忘了导入 **`redirect()` 和 `url_for() `** 这两个函数哦。）  
  
  ![image-20240807111435985](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807111435985.png?raw=true)

  ![image-20240807111504729](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807111504729.png?raw=true)

* 同一个路径下**同时存在 `GET` 和 `POST` **两种请求方法  

  此时可以通过 `request` 的 `method` 属性来区分向这个路径发起请求的方式，然后编写对应的处理方式。  
  ```python
  @app.route('/test_request', methods=['GET', 'POST'])  # 同时支持get和post方法
  def test_request():
      if request.method == 'GET':
          return redirect(url_for('login'))
      elif request.method == 'POST':
          user_name = request.form.get("username")
          password = request.form.get("password")
          return redirect(url_for('success', user_name=user_name))
  ```

  如果直接访问 `/test_request` 路径，将会跳转回登录页，但如果是 `POST` 方式发起的请求，将会跳转到成功页。  

* 传递 **JSON** 数据  

  **JSON (JavaScript Object Notation)** 是一种轻量级的数据交换格式，被广泛应用于前后端之间的数据传输交换。JSON 格式的数据都是以键值对存在的，类似于 Python 的字典类型，并且支持嵌套，也就是可以**“将对象作为值”**。下面给出一个 JSON 格式的数据示例。  
  
  ```json
  {
    "name": "Zhang San",
    "age": 20,
    "isMale": true,
    "hobbies": ["reading", "traveling"],
    "address": {
      "city": "Dalian",
      "detail": "Jinzhou District"
    },
    "email": null
  }
  ```

  对于后端开发来说，关于 JSON，需要做的只有两件事：**解析前端发送过来的请求中的 JSON 数据**和**响应请求将 JSON 数据发送给前端**。  
  
  要接收并解析 JSON 数据，可以使用 `request` 的 `json` 属性。  
  
  ```python
  @app.route('/get_json', methods=['POST'])
  def get_json():
      data = request.json
      username = data['username']
      password = data['password']
      return f'Data received. username:{username} and password:{password}'
  ```
  
  这个路径可以接收前端发来的带有 JSON 数据的 POST 请求，将其中的 JSON 数据解析出来存在 `data` 变量中，可以用访问字典的方式访问 `data` 中的数据。  
  
  如果要返回 JSON 数据给前端，需要将数据转成 JSON 的格式，flask 库给我们提供了简便的转换方法- `jsonify()`   
  
  ```py
  @app.route('/response_json', methods=['GET'])
  def response_json():
      response_data = {
          'message': 'Success',
          'data': {
              'id': 1,
              'name': 'Zhang San'
          }
      }
      return jsonify(response_data)
  ```
  
  请注意，JSON 格式的键**必须以双引号包裹**，字符串类型的值也是一样，但你在 Python 中可以不用在意这些，flask 库中封装好的方法会为我们做好这些事情。  
  
  顺便推荐一个简单好用的小插件：**`Json Parser` **。这个插件可以把 JSON 数据转换成较美观的格式，看起来就会比较方便（尤其是在键值对的数量多或嵌套层数多的时候）。这个插件也可以检查 JSON 数据的格式是否正确。  
  
  ![image-20240807145618059](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807145618059.png?raw=true)
  
  ![image-20240807145705246](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807145705246.png?raw=true)
  
  

### 4. 使用 Postman 向后端发送请求  

上一节中我们已经了解过了后端如何处理前端发送的请求并作出响应。在实际开发的过程中，前后端分离，开发阶段后端很难与前端进行交互，**Postman 工具**可以帮助我们轻松地对后端接口进行测试。  

由于我们的服务器运行在本地， Web 版的 Postman 无法对本地接口进行测试，所以我们**需要下载桌面版的 Postman 应用程序**。  

打开 Postman ，选择新建请求。  

![image-20240807154457284](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807154457284.png?raw=true)

我们先来测试 GET 请求。  

```python
@app.route('/test_get', methods=['GET'])
def test_get():
    user_name = request.args.get("user_name")
    return "Hello," + user_name
```

选择 `GET` 方法，在后面输入路径： `127.0.0.1:5000/test_get` ，并在 `Params` 中填入参数。  

![image-20240807155505351](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807155505351.png?raw=true)

点击发送请求，下方 `Response` 区域显示了返回的结果。因为返回的是 html 文本，所以我们选择 `Preview` 。成功接收到了返回的数据。  

![image-20240807155739960](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807155739960.png?raw=true)

这一次向返回 JSON 数据的路径发送 GET 请求。  

```python
@app.route('/response_json', methods=['GET'])
def response_json():
    response_data = {
        'message': 'Success',
        'data': {
            'id': 1,
            'name': 'Zhang San'
        }
    }
    return jsonify(response_data)
```

返回的是 JSON 数据，选择 `Pretty` 查看即可。同样成功拿到了返回的数据。  

![image-20240807160511890](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807160511890.png?raw=true)

然后对 POST 请求进行测试。  

```python
@app.route('/get_json', methods=['POST'])
def get_json():
    data = request.json
    username = data['username']
    password = data['password']
    return f'Data received. username:{username} and password:{password}'
```

这个路径需要我们发送一个 JSON 数据。选择 `POST` 方法，输入好路径后，在 `Body` 中选择 `raw` 输入 JSON 数据。  

![image-20240807161335582](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807161335582.png?raw=true)

发送 POST 请求，返回了 html 文本。在发送请求后，后端服务器从请求中解析出了 JSON 数据，返回一个格式化的字符串，将 JSON 中的数据放在字符串中。  

![image-20240807161500587](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240807161500587.png?raw=true)

*（Postman 还是非常简单易用的，而且还免费，太良心了）*  



### 5. 使用 pymysql 库操作 MySQL 数据库  

现在我们要学习如何将接收到的数据写入到数据库当中。在 Python 中，我们可以使用 **pymysql **库来方便我们操作 MySQL 数据库。  

首先确保已经成功安装了 MySQL ，并且启用了 MySQL Server 服务。（如果你不确定是否已经启用，按下 Win 键，搜索服务，在弹出的页面中查找 **MySQL80** 服务进行查看，MySQL80 是安装时的默认服务名称，如果你更改了这个名称，就去找修改后的名称）  

我们要先新建数据库与数据表。打开 **MySQL 8.0 Command Line Client** ，输入管理员密码。进入命令行程序后，输入创建数据库指令。  

```mysql
mysql> CREATE DATABASE test;
```

别忘了在最后加上**分号**，这代表着一条命令的结束。然后改变当前操作的数据库。  

```mysql
mysql> USE test
```

输入建表指令。  

```mysql
mysql> CREATE TABLE test(
  -> id INT NOT NULL AUTO_INCREMENT,
  -> username VARCHAR(20) NOT NULL,
  -> password VARCHAR(20) NOT NULL,
  -> PRIMARY KEY ( id )
  -> )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

这样就成功创建了一个 MySQL 表格。回到 PyCharm，我们先封装一个类用于对数据库进行操作。新建文件 `database.py` 。

```python
import pymysql


class Database:
    def __init__(self, host, user, password, database):
        self.connection = pymysql.connect(host=host, user=user, password=password, db=database, charset='utf8mb4')
        self.cursor = self.connection.cursor()

    def __del__(self):
        self.cursor.close()
        self.connection.close()

    def insert(self, table, data):
        keys = ', '.join(data.keys())
        values = ', '.join(['%s'] * len(data))
        sql = 'INSERT INTO {} ({}) VALUES ({})'.format(table, keys, values)
        try:
            self.cursor.execute(sql, tuple(data.values()))
            self.connection.commit()
            return 'Data inserted successfully.'
        except pymysql.Error as e:
            self.connection.rollback()
            return str(e)
```

`Database` 类有两个属性， `connection` 是与数据库的连接，`cursor` 是操作数据库的游标对象，全部在实例创建时初始化完成。`insert()` 方法可以将数据插入指定的表，`data` 以字典形式传入。  

``values = ', '.join(['%s'] * len(data))`` 语句中，**'%s'** 起到了占位符的作用，值可以在执行 sql 语句时传入。无论是字符串、数字或者其他类型，都是 **%s** 这个占位符，MySQL 会在执行时将变量解释成合适的内容。 **%s不能加引号。**  

这个方法最后返回的是一个字符串，如果失败，会回滚操作，并返回错误信息。（其实这样写返回信息并不是非常规范，此处仅作示范讲解用）  

再回到 `app.py` ，写一个新的路径用于测试数据库插入数据的功能。别忘了 ``from database import Database`` 。 

```python
@app.route('/save_data_to_mysql', methods=['POST'])
def save_data_to_mysql():
    data = request.json
    username = data['username']
    password = data['password']

    db_config = {
        'host': 'localhost',
        'user': 'root',
        'password': '12345678',		#此处填你自己设置的管理员密码
        'database': 'test'
    }
    db = Database(**db_config)
    data_to_insert = {
        'username': username,
        'password': password,
    }
    result = db.insert('user', data_to_insert)
    if result == 'Data inserted successfully.':
        status = 'Succeeded'
    else:
        status = 'Failed'
    return f"Commit Status:{status}, Message:{result}"
```

字典 `db_config` 存储数据库配置信息。``db = Database(**db_config)`` ，**`**db_config`** 表示以字典形式传参。  

启动程序，使用 Postman 向该路径发送一个 POST 请求进行测试。  

![image-20240808110959717](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240808110959717.png?raw=true)

返回的信息显示数据已经提交成功了，我们可以打开 Navicat 来检验一下数据是否真的已经存入了数据库。在 Navicat 中与 MySQL 数据库进行连接，打开 `test` 数据库的 `user` 数据表，数据已经成功存入。

![image-20240808111245301](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240808111245301.png?raw=true)

当然你也可以选择在命令行中查询数据表来检验，不过这就比较麻烦了，在这种地方还是可以偷一下懒的。  

使用 pymysql 库对数据库进行其他操作也是一样，都是使用 sql 语句，只要懂一点 sql 就能轻松掌握。



### 参考资料  

[Flask 入门教程 (helloflask.com)](https://tutorial.helloflask.com/)  

[Python后端技术栈(一)-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/article/1332053)  

以及B站的一大堆视频...

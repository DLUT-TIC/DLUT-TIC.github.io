---
title: Flask 后端开发 - 响应
date: 2024/9/19
categories:
 - be
author: Limpid-8818
tags:
 - 后端
 - Python
 - Flask
---
## Flask 后端开发 - 响应

### 目录  

1. HTTP 请求与响应
2. Flask 的 Response 类型对象
3. 规范响应  



### 1. HTTP 请求与响应

在前后端分离的开发当中，前后端大部分的交互都是依赖 **HTTP** 请求与响应进行的。后端开发需要为前端提供 API ，因此我们需要了解 HTTP 请求响应，来写出规范的、合适的 API 。  

HTTP（超文本传输协议，HyperText Transfer Protocol）是互联网上应用最为广泛的一种网络协议。HTTP 通信包括请求与响应两个基本组成部分。通常由客户端发起一个请求，建立起一个到服务器的连接，服务器监听客户端的请求，在接收到请求后进行解析，并作出响应，把消息发送回客户端。客户端与服务器之间发送的这两个消息就叫做 **HTTP 请求与响应**。  

在介绍请求与响应之间，我们先了解一下 **URL** 。**URL(UniformResourceLocator统⼀资源定位符)** 是用于完整地描述 Internet 上网页和其他资源的地址的一种标识方法。互联网上的任何资源都有一个唯一的 URL 与之对应，它包含了文件的位置以及客户端应该如何处理这个文件。URL 的格式在因特网标准 RFC1738 中进行了约定。  

基本格式： scheme://host[:port]/path/…/[?query-string#anchor ]

* scheme： 协议（例如： http, https, ftp）
* host： 服务器的 IP 地址或者域名
* port： 服务器的端口
* path：访问资源的路径
* query-string： 参数列表， 发送给 http 服务器的数据
* anchor： 锚点（跳转到网页的指定锚点位置）  

可以看到，URL 开头的“协议”当中包括了 HTTP 协议。URL 可以看作是 HTTP 通信的目标地址，URL 标记了资源的位置，HTTP 负责来提交和获取资源。  



HTTP 请求信息包含以下内容：  

1. 请求行：包括 HTTP 请求方法（GET，POST等）、请求 URL 和 HTTP 版本号。
2. 请求头部：包括一系列关于请求的元数据，如Host、User-Agent、Accept等。
3. 空行：请求头部和请求正文之间需要空一行。
4. 请求正文（可选）：包含请求提交的数据，如表单数据、文件等。

请求行中的可用的请求方法由 HTTP 版本号决定。HTTP 0.9 只有基本的 GET 功能。从 HTTP 1.0 开始，HTTP 协议有了完善的请求/响应模型，定义了 GET，POST 和 HEAD 三种请求方法。HTTP 1.1 在 1.0 的基础上新增了OPTIONS，PUT，DELETE，TRACE 和 CONNECT 五种方法。其中 **GET 和 POST** 方法最为常用。  

请求头由若干键值对组成，每个键值对占一行。请求头数据有很多类型，也可以自己进行定义。下面是一些常见的请求头信息。  

* **Host ：** 表示服务器主机的地址和端口。

* **Content-Length ：** 表示 body 中的数据长度。

* **Content-Type ：** 表示请求的 body 中的数据格式（图片，视频，文本...）。
	* `text/html`：表示响应正文是 HTML 格式的文本，通常用于网页内容的展示。
	* `text/css`：表示响应正文是 CSS 格式的文本，通常用于网页样式的设置和控制。
	* `application/javascript`：表示响应正文是 JavaScript 格式的文本，通常用于网页动态效果、事件处理等脚本编程。
	* `application/json`：表示响应正文是 JSON 格式的文本，通常用于数据传输、交换等。
	
* **User-Agent ：** 表示客户端的属性。
* **Cookie ：** Cookie 是一种在客户端（通常是 Web 浏览器）和服务器之间传递的小型数据片段，它存储在用户的计算机上，并由浏览器在之后的请求中发送到同一服务器。

请求的正文，也就是 body 部分，是请求中正式携带数据的部分。这个数据可以是各种格式，根据请求的需要来决定。请求也可以没有正文，例如 GET 方法一般通过 URL 参数列表传递数据，这个时候就可以不需要正文了。



HTTP 响应信息包含以下内容：

1. 状态行：包括 HTTP 版本、响应状态码和对应的状态消息。
2. 响应头部：包括一系列关于响应的元数据，如 Content-Type、Content-Length、Server 等。
3. 空行：响应头部和响应正文之间需要空一行。
4. 响应正文：包含响应的数据，如 HTML、XML、JSON 等文档格式、图片、音频、视频等二进制数据等等。

状态码（Status Code）是在 HTTP 协议中用于表示服务器对客户端请求的处理结果的数字代码。通过状态码，客户端可以了解到请求的处理结果，如访问是否成功、是否需要重定向、是否存在错误等。以下是一些常见的状态码。  

- 100：继续（Continue）- 表示服务器接收到请求，客户端可以继续发送请求的剩余部分。
- 200：成功（OK）- 表示请求已成功处理，并返回相应的内容。
- 204：无内容（No Content）- 表示请求已成功处理，但没有返回任何内容。
- 400：错误请求（Bad Request）- 请求无效或不可理解。
- 403：不可访问（Forbidden）- 表示访问被拒绝，有的页面通常需要用户具有⼀定的权限才能访问。
- 404：未找到（Not Found）- 请求的资源不存在。
- 500：服务器内部错误（Internal Server Error）- 服务器遇到了意外情况，无法完成请求。
- 504：超时（GatewayTimeout）- 当服务器负载比较大的时候，服务器处理单条请求的时候消耗的时间就会很长，就可能会导致出现超时的情况。  

前端可以根据通过设置 HTTP 拦截器，针对响应信息的状态码或状态信息来执行对应的操作。  

响应头部和正文与请求较为接近。在对HTTP响应进行解析时，前端需要读取并处理响应的正文部分，以获取服务器返回的具体数据内容。具体的处理方法依赖于正文的类型和格式，通常可以使用相应的解析库或者工具来处理。例如，在读取HTML文档时，可以使用浏览器或者其他HTML解析器来解析HTML文件，并将其中的内容渲染到用户界面上。



### 2. Flask 的 Response 类型对象

在 Flask 框架中，对 HTTP 请求的响应由视图函数的返回值来决定，且返回值应当是 **Response** 类型的。然而，直接返回一个字符串、一个 html 模板或是一个 JSON 数据都是被允许的，这是因为视图函数在返回时会隐式地将返回内容转换成 Response 类型，或是说，为 body 部分包裹上了状态行和响应头的内容（返回内容即为响应的正文部分，这个部分的内容不会发生改变）。  

视图函数的返回值自动转换为 Response 类型的转换逻辑如下：

- 如果返回的是一个合法的 Response 对象，则直接返回。
- 如果返回的是一个字符串，那么 Flask 会重新创建一个 werkzeug.wrappers.Response 对象，Response 将该字符串作为主体，状态码为200，类型为 text/html，然后返回该 Response 对象。返回的是 JSON 的话同理，类型为 application/json。
- 如果返回的是一个元组，元祖中的数据类型是(response,status,headers)。status 值会覆盖默认的200状态码，headers 可以是一个列表或者字典，作为额外的响应头。
- 如果以上条件都不满足，Flask会假设返回值是一个合法的WSGIt应用程序，并通过Response.force_type(rv,request.environ)转换为一个请求对象。

显然，我们可以通过手动创建 Response 对象的方式来改变状态行和响应头中的内容。  

* 直接构造 **Response** 对象

  ```python
  from flask import Response, make_response
  
  @app.route('/test_response', methods=['GET'])
  def test_response():
      resp = Response('Hello, Flask!', status=200, content_type='text/html', headers={'Resp-Type':'test'})
      return resp
  ```

  导入 Response ，在 `/test_response` 路径下，直接用 Response 构建了一个响应对象。第一个参数是响应的正文，后面则设置了状态码，正文内容类型和响应头。其中响应头是在常规内容的基础上额外添加传入的内容。使用 Postman 进行测试。  

  ![image-20240810193453397](https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/image-20240810193453397.png?raw=true)

  可以看到，响应头中出现了我们手动添加的 **`Resp-Type:test`** 。  

  此外，还可以在创建好 Response 对象后，对其设置 Cookie 信息等等。  

* 使用 **`make_response()`** 创建响应对象

  ```python
  @app.route('/test_make_response', methods=['GET'])
  def test_make_response():
      resp = make_response('Hello, Flask!', 200, {'Resp-Type':'test'})
      return resp
  ```
  
  这个路径所返回的内容和上面使用 Response 构建的响应对象返回的内容没有任何区别。所以这两种方式不管用哪种都是一样的。顺带一提，不手动创建响应对象，直接将参数 `('Hello, Flask!', 200, {'Resp-Type':'test'})` 作为视图函数返回值来返回也能得到一样的结果，因为 `make_response()` 函数的参数是一个元组，直接返回这个参数满足了上面所说的自动转换逻辑的第三种情况。



### 3. 规范响应

其实这个标题有点起得过大了，一方面 HTTP 响应本身就是一个很规范化的东西，并不需要我们再去做太多约束，另一方面请求与响应需要前后端之间做好协商，每个项目的情况都会有所不同，需要根据不同的项目而变化。但是，我们开发后端，为前端提供 API ，响应的正文内容一般都是 JSON 数据，我们可以在如何规范返回 JSON 数据上花点工夫。Flask 框架允许在视图函数中返回**继承自 Response 类**的自定义类对象，因此我们可以封装一个自定义的返回 JSON 数据的响应类，以此来简化代码，避免重复进行 Response 的设置。  

```python
from flask import Response, jsonify


class JsonResponse(Response):
    default_mimetype = 'application/json'

    @classmethod
    def force_type(cls, response, environ=None):
        if isinstance(response, dict):
            response = jsonify(response)
        return super(JsonResponse, cls).force_type(response, environ)
```

上面我们声明了一个 `JsonResponse` 类，继承自 `Response` 类，设置了 `default_mimetype` 为 JSON 类型，重写了 `force_type()` 方法，重写过后的这个方法允许视图函数直接返回字典类型的对象，如果返回了字典，会通过 `jsonify()` 转换为 JSON 数据，再调用父类 `Response` 的同名方法。  

如果要使用自定义的响应类，要设置 Web 应用实例的 `response_class` 属性为自定义的响应类。  

```python
from JsonResponse import JsonResponse

app.response_class = JsonResponse
```

现在，你可以直接在视图函数中返回字典作为 JSON 数据。你还可以根据项目的需要更改这个自定义类，例如为 JSON 添加一些外层的包装等等。利用好自定义响应类可以为我们设计 API 节省不少的时间。

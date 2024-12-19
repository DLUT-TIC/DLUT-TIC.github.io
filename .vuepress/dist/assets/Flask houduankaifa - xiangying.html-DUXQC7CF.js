import{_ as n,o as a,c as e,b as p}from"./app-COWjHGTC.js";const t={};function o(l,s){return a(),e("div",null,s[0]||(s[0]=[p(`<h2 id="flask-后端开发-响应" tabindex="-1"><a class="header-anchor" href="#flask-后端开发-响应"><span>Flask 后端开发 - 响应</span></a></h2><h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h3><ol><li>HTTP 请求与响应</li><li>Flask 的 Response 类型对象</li><li>规范响应</li></ol><h3 id="_1-http-请求与响应" tabindex="-1"><a class="header-anchor" href="#_1-http-请求与响应"><span>1. HTTP 请求与响应</span></a></h3><p>在前后端分离的开发当中，前后端大部分的交互都是依赖 <strong>HTTP</strong> 请求与响应进行的。后端开发需要为前端提供 API ，因此我们需要了解 HTTP 请求响应，来写出规范的、合适的 API 。</p><p>HTTP（超文本传输协议，HyperText Transfer Protocol）是互联网上应用最为广泛的一种网络协议。HTTP 通信包括请求与响应两个基本组成部分。通常由客户端发起一个请求，建立起一个到服务器的连接，服务器监听客户端的请求，在接收到请求后进行解析，并作出响应，把消息发送回客户端。客户端与服务器之间发送的这两个消息就叫做 <strong>HTTP 请求与响应</strong>。</p><p>在介绍请求与响应之间，我们先了解一下 <strong>URL</strong> 。<strong>URL(UniformResourceLocator统⼀资源定位符)</strong> 是用于完整地描述 Internet 上网页和其他资源的地址的一种标识方法。互联网上的任何资源都有一个唯一的 URL 与之对应，它包含了文件的位置以及客户端应该如何处理这个文件。URL 的格式在因特网标准 RFC1738 中进行了约定。</p><p>基本格式： scheme://host[:port]/path/…/[?query-string#anchor ]</p><ul><li>scheme： 协议（例如： http, https, ftp）</li><li>host： 服务器的 IP 地址或者域名</li><li>port： 服务器的端口</li><li>path：访问资源的路径</li><li>query-string： 参数列表， 发送给 http 服务器的数据</li><li>anchor： 锚点（跳转到网页的指定锚点位置）</li></ul><p>可以看到，URL 开头的“协议”当中包括了 HTTP 协议。URL 可以看作是 HTTP 通信的目标地址，URL 标记了资源的位置，HTTP 负责来提交和获取资源。</p><p>HTTP 请求信息包含以下内容：</p><ol><li>请求行：包括 HTTP 请求方法（GET，POST等）、请求 URL 和 HTTP 版本号。</li><li>请求头部：包括一系列关于请求的元数据，如Host、User-Agent、Accept等。</li><li>空行：请求头部和请求正文之间需要空一行。</li><li>请求正文（可选）：包含请求提交的数据，如表单数据、文件等。</li></ol><p>请求行中的可用的请求方法由 HTTP 版本号决定。HTTP 0.9 只有基本的 GET 功能。从 HTTP 1.0 开始，HTTP 协议有了完善的请求/响应模型，定义了 GET，POST 和 HEAD 三种请求方法。HTTP 1.1 在 1.0 的基础上新增了OPTIONS，PUT，DELETE，TRACE 和 CONNECT 五种方法。其中 <strong>GET 和 POST</strong> 方法最为常用。</p><p>请求头由若干键值对组成，每个键值对占一行。请求头数据有很多类型，也可以自己进行定义。下面是一些常见的请求头信息。</p><ul><li><p><strong>Host ：</strong> 表示服务器主机的地址和端口。</p></li><li><p><strong>Content-Length ：</strong> 表示 body 中的数据长度。</p></li><li><p><strong>Content-Type ：</strong> 表示请求的 body 中的数据格式（图片，视频，文本...）。</p><ul><li><code>text/html</code>：表示响应正文是 HTML 格式的文本，通常用于网页内容的展示。</li><li><code>text/css</code>：表示响应正文是 CSS 格式的文本，通常用于网页样式的设置和控制。</li><li><code>application/javascript</code>：表示响应正文是 JavaScript 格式的文本，通常用于网页动态效果、事件处理等脚本编程。</li><li><code>application/json</code>：表示响应正文是 JSON 格式的文本，通常用于数据传输、交换等。</li></ul></li><li><p><strong>User-Agent ：</strong> 表示客户端的属性。</p></li><li><p><strong>Cookie ：</strong> Cookie 是一种在客户端（通常是 Web 浏览器）和服务器之间传递的小型数据片段，它存储在用户的计算机上，并由浏览器在之后的请求中发送到同一服务器。</p></li></ul><p>请求的正文，也就是 body 部分，是请求中正式携带数据的部分。这个数据可以是各种格式，根据请求的需要来决定。请求也可以没有正文，例如 GET 方法一般通过 URL 参数列表传递数据，这个时候就可以不需要正文了。</p><p>HTTP 响应信息包含以下内容：</p><ol><li>状态行：包括 HTTP 版本、响应状态码和对应的状态消息。</li><li>响应头部：包括一系列关于响应的元数据，如 Content-Type、Content-Length、Server 等。</li><li>空行：响应头部和响应正文之间需要空一行。</li><li>响应正文：包含响应的数据，如 HTML、XML、JSON 等文档格式、图片、音频、视频等二进制数据等等。</li></ol><p>状态码（Status Code）是在 HTTP 协议中用于表示服务器对客户端请求的处理结果的数字代码。通过状态码，客户端可以了解到请求的处理结果，如访问是否成功、是否需要重定向、是否存在错误等。以下是一些常见的状态码。</p><ul><li>100：继续（Continue）- 表示服务器接收到请求，客户端可以继续发送请求的剩余部分。</li><li>200：成功（OK）- 表示请求已成功处理，并返回相应的内容。</li><li>204：无内容（No Content）- 表示请求已成功处理，但没有返回任何内容。</li><li>400：错误请求（Bad Request）- 请求无效或不可理解。</li><li>403：不可访问（Forbidden）- 表示访问被拒绝，有的页面通常需要用户具有⼀定的权限才能访问。</li><li>404：未找到（Not Found）- 请求的资源不存在。</li><li>500：服务器内部错误（Internal Server Error）- 服务器遇到了意外情况，无法完成请求。</li><li>504：超时（GatewayTimeout）- 当服务器负载比较大的时候，服务器处理单条请求的时候消耗的时间就会很长，就可能会导致出现超时的情况。</li></ul><p>前端可以根据通过设置 HTTP 拦截器，针对响应信息的状态码或状态信息来执行对应的操作。</p><p>响应头部和正文与请求较为接近。在对HTTP响应进行解析时，前端需要读取并处理响应的正文部分，以获取服务器返回的具体数据内容。具体的处理方法依赖于正文的类型和格式，通常可以使用相应的解析库或者工具来处理。例如，在读取HTML文档时，可以使用浏览器或者其他HTML解析器来解析HTML文件，并将其中的内容渲染到用户界面上。</p><h3 id="_2-flask-的-response-类型对象" tabindex="-1"><a class="header-anchor" href="#_2-flask-的-response-类型对象"><span>2. Flask 的 Response 类型对象</span></a></h3><p>在 Flask 框架中，对 HTTP 请求的响应由视图函数的返回值来决定，且返回值应当是 <strong>Response</strong> 类型的。然而，直接返回一个字符串、一个 html 模板或是一个 JSON 数据都是被允许的，这是因为视图函数在返回时会隐式地将返回内容转换成 Response 类型，或是说，为 body 部分包裹上了状态行和响应头的内容（返回内容即为响应的正文部分，这个部分的内容不会发生改变）。</p><p>视图函数的返回值自动转换为 Response 类型的转换逻辑如下：</p><ul><li>如果返回的是一个合法的 Response 对象，则直接返回。</li><li>如果返回的是一个字符串，那么 Flask 会重新创建一个 werkzeug.wrappers.Response 对象，Response 将该字符串作为主体，状态码为200，类型为 text/html，然后返回该 Response 对象。返回的是 JSON 的话同理，类型为 application/json。</li><li>如果返回的是一个元组，元祖中的数据类型是 (response,status,headers)。status 值会覆盖默认的200状态码，headers 可以是一个列表或者字典，作为额外的响应头。</li><li>如果以上条件都不满足，Flask会假设返回值是一个合法的 WSGI 应用程序，并通过 Response.force_type(rv,request.environ) 转换为一个请求对象。</li></ul><p>显然，我们可以通过手动创建 Response 对象的方式来改变状态行和响应头中的内容。</p><ul><li><p>直接构造 <strong>Response</strong> 对象</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Response<span class="token punctuation">,</span> make_response</span>
<span class="line"></span>
<span class="line"><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/test_response&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">test_response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    resp <span class="token operator">=</span> Response<span class="token punctuation">(</span><span class="token string">&#39;Hello, Flask!&#39;</span><span class="token punctuation">,</span> status<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">,</span> content_type<span class="token operator">=</span><span class="token string">&#39;text/html&#39;</span><span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;Resp-Type&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> resp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入 Response ，在 <code>/test_response</code> 路径下，直接用 Response 构建了一个响应对象。第一个参数是响应的正文，后面则设置了状态码，正文内容类型和响应头。其中响应头是在常规内容的基础上额外添加传入的内容。使用 Postman 进行测试。</p><p><img src="https://github.com/Limpid-8818/MarkdownPics/blob/main/duttic/flask后端开发/image-20240810193453397.png?raw=true" alt="image-20240810193453397"></p><p>可以看到，响应头中出现了我们手动添加的 <strong><code>Resp-Type:test</code></strong> 。</p><p>此外，还可以在创建好 Response 对象后，对其设置 Cookie 信息等等。</p></li><li><p>使用 <strong><code>make_response()</code></strong> 创建响应对象</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line"><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/test_make_response&#39;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">test_make_response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    resp <span class="token operator">=</span> make_response<span class="token punctuation">(</span><span class="token string">&#39;Hello, Flask!&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;Resp-Type&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> resp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个路径所返回的内容和上面使用 Response 构建的响应对象返回的内容没有任何区别。所以这两种方式不管用哪种都是一样的。顺带一提，不手动创建响应对象，直接将参数 <code>(&#39;Hello, Flask!&#39;, 200, {&#39;Resp-Type&#39;:&#39;test&#39;})</code> 作为视图函数返回值来返回也能得到一样的结果，因为 <code>make_response()</code> 函数的参数是一个元组，直接返回这个参数满足了上面所说的自动转换逻辑的第三种情况。</p></li></ul><h3 id="_3-规范响应" tabindex="-1"><a class="header-anchor" href="#_3-规范响应"><span>3. 规范响应</span></a></h3><p>其实这个标题有点起得过大了，一方面 HTTP 响应本身就是一个很规范化的东西，并不需要我们再去做太多约束，另一方面请求与响应需要前后端之间做好协商，每个项目的情况都会有所不同，需要根据不同的项目而变化。但是，我们开发后端，为前端提供 API ，响应的正文内容一般都是 JSON 数据，我们可以在如何规范返回 JSON 数据上花点工夫。Flask 框架允许在视图函数中返回<strong>继承自 Response 类</strong>的自定义类对象，因此我们可以封装一个自定义的返回 JSON 数据的响应类，以此来简化代码，避免重复进行 Response 的设置。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Response<span class="token punctuation">,</span> jsonify</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">JsonResponse</span><span class="token punctuation">(</span>Response<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    default_mimetype <span class="token operator">=</span> <span class="token string">&#39;application/json&#39;</span></span>
<span class="line"></span>
<span class="line">    <span class="token decorator annotation punctuation">@classmethod</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">force_type</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> response<span class="token punctuation">,</span> environ<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token builtin">dict</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            response <span class="token operator">=</span> jsonify<span class="token punctuation">(</span>response<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span>JsonResponse<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>force_type<span class="token punctuation">(</span>response<span class="token punctuation">,</span> environ<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们声明了一个 <code>JsonResponse</code> 类，继承自 <code>Response</code> 类，设置了 <code>default_mimetype</code> 为 JSON 类型，重写了 <code>force_type()</code> 方法，重写过后的这个方法允许视图函数直接返回字典类型的对象，如果返回了字典，会通过 <code>jsonify()</code> 转换为 JSON 数据，再调用父类 <code>Response</code> 的同名方法。</p><p>如果要使用自定义的响应类，要设置 Web 应用实例的 <code>response_class</code> 属性为自定义的响应类。</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre class="language-python"><code><span class="line"><span class="token keyword">from</span> JsonResponse <span class="token keyword">import</span> JsonResponse</span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span>response_class <span class="token operator">=</span> JsonResponse</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，你可以直接在视图函数中返回字典作为 JSON 数据。你还可以根据项目的需要更改这个自定义类，例如为 JSON 添加一些外层的包装等等。利用好自定义响应类可以为我们设计 API 节省不少的时间。</p>`,35)]))}const c=n(t,[["render",o],["__file","Flask houduankaifa - xiangying.html.vue"]]),r=JSON.parse('{"path":"/blogs/backEnd/Flask houduankaifa - xiangying.html","title":"Flask 后端开发 - 响应","lang":"zh-CN","frontmatter":{"title":"Flask 后端开发 - 响应","date":"2024/9/19","categories":["backEnd"],"author":"Limpid-8818","tags":["后端","Python","Flask"]},"headers":[{"level":2,"title":"Flask 后端开发 - 响应","slug":"flask-后端开发-响应","link":"#flask-后端开发-响应","children":[{"level":3,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":3,"title":"1. HTTP 请求与响应","slug":"_1-http-请求与响应","link":"#_1-http-请求与响应","children":[]},{"level":3,"title":"2. Flask 的 Response 类型对象","slug":"_2-flask-的-response-类型对象","link":"#_2-flask-的-response-类型对象","children":[]},{"level":3,"title":"3. 规范响应","slug":"_3-规范响应","link":"#_3-规范响应","children":[]}]}],"git":{"createdTime":1726741400000,"updatedTime":1726742038000,"contributors":[{"name":"Limpid-8818","email":"157373409+Limpid-8818@users.noreply.github.com","commits":3}]},"filePathRelative":"blogs/backEnd/Flask 后端开发 - 响应.md"}');export{c as comp,r as data};

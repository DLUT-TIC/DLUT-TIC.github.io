import{_ as i,r as d,o as t,c,b as s,d as e,a,e as l}from"./app-DPaJMdt_.js";const r={},p=l('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介：</span></a></h1><h2 id="js简介" tabindex="-1"><a class="header-anchor" href="#js简介"><span>JS简介：</span></a></h2><h3 id="什么是js" tabindex="-1"><a class="header-anchor" href="#什么是js"><span>什么是JS：</span></a></h3><p>JS编程语言写出来的程序被称为<strong>脚本</strong> 它们可以被直接写在网页的 HTML 中，在页面加载的时候自动执行。脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。</p><p><strong>浏览器嵌入了一种JavaScript引擎（在这里我们把JavaScript引擎称为<strong><strong>JS</strong></strong>引擎，又称为：JavaScript<strong><strong>虚拟机</strong></strong>），而JS引擎它可以把JS代码解析成浏览器能够识别的代码，因此JS代码可以在含有JS引擎的浏览器中运行。</strong></p><p>不同的JS引擎有不同的代号，例如：</p><p>Chrome 和 Opera 中的 JS引擎------V8引擎</p><p><strong>引擎是如何工作的？</strong></p><p>引擎很复杂，但是基本原理很简单。</p><ol><li><p>引擎（如果是浏览器，则引擎被嵌入在其中）读取（“解析”）脚本。</p></li><li><p>然后，引擎将脚本转化（“编译”）为机器语言。</p></li><li><p>然后，机器代码快速地执行。</p></li></ol><h3 id="js功能" tabindex="-1"><a class="header-anchor" href="#js功能"><span>JS功能：</span></a></h3>',11),o=s("strong",null,"它不提供对内存或",-1),u=s("strong",null,"CPU",-1),v=s("strong",null,"的底层访问",-1),m={href:"https://wikipedia.org/wiki/Node.js",target:"_blank",rel:"noopener noreferrer"},b=s("strong",null,"浏览器中的 JavaScript 可以做与网页操作、用户交互和 Web 服务器相关的所有事情。",-1),h=s("ol",null,[s("li",null,"浏览器中的 JavaScript 可以做下面这些事：")],-1),g=s("li",null,[s("p",null,"在网页中添加新的 HTML，修改网页已有内容和网页的样式。")],-1),S=s("li",null,[s("p",null,"响应用户的行为，响应鼠标的点击，指针的移动，按键的按动。")],-1),y={href:"https://en.wikipedia.org/wiki/Ajax_(programming)",target:"_blank",rel:"noopener noreferrer"},J={href:"https://en.wikipedia.org/wiki/Comet_(programming)",target:"_blank",rel:"noopener noreferrer"},q=s("li",null,[s("p",null,"获取或设置 cookie，向访问者提出问题或发送消息。")],-1),f=s("li",null,[s("p",null,"记住客户端的数据（“本地存储”）。"),s("ul",null,[s("li",null,"为了用户的（信息）安全，在浏览器中的 JavaScript 的能力是受限的。目的是防止恶意网页获取用户私人信息或损害用户数据。")])],-1),j=s("li",null,[s("p",null,"网页中的 JavaScript 不能读、写、复制和执行硬盘上的任意文件。它没有直接访问操作系统的功能。")],-1),_=s("li",null,[s("p",null,"不同的标签页/窗口之间通常互不了解。有时候，也会有一些联系，例如一个标签页通过 JavaScript 打开的另外一个标签页。但即使在这种情况下，如果两个标签页打开的不是同一个网站（域名、协议或者端口任一不相同的网站），它们都不能相互通信。")],-1),k=s("li",null,[s("p",null,"JavaScript 可以轻松地通过互联网与当前页面所在的服务器进行通信。但是从其他网站/域的服务器中接收数据的能力被削弱了。尽管可以，但是需要来自远程服务器的明确协议（在 HTTP header 中）。这也是为了用户的信息安全。")],-1),x={href:"https://www.dartlang.org/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://kotlinlang.org/docs/reference/js-overview.html",target:"_blank",rel:"noopener noreferrer"},O=l(`<p>这些语言在浏览器中执行之前，都会被 <strong>编译</strong>（转化）成 JavaScript。</p><h1 id="js基础知识" tabindex="-1"><a class="header-anchor" href="#js基础知识"><span>JS基础知识：</span></a></h1><h2 id="js代码位置" tabindex="-1"><a class="header-anchor" href="#js代码位置"><span>JS代码位置：</span></a></h2><ul><li><p>对于服务器端环境（如 Node.js），你只需要使用诸如 <code>&quot;node ---.js&quot;</code> 的命令行来执行它。</p></li><li><p>客户端环境中，使用 <code>&lt;script&gt;</code> 标签将 JavaScript 程序插入到 HTML 文档的任何位置。</p></li></ul><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">&lt;!DOCTYPE HTML&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line"></span>
<span class="line">  &lt;p&gt;script 标签之前...&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">  &lt;script&gt;alert(&#39;Hello, world!&#39;);&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">  &lt;p&gt;...script 标签之后&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果你有大量的 JavaScript 代码，我们可以将它放入一个单独的文件。脚本文件可以通过 <code>src</code> 特性（attribute）添加到 HTML 文件中。</li></ul><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">&lt;script src=&quot;/path/to/script.js&quot;&gt;&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>一般来说，只有最简单的脚本才嵌入到 HTML 中。更复杂的脚本存放在单独的文件中。</p>`,8),N={href:"https://en.wikipedia.org/wiki/Web_cache",target:"_blank",rel:"noopener noreferrer"},T=l(`<p>之后，其他页面想要相同的脚本就会从缓存中获取，而不是下载它。所以文件实际上只会下载一次。</p><p>这可以节省流量，并使得页面（加载）更快。</p><h2 id="js语法特殊之处" tabindex="-1"><a class="header-anchor" href="#js语法特殊之处"><span>JS语法特殊之处：</span></a></h2><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量：</span></a></h3><p>我们可以使用 <code>var</code>、<code>let</code> 或 <code>const</code> 声明变量来存储数据。</p><ul><li><p><code>let</code> — 现代的变量声明方式。</p></li><li><p><code>var</code> — 老旧的变量声明方式。一般情况下，我们不会再使用它。</p></li><li><p><code>const</code> — 类似于 <code>let</code>，但是变量的值无法被修改。</p></li></ul><p>变量应当以一种容易理解变量内部是什么的方式进行命名。</p><p>JavaScript被认为是一种动态类型语言，这意味着变量的类型是在运行时确定的，而不是在编译时。这使得JavaScript非常灵活，可以在程序执行过程中根据需要动态地改变变量的类型。</p><p>例如，同一个变量可以在不同的语句中被赋予不同类型的值，而不会出现编译时的类型错误</p><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型：</span></a></h3><p>JavaScript 中有八种基本的数据类型。</p><ol><li><p>七种原始数据类型（基本数据类型）：</p><ol><li><p><code>number</code> 用于任何类型的数字：整数或浮点数，在 <code>±(2(53)-1)</code> 范围内的整数。</p></li><li><p><code>bigint</code> 用于任意长度的整数。</p></li><li><p><code>string</code> 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。</p></li><li><p><code>boolean</code> 用于 <code>true</code> 和 <code>false</code>。</p></li><li><p><code>null</code> 用于未知的值 —— 只有一个 <code>null</code> 值的独立类型。</p></li><li><p><code>undefined</code> 用于未定义的值 —— 只有一个 <code>undefined</code> 值的独立类型。</p></li><li><p><code>symbol</code> 用于唯一的标识符。</p></li></ol></li><li><p>以及一种非原始数据类型（复杂数据类型）：</p><ol><li><code>object</code> 用于更复杂的数据结构。</li></ol></li></ol><p>我们可以通过 <code>typeof</code> 运算符查看存储在变量中的数据类型。</p><ul><li><p>通常用作 <code>typeof x</code>，但 <code>typeof(x)</code> 也可行。</p></li><li><p>以字符串的形式返回类型名称，例如 <code>&quot;string&quot;</code>。</p></li><li><p><code>typeof null</code> 会返回 <code>&quot;object&quot;</code> —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 <code>object</code></p></li></ul><h3 id="三个交互函数" tabindex="-1"><a class="header-anchor" href="#三个交互函数"><span>三个交互函数：</span></a></h3><p>**<code>alert</code>**显示信息。</p><p>**<code>prompt</code>**显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 <code>null</code>。</p><p>**<code>confirm</code>**显示信息等待用户点击确定或取消。点击确定返回 <code>true</code>，点击取消或按下 Esc 键返回 <code>false</code>。</p><p>这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除</p><blockquote><p>上述所有方法共有两个限制：</p><ol><li><p>模态窗口的确切位置由浏览器决定。通常在页面中心。</p></li><li><p>窗口的确切外观也取决于浏览器。我们不能修改它。</p></li></ol></blockquote><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换：</span></a></h3><p>有三种常用的类型转换：转换为 string 类型、转换为 number 类型和转换为 boolean 类型。</p><p><strong>字符串转换</strong> —— 转换发生在输出内容的时候，也可以通过 <code>String(value)</code> 进行显式转换。原始类型值的 string 类型转换通常是很明显的。</p><p><strong>数字型转换</strong> —— 转换发生在进行算术操作时，也可以通过 <code>Number(value)</code> 进行显式转换。</p><p>数字型转换遵循以下规则：</p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>值</td><td>变成……</td></tr><tr><td>undefined</td><td>NaN</td></tr><tr><td>null</td><td>0</td></tr><tr><td>true / false</td><td>1 / 0</td></tr><tr><td>string</td><td>“按原样读取”字符串，两端的空白字符（空格、换行符 \\n、制表符 \\t 等）会被忽略。空字符串变成 0。转换出错则输出 NaN。</td></tr></tbody></table><p><strong>布尔型转换</strong> —— 转换发生在进行逻辑操作时，也可以通过 <code>Boolean(value)</code> 进行显式转换。</p><p>布尔型转换遵循以下规则：</p><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>值</td><td>变成……</td></tr><tr><td>0, null, undefined, NaN, &quot;&quot;</td><td>FALSE</td></tr><tr><td>其他值</td><td>TRUE</td></tr></tbody></table><ul><li><p>对 <code>undefined</code> 进行数字型转换时，输出结果为 <code>NaN</code>，而非 <code>0</code>。</p></li><li><p>对 <code>&quot;0&quot;</code> 和只有空格的字符串（比如：<code>&quot; &quot;</code>）进行布尔型转换时，输出结果为 <code>true</code>。</p></li></ul><h3 id="值的比较" tabindex="-1"><a class="header-anchor" href="#值的比较"><span>值的比较：</span></a></h3><ul><li><p>比较运算符始终返回布尔值。</p></li><li><p>字符串的比较，会按照“词典”顺序逐字符地比较大小。</p></li><li><p>当对不同类型的值进行比较时，它们会先被转化为数字（不包括严格相等检查）再进行比较。</p></li><li><p>在非严格相等 <code>==</code> 下，<code>null</code> 和 <code>undefined</code> 相等且各自不等于任何其他的值。</p></li><li><p>在使用 <code>&gt;</code> 或 <code>&lt;</code> 进行比较时，需要注意变量可能为 <code>null/undefined</code> 的情况。比较好的方法是单独检查变量是否等于 <code>null/undefined</code>。</p></li></ul><ol><li><p><strong>严格相等</strong>（===）：</p><ol><li>使用严格相等运算符时（===），比较的两个操作数不仅要求值相等，还要求它们的类型也必须相同。如果类型不同，即使值相同，也会被视为不相等</li></ol></li><li><p><strong>非严格相等（==）</strong>：</p><ol><li>非严格相等运算符（==）在比较前会尝试将操作数转换为相同的类型，然后再进行比较。这种转换可能会导致一些意外的结果，因此在日常开发中推荐尽可能使用严格相等（===）来避免类型转换带来的问题</li></ol></li></ol><p>在实际应用中，建议尽量使用严格相等（===），因为它可以提供更明确、可预测的比较结果，避免了类型转换可能引发的错误。</p><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数：</span></a></h3><ul><li>函数是值。它们可以在代码的任何地方被分配，复制或声明。</li></ul><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">function ask(question, yes, no) {  //yes和no都是函数，以值的形式出现</span>
<span class="line">  if (confirm(question)) yes()</span>
<span class="line">  else no();</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">ask(&quot;Do you agree?&quot;,function() { alert(&quot;You agreed.&quot;); },function() { alert(&quot;You canceled the execution.&quot;); });</span>
<span class="line">//这两个函数没有名字，所以叫 匿名函数。这样的函数在 ask 外无法访问（因为没有对它们分配变量），不过这正是我们想要的。</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask</span>
<span class="line">ask(&quot;Do you agree?&quot;, showOk, showCancel);</span>
<span class="line">//ask 的两个参数值 showOk 和 showCancel 可以被称为 回调函数 或简称 回调。主要思想是我们传递一个函数，并期望在稍后必要时将其“回调”。在我们的例子中，showOk 是回答 “yes” 的回调，showCancel 是回答 “no” 的回调。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。</li></ul><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">function sayHi() {</span>
<span class="line">  alert( &quot;Hello&quot; );</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。</li></ul><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let sayHi = function() {</span>
<span class="line">  alert( &quot;Hello&quot; );</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。</p></li><li><p>函数表达式在执行流程到达时创建。</p></li></ul><p>在大多数情况下，当我们需要声明一个函数时，最好使用函数声明，因为函数在被声明之前也是可见的。这使我们在代码组织方面更具灵活性，通常也会使得代码可读性更高。</p><p>所以，仅当函数声明不适合对应的任务时，才应使用函数表达式。</p><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数"><span>箭头函数：</span></a></h3><p>箭头函数对于简单的操作很方便，特别是对于单行的函数。它具体有两种形式：</p><ol><li>不带花括号：<code>(...args) =&gt; expression</code> —— 右侧是一个表达式：函数计算表达式并返回其结果。如果只有一个参数，则可以省略括号，例如 <code>n =&gt; n*2</code>。</li></ol><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let func = (arg1, arg2, ..., argN) =&gt; expression;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>带花括号：<code>(...args) =&gt; { body }</code> —— 花括号允许我们在函数中编写多个语句，但是我们需要显式地 <code>return</code> 来返回一些内容。</li></ol><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let sum = (a, b) =&gt; {  // 花括号表示开始一个多行函数</span>
<span class="line">  let result = a + b;</span>
<span class="line">  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象：</span></a></h2><h3 id="对象基础" tabindex="-1"><a class="header-anchor" href="#对象基础"><span>对象基础：</span></a></h3><p>对象是具有一些特殊特性的关联数组。它们存储属性（键值对），其中：</p><ul><li><p>属性的键必须是字符串或者 symbol（通常是字符串）。</p></li><li><p>值可以是任何类型。</p></li></ul><p>我们可以用下面的方法访问属性：</p><ul><li><p>点符号: <code>obj.property</code>。</p></li><li><p>方括号 <code>obj[&quot;property&quot;]</code>，方括号允许从变量中获取键，例如 <code>obj[varWithKey]</code>。</p></li></ul><p>其他操作：</p><ul><li><p>删除属性：<code>delete obj.prop</code>。</p></li><li><p>检查是否存在给定键的属性：<code>&quot;key&quot; in obj</code>。</p></li><li><p>遍历对象：<code>for(let key in obj)</code> 循环。</p></li></ul><p>整数属性会被进行排序，其他属性则按照创建的顺序显示。</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let codes = {</span>
<span class="line">  &quot;49&quot;: &quot;Germany&quot;,</span>
<span class="line">  &quot;41&quot;: &quot;Switzerland&quot;,</span>
<span class="line">  &quot;44&quot;: &quot;Great Britain&quot;,</span>
<span class="line">  // ..,</span>
<span class="line">  &quot;1&quot;: &quot;USA&quot;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">for(let code in codes) </span>
<span class="line">{</span>
<span class="line">	alert(code); </span>
<span class="line">	// 1, 41, 44, 49</span>
<span class="line">} </span>
<span class="line"></span>
<span class="line">//我们可以使用非整数属性名来 欺骗 程序。只需要给每个键名加一个加号 &quot;+&quot; 前缀就行了。</span>
<span class="line">let codes = {</span>
<span class="line">  &quot;+49&quot;: &quot;Germany&quot;,</span>
<span class="line">  &quot;+41&quot;: &quot;Switzerland&quot;,</span>
<span class="line">  &quot;+44&quot;: &quot;Great Britain&quot;,</span>
<span class="line">  // ..,</span>
<span class="line">  &quot;+1&quot;: &quot;USA&quot;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">for (let code in codes) {</span>
<span class="line">  alert( +code ); // 49, 41, 44, 1</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let user = {</span>
<span class="line">  name: &quot;John&quot;,</span>
<span class="line">  surname: &quot;Smith&quot;</span>
<span class="line">};</span>
<span class="line">user.age = 25; // 增加一个</span>
<span class="line"></span>
<span class="line">// 非整数属性是按照创建的顺序来排列的</span>
<span class="line">for (let prop in user) {</span>
<span class="line">  alert( prop ); // name, surname, age</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象的引用以及复制" tabindex="-1"><a class="header-anchor" href="#对象的引用以及复制"><span>对象的引用以及复制：</span></a></h3><p>对象通过引用被赋值和拷贝。换句话说，一个变量存储的不是“对象的值”，而是一个对值的“引用”（内存地址）。因此，拷贝此类变量或将其作为函数参数传递时，所拷贝的是引用，而不是对象本身。所有通过被拷贝的引用的操作（如添加、删除属性）都作用在同一个对象上。</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">// a 和 b 两个变量都引用同一个对象，所以它们相等</span>
<span class="line">let a = {};</span>
<span class="line">let b = a; // 复制引用</span>
<span class="line"></span>
<span class="line">alert( a == b ); // true，都引用同一对象</span>
<span class="line">alert( a === b ); // true</span>
<span class="line"></span>
<span class="line">//两个独立的对象则并不相等，即使它们看起来很像（都为空）：</span>
<span class="line">let a = {};</span>
<span class="line">let b = {}; // 两个独立的对象</span>
<span class="line"></span>
<span class="line">alert( a == b ); // false</span>
<span class="line"></span>
<span class="line">//对于类似 obj1 &gt; obj2 的比较，或者跟一个原始类型值的比较 obj == 5，对象都会被转换为原始值。我们很快就会学到对象是如何转换的，但是说实话，很少需要进行这样的比较 —— 通常是在编程错误的时候才会出现这种情况。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,64),P=s("code",null,"Object.assign",-1),A={href:"https://lodash.com/docs#cloneDeep",target:"_blank",rel:"noopener noreferrer"},E=l(`<div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">Object.assign(dest, [src1, src2, src3...])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>第一个参数 <code>dest</code> 是指目标对象。</p></li><li><p>更后面的参数 <code>src1, ..., srcN</code>（可按需传递多个参数）是源对象。</p></li><li><p>该方法将所有源对象的属性拷贝到目标对象 <code>dest</code> 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。</p></li><li><p>调用结果返回 <code>dest</code>。</p></li></ul><p>例如，我们可以用它来合并多个对象：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let user = { name: &quot;John&quot; };</span>
<span class="line">let permissions1 = { canView: true };</span>
<span class="line">let permissions2 = { canEdit: true };</span>
<span class="line">// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中</span>
<span class="line">Object.assign(user, permissions1, permissions2);</span>
<span class="line">// 现在 user = { name: &quot;John&quot;, canView: true, canEdit: true }</span>
<span class="line"></span>
<span class="line">let user = {</span>
<span class="line">  name: &quot;John&quot;,</span>
<span class="line">  age: 30</span>
<span class="line">};</span>
<span class="line">let clone = Object.assign({}, user);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">var objects = {</span>
<span class="line">	A: { &#39;a&#39;: 1 },</span>
<span class="line">	B: { &#39;b&#39;: 2 }</span>
<span class="line">};</span>
<span class="line"> //object里是两个对象A和B，浅拷贝复制的是地址</span>
<span class="line"> //此时  var ob = Object.assign({},objects)</span>
<span class="line"> //console.log(objects.A===ob.A)</span>
<span class="line"> //==&gt;   true </span>
<span class="line">var deep = _.cloneDeep(objects);</span>
<span class="line">console.log(deep[0] === objects[0]);</span>
<span class="line">// ==&gt; false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收"><span>垃圾回收：</span></a></h3><ul><li><p>垃圾回收是自动完成的，我们不能强制执行或是阻止执行。</p></li><li><p>当对象是可达状态时，它一定是存在于内存中的。</p></li></ul><p>JavaScript 中主要的内存管理概念是 <strong>可达性</strong>。</p><p>简而言之，“可达”值是那些以某种方式可访问或可用的值。它们被存储在内存中。</p><h3 id="对象方法-this" tabindex="-1"><a class="header-anchor" href="#对象方法-this"><span>对象方法，“this”</span></a></h3><ul><li><p>存储在对象属性中的函数被称为“方法”。</p></li><li><p>方法允许对象进行像 <code>object.doSomething()</code> 这样的“操作”。</p></li><li><p>方法可以将对象引用为 <code>this</code>。</p></li></ul><p><code>this</code> 的值是在程序运行时得到的。</p><ul><li><p>一个函数在声明时，可能就使用了 <code>this</code>，但是这个 <code>this</code> 只有在函数被调用时才会有值。</p></li><li><p>可以在对象之间复制函数。</p></li><li><p>以“方法”的语法调用函数时：<code>object.method()</code>，调用过程中的 <code>this</code> 值是 <code>object</code>。</p></li></ul><p>请注意箭头函数有些特别：它们没有 <code>this</code>。在箭头函数内部访问到的 <code>this</code> 都是从外部获取的。</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let obj = {</span>
<span class="line">  count: 0,</span>
<span class="line">  start: function() {</span>
<span class="line">    setInterval(() =&gt; {</span>
<span class="line">      this.count++; // 此处的 this 指向 obj 对象，因为箭头函数继承了 start 方法的 this</span>
<span class="line">      console.log(this.count);</span>
<span class="line">    }, 1000);</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">obj.start();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造器和操作符-new" tabindex="-1"><a class="header-anchor" href="#构造器和操作符-new"><span>构造器和操作符“new”</span></a></h3><ul><li><p>构造函数，或简称构造器，就是常规函数，但大家对于构造器有个共同的约定，就是其命名首字母要大写。</p></li><li><p>构造函数只能使用 <code>new</code> 来调用。这样的调用意味着在开始时创建了空的 <code>this</code>，并在最后返回填充了值的 <code>this</code>。</p></li></ul><p>当一个函数被使用 <code>new</code> 操作符执行时，它按照以下步骤：</p><ol><li><p>一个新的空对象被创建并分配给 <code>this</code>。</p></li><li><p>函数体执行。通常它会修改 <code>this</code>，为其添加新的属性。</p></li><li><p>返回 <code>this</code> 的值。</p></li></ol><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">function User(name) {</span>
<span class="line">  // this = {};（隐式创建）</span>
<span class="line"></span>
<span class="line">  // 添加属性到 this</span>
<span class="line">  this.name = name;</span>
<span class="line">  this.isAdmin = false;</span>
<span class="line"></span>
<span class="line">  // return this;（隐式返回）</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">let user =new User(&quot;Jack&quot;);</span>
<span class="line">//调用</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol类型" tabindex="-1"><a class="header-anchor" href="#symbol类型"><span>symbol类型：</span></a></h3><p>根据规范，只有两种原始类型可以用作对象属性键：</p><ul><li><p>字符串类型</p></li><li><p>symbol 类型</p></li></ul><p>否则，如果使用另一种类型，例如数字，它会被自动转换为字符串。所以 <code>obj[1]</code> 与 <code>obj[&quot;1&quot;]</code> 相同，而 <code>obj[true]</code> 与 <code>obj[&quot;true&quot;]</code> 相同。</p><h4 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol"><span>Symbol</span></a></h4><p>“symbol” 值表示唯一的标识符。创建时，我们可以给 symbol 一个描述（也称为 symbol 名），这在代码调试时非常有用：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">// id 是描述为 &quot;id&quot; 的 symbol</span>
<span class="line">let id = Symbol(&quot;id&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>symbol 保证是唯一的。即使我们创建了许多具有相同描述的 symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">//这里有两个描述相同的 symbol —— 它们不相等：</span>
<span class="line">let id1 = Symbol(&quot;id&quot;);</span>
<span class="line">let id2 = Symbol(&quot;id&quot;);</span>
<span class="line"></span>
<span class="line">alert(id1 == id2); // false</span>
<span class="line">alert(id1 === id2); // false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>symbol 不会被自动转换为字符串：</strong></p><p>JavaScript 中的大多数值都支持字符串的隐式转换。例如，我们可以 <code>alert</code> 任何值，都可以生效。symbol 比较特殊，它不会被自动转换。</p><p>例如，这个 <code>alert</code> 将会提示出错：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let id = Symbol(&quot;id&quot;);alert(id); // 类型错误：无法将 symbol 值转换为字符串。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这是一种防止混乱的“语言保护”，因为字符串和 symbol 有本质上的不同，不应该意外地将它们转换成另一个。</p><p>如果我们真的想显示一个 symbol，我们需要在它上面调用 <code>.toString()</code>，如下所示：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let ID = Symbol(&quot;id&quot;);</span>
<span class="line">alert(id.toString());</span>
<span class="line">// Symbol(id)，现在它有效了。显示为 ID</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者获取 <code>symbol.description</code> 属性，只显示描述（description）：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let ID = Symbol(&quot;id&quot;);</span>
<span class="line">alert(id.description); </span>
<span class="line">// id</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐藏属性" tabindex="-1"><a class="header-anchor" href="#隐藏属性"><span>“隐藏属性”</span></a></h4><p>symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。</p><p>例如，如果我们使用的是属于第三方代码的 <code>user</code> 对象，我们想要给它们添加一些标识符。</p><p>我们可以给它们使用 symbol 键：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let user ={</span>
<span class="line">// 属于另一个代码</span>
<span class="line">name: &quot;John&quot;};</span>
<span class="line">let id = Symbol(&quot;id&quot;);</span>
<span class="line">user[id] = 1;</span>
<span class="line">alert( user[id] ); // 我们可以使用 symbol 作为键来访问数据</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>Symbol(&quot;id&quot;)</code> 作为键，比起用字符串 <code>&quot;id&quot;</code> 来有什么好处呢？</p><p>由于 <code>user</code> 对象属于另一个代码库，所以向它们添加字段是不安全的，因为我们可能会影响代码库中的其他预定义行为。但 symbol 属性不会被意外访问到。第三方代码不会知道新定义的 symbol，因此将 symbol 添加到 <code>user</code> 对象是安全的。</p><p>另外，假设另一个脚本希望在 <code>user</code> 中有自己的标识符，以实现自己的目的。</p><p>那么，该脚本可以创建自己的 <code>Symbol(&quot;id&quot;)</code>，像这样：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let user = {</span>
<span class="line">  name: &quot;John&quot;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">let id1 = Symbol(&quot;id&quot;);</span>
<span class="line">let id2 = Symbol(&quot;id&quot;);</span>
<span class="line"></span>
<span class="line">user[id1] = 1;</span>
<span class="line">user[id2] = &quot;Their id value&quot;;</span>
<span class="line"></span>
<span class="line">alert(user[id1]); // 1</span>
<span class="line">alert(user[id2]); // &quot;Their id value&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局symbol" tabindex="-1"><a class="header-anchor" href="#全局symbol"><span>全局symbol</span></a></h4><p>正如我们所看到的，通常所有的 symbol 都是不同的，即使它们有相同的名字。但有时我们想要名字相同的 symbol 具有相同的实体。例如，应用程序的不同部分想要访问的 symbol <code>&quot;id&quot;</code> 指的是完全相同的属性。</p><h5 id="symbol-for-key" tabindex="-1"><a class="header-anchor" href="#symbol-for-key"><span><code>Symbol.for(key)</code></span></a></h5><p>为了实现这一点，这里有一个 <strong>全局 symbol 注册表</strong>。我们可以在其中创建 symbol 并在稍后访问它们，它可以确保每次访问相同名字的 symbol 时，返回的都是相同的 symbol。</p><p>要从注册表中读取（不存在则创建）symbol，请使用 <code>Symbol.for(key)</code>。</p><p>该调用会检查全局注册表，如果有一个描述为 <code>key</code> 的 symbol，则返回该 symbol，否则将创建一个新 symbol（<code>Symbol(key)</code>），并通过给定的 <code>key</code> 将其存储在注册表中。</p><p>例如：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">// 从全局注册表中读取</span>
<span class="line">let id = Symbol.for(&quot;id&quot;); </span>
<span class="line">// 如果该 symbol 不存在，则创建它</span>
<span class="line">// 再次读取（可能是在代码中的另一个位置）</span>
<span class="line">let idAgain = Symbol.for(&quot;id&quot;);</span>
<span class="line">// 相同的 symbol</span>
<span class="line">alert( id === idAgain );// true</span>
<span class="line">alert( id == idAgain );// true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册表内的 symbol 被称为 <strong>全局 symbol</strong>。如果我们想要一个应用程序范围内的 symbol，可以在代码中随处访问 —— 这就是它们的用途。</p><h5 id="symbol-keyfor-sym" tabindex="-1"><a class="header-anchor" href="#symbol-keyfor-sym"><span><code>Symbol.keyFor(sym)</code></span></a></h5><p>我们已经看到，对于全局 symbol，<code>Symbol.for(key)</code> 按名字返回一个 symbol。相反，通过全局 symbol 返回一个名字，我们可以使用 <code>Symbol.keyFor(sym)</code>：</p><p>例如：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">// 通过 name 获取 symbol</span>
<span class="line">let sym = Symbol.for(&quot;name&quot;);</span>
<span class="line">let sym2 = Symbol.for(&quot;id&quot;);</span>
<span class="line">// 通过 symbol 获取 name</span>
<span class="line">alert( Symbol.keyFor(sym) ); // name</span>
<span class="line">alert( Symbol.keyFor(sym2) ); // id</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Symbol.keyFor</code> 内部使用全局 symbol 注册表来查找 symbol 的键。所以它不适用于非全局 symbol。如果 symbol 不是全局的，它将无法找到它并返回 <code>undefined</code>。</p><p>但是，所有 symbol 都具有 <code>description</code> 属性。</p><p>例如：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let globalSymbol = Symbol.for(&quot;name&quot;);</span>
<span class="line">let localSymbol = Symbol(&quot;name&quot;);</span>
<span class="line">alert( Symbol.keyFor(globalSymbol) );</span>
<span class="line"> // name，全局 symbol</span>
<span class="line"> alert( Symbol.keyFor(localSymbol) );  // undefined，非全局</span>
<span class="line"> alert( localSymbol.description ); // name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象———原始值转换" tabindex="-1"><a class="header-anchor" href="#对象———原始值转换"><span>对象———原始值转换</span></a></h2><h2 id="基本不会用到-想更深理解js的可以看看" tabindex="-1"><a class="header-anchor" href="#基本不会用到-想更深理解js的可以看看"><span>(基本不会用到，想更深理解JS的可以看看)</span></a></h2><h3 id="转换规则" tabindex="-1"><a class="header-anchor" href="#转换规则"><span>转换规则：</span></a></h3>`,68),H=s("li",null,[s("p",null,[e("没有转换为布尔值。所有的对象在布尔上下文（context）中均为 "),s("code",null,"true"),e("，就这么简单。只有字符串和数字转换。")])],-1),C=s("code",null,"Date",-1),D={href:"https://zh.javascript.info/date",target:"_blank",rel:"noopener noreferrer"},L=s("code",null,"date1 - date2",-1),B=s("li",null,[s("p",null,[e("至于字符串转换 —— 通常发生在我们像 "),s("code",null,"alert(obj)"),e(" 这样输出一个对象和类似的上下文中。")])],-1),F=l(`<p>我们可以使用特殊的对象方法，自己实现字符串和数字的转换。</p><h3 id="hint" tabindex="-1"><a class="header-anchor" href="#hint"><span>hint：</span></a></h3><p>当我们对期望一个字符串的对象执行操作时，如 “alert”，对象到字符串的转换。<strong>&quot;string&quot;</strong></p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">// 输出</span>
<span class="line">alert(obj);</span>
<span class="line">// 将对象作为属性键</span>
<span class="line">anotherObj[obj] = 123;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们进行数学运算时，对象到数字的转换。<strong>&quot;number&quot;</strong></p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">// 显式转换</span>
<span class="line">let num = Number(obj);</span>
<span class="line">// 数学运算（除了二元加法）</span>
<span class="line">let n = +obj; // 一元加法</span>
<span class="line">let delta = date1 - date2;</span>
<span class="line">// 小于/大于的比较</span>
<span class="line">let greater = user1 &gt; user2;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当运算符“不确定”期望值的类型时（在少数情况下发生）。<strong>&quot;default&quot;</strong></p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">// 二元加法使用默认 hint</span>
<span class="line">let total = obj1 + obj2;</span>
<span class="line"></span>
<span class="line">// obj == number 使用默认 hint</span>
<span class="line">if (user == 1) { ... };</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为了进行转换，JavaScript 尝试查找并调用三个对象方法：</strong></p><ol><li><p>调用 <code>obj[Symbol.toPrimitive](hint)</code> —— 带有 symbol 键 <code>Symbol.toPrimitive</code>（系统 symbol）的方法，如果这个方法存在的话，</p></li><li><p>否则，如果 hint 是 <code>&quot;string&quot;</code> —— 尝试调用 <code>obj.toString()</code> 或 <code>obj.valueOf()</code>，无论哪个存在。</p></li><li><p>否则，如果 hint 是 <code>&quot;number&quot;</code> 或 <code>&quot;default&quot;</code> —— 尝试调用 <code>obj.valueOf()</code> 或 <code>obj.toString()</code>，无论哪个存在。</p></li></ol><h3 id="symbol-toprimitive" tabindex="-1"><a class="header-anchor" href="#symbol-toprimitive"><span>Symbol.toPrimitive</span></a></h3><p>有一个名为 <code>Symbol.toPrimitive</code> 的内建 symbol，它被用来给转换方法命名，像这样：</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">obj[Symbol.toPrimitive] = function(hint) {</span>
<span class="line">  // 这里是将此对象转换为原始值的代码</span>
<span class="line">  // 它必须返回一个原始值</span>
<span class="line">  // hint = &quot;string&quot;、&quot;number&quot; 或 &quot;default&quot; 中的一个</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 <code>Symbol.toPrimitive</code> 方法存在，则它会被用于所有 hint，无需更多其他方法。</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let user = {</span>
<span class="line">  name: &quot;John&quot;,</span>
<span class="line">  money: 1000,</span>
<span class="line"></span>
<span class="line">  [Symbol.toPrimitive](hint) {</span>
<span class="line">    alert(\`hint: \${hint}\`);</span>
<span class="line">    return hint == &quot;string&quot; ? \`{name: &quot;\${this.name}&quot;}\` : this.money;</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 转换演示：</span>
<span class="line">alert(user); // hint: string -&gt; {name: &quot;John&quot;}</span>
<span class="line">alert(+user); // hint: number -&gt; 1000</span>
<span class="line">alert(user + 500); // hint: default -&gt; 1500</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从代码中我们可以看到，根据转换的不同，<code>user</code> 变成一个自描述字符串或者一个金额。<code>user[Symbol.toPrimitive]</code> 方法处理了所有的转换情况。</p><h3 id="tostring-valueof" tabindex="-1"><a class="header-anchor" href="#tostring-valueof"><span>toString/valueOf</span></a></h3><p>如果没有 <code>Symbol.toPrimitive</code>，那么 JavaScript 将尝试寻找 <code>toString</code> 和 <code>valueOf</code> 方法：</p><ul><li><p>对于 <code>&quot;string&quot;</code> hint：调用 <code>toString</code> 方法，如果它不存在，则调用 <code>valueOf</code> 方法（因此，对于字符串转换，优先调用 <code>toString</code>）。</p></li><li><p>对于其他 hint：调用 <code>valueOf</code> 方法，如果它不存在，则调用 <code>toString</code> 方法（因此，对于数学运算，优先调用 <code>valueOf</code> 方法）。</p></li></ul><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">let user = {</span>
<span class="line">  name: &quot;John&quot;,</span>
<span class="line">  money: 1000,</span>
<span class="line"></span>
<span class="line">  // 对于 hint=&quot;string&quot;</span>
<span class="line">  toString() {</span>
<span class="line">    return \`{name: &quot;\${this.name}&quot;}\`;</span>
<span class="line">  },</span>
<span class="line"></span>
<span class="line">  // 对于 hint=&quot;number&quot; 或 &quot;default&quot;</span>
<span class="line">  valueOf() {</span>
<span class="line">    return this.money;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">alert(user); // toString -&gt; {name: &quot;John&quot;}</span>
<span class="line">alert(+user); // valueOf -&gt; 1000</span>
<span class="line">alert(user + 500); // valueOf -&gt; 1500</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code><span class="line">//通常我们希望有一个“全能”的地方来处理所有原始转换。在这种情况下，我们可以只实现 toString，就像这样：</span>
<span class="line">let user = {</span>
<span class="line">  name: &quot;John&quot;,</span>
<span class="line"></span>
<span class="line">  toString() {</span>
<span class="line">    return this.name;</span>
<span class="line">  }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">alert(user); // toString -&gt; John</span>
<span class="line">alert(user + 500); // toString -&gt; John500</span>
<span class="line">//如果没有 Symbol.toPrimitive 和 valueOf，toString 将处理所有原始转换。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function M(V,I){const n=d("ExternalLinkIcon");return t(),c("div",null,[p,s("p",null,[e("现代的 JavaScript 是一种“安全的”编程语言。"),o,e(),u,e(),v,e("。JavaScript 的能力很大程度上取决于它运行的环境。例如，"),s("a",m,[e("Node.js"),a(n)]),e(" 支持允许 JavaScript 读取/写入任意文件，执行网络请求等的函数。"),b]),h,s("ul",null,[g,S,s("li",null,[s("p",null,[e("向远程服务器发送网络请求，下载和上传文件（所谓的 "),s("a",y,[e("AJAX"),a(n)]),e(" 和 "),s("a",J,[e("COMET"),a(n)]),e(" 技术）。")])]),q,f,j,_,k,s("li",null,[s("p",null,[s("a",x,[e("Dart"),a(n)]),e(" 是一门独立的语言。它拥有自己的引擎，该引擎可以在非浏览器环境中运行（例如手机应用），它也可以被编译成 JavaScript。由 Google 开发。")])]),s("li",null,[s("p",null,[s("a",w,[e("Kotlin"),a(n)]),e(" 是一个现代、简洁且安全的编程语言，编写出的应用程序可以在浏览器和 Node 环境中运行。")])])]),O,s("p",null,[e("使用独立文件的好处是浏览器会下载它，然后将它保存到浏览器的 "),s("a",N,[e("缓存"),a(n)]),e(" 中。")]),T,s("p",null,[e("为了创建“真正的拷贝”（一个克隆），我们可以使用 "),P,e(" 来做所谓的“浅拷贝”（嵌套对象被通过引用进行拷贝）或者使用“深拷贝”函数，例如 "),s("a",A,[e("_.cloneDeep(obj)"),a(n)]),e("。")]),E,s("ol",null,[H,s("li",null,[s("p",null,[e("数字转换发生在对象相减或应用数学函数时。例如，"),C,e(" 对象（将在 "),s("a",D,[e("日期和时间"),a(n)]),e(" 一章中介绍）可以相减，"),L,e(" 的结果是两个日期之间的差值。")])]),B]),F])}const G=i(r,[["render",M],["__file","JavaScriptjichubiji .html.vue"]]),z=JSON.parse('{"path":"/blogs/frontEnd/JavaScriptjichubiji .html","title":"JS笔记","lang":"zh-CN","frontmatter":{"title":"JS笔记","date":"2024/9/15","categories":["frontEnd"],"author":"Q","tags":["手写","javascript"]},"headers":[{"level":2,"title":"JS简介：","slug":"js简介","link":"#js简介","children":[{"level":3,"title":"什么是JS：","slug":"什么是js","link":"#什么是js","children":[]},{"level":3,"title":"JS功能：","slug":"js功能","link":"#js功能","children":[]}]},{"level":2,"title":"JS代码位置：","slug":"js代码位置","link":"#js代码位置","children":[]},{"level":2,"title":"JS语法特殊之处：","slug":"js语法特殊之处","link":"#js语法特殊之处","children":[{"level":3,"title":"变量：","slug":"变量","link":"#变量","children":[]},{"level":3,"title":"数据类型：","slug":"数据类型","link":"#数据类型","children":[]},{"level":3,"title":"三个交互函数：","slug":"三个交互函数","link":"#三个交互函数","children":[]},{"level":3,"title":"类型转换：","slug":"类型转换","link":"#类型转换","children":[]},{"level":3,"title":"值的比较：","slug":"值的比较","link":"#值的比较","children":[]},{"level":3,"title":"函数：","slug":"函数","link":"#函数","children":[]},{"level":3,"title":"箭头函数：","slug":"箭头函数","link":"#箭头函数","children":[]}]},{"level":2,"title":"对象：","slug":"对象","link":"#对象","children":[{"level":3,"title":"对象基础：","slug":"对象基础","link":"#对象基础","children":[]},{"level":3,"title":"对象的引用以及复制：","slug":"对象的引用以及复制","link":"#对象的引用以及复制","children":[]},{"level":3,"title":"垃圾回收：","slug":"垃圾回收","link":"#垃圾回收","children":[]},{"level":3,"title":"对象方法，“this”","slug":"对象方法-this","link":"#对象方法-this","children":[]},{"level":3,"title":"构造器和操作符“new”","slug":"构造器和操作符-new","link":"#构造器和操作符-new","children":[]},{"level":3,"title":"symbol类型：","slug":"symbol类型","link":"#symbol类型","children":[]}]},{"level":2,"title":"对象———原始值转换","slug":"对象———原始值转换","link":"#对象———原始值转换","children":[]},{"level":2,"title":"(基本不会用到，想更深理解JS的可以看看)","slug":"基本不会用到-想更深理解js的可以看看","link":"#基本不会用到-想更深理解js的可以看看","children":[{"level":3,"title":"转换规则：","slug":"转换规则","link":"#转换规则","children":[]},{"level":3,"title":"hint：","slug":"hint","link":"#hint","children":[]},{"level":3,"title":"Symbol.toPrimitive","slug":"symbol-toprimitive","link":"#symbol-toprimitive","children":[]},{"level":3,"title":"toString/valueOf","slug":"tostring-valueof","link":"#tostring-valueof","children":[]}]}],"git":{"createdTime":1726400266000,"updatedTime":1726904165000,"contributors":[{"name":"Q","email":"2904343971@qq.com","commits":1}]},"filePathRelative":"blogs/frontEnd/JavaScript基础笔记 .md"}');export{G as comp,z as data};

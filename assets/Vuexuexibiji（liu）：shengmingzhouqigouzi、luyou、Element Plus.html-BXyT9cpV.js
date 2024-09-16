import{_ as p,r as e,o as l,c,b as n,d as s,a as t,e as o}from"./app-tKfLGwJH.js";const i={},u=o(`<h2 id="vue学习笔记-六-生命周期钩子、路由、element-plus" tabindex="-1"><a class="header-anchor" href="#vue学习笔记-六-生命周期钩子、路由、element-plus"><span>Vue学习笔记（六）：生命周期钩子、路由、Element Plus</span></a></h2><p>[TOC]</p><h3 id="一、生命周期钩子" tabindex="-1"><a class="header-anchor" href="#一、生命周期钩子"><span>一、生命周期钩子</span></a></h3><h4 id="_1-生命周期" tabindex="-1"><a class="header-anchor" href="#_1-生命周期"><span>1.生命周期</span></a></h4><p>每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。</p><p>我们一般把生命周期分为以下四个阶段，先大致了解一下即可：</p><h5 id="_1-创建阶段" tabindex="-1"><a class="header-anchor" href="#_1-创建阶段"><span>（1）创建阶段</span></a></h5><p><strong>beforeCreate:</strong></p><ul><li>组件实例初始化之后，数据观测和事件机制尚未启动。</li><li>无法访问<code>data</code>、<code>computed</code>、<code>methods</code>等中的数据，因为它们还未被初始化。</li></ul><p><strong>created:</strong></p><ul><li>组件实例已经创建完成，数据观测和事件机制已经启动。</li><li>可以访问和修改<code>data</code>、<code>computed</code>、<code>methods</code>，此时可以进行数据的初始化等操作。</li><li>组件还未挂载到 DOM 中，因此无法进行 DOM 操作。</li></ul><h5 id="_2-挂载阶段" tabindex="-1"><a class="header-anchor" href="#_2-挂载阶段"><span>（2）挂载阶段</span></a></h5><p><strong>beforeMount:</strong></p><ul><li>在挂载开始之前被调用</li><li>此时模板已编译，但尚未渲染到页面上</li><li>可以访问并修改 DOM，虽然此时的 DOM 仍未完全生成。</li></ul><p><strong>mounted:</strong></p><ul><li>组件挂载完成后调用，此时组件的 DOM 已经生成并插入到页面中。</li><li>适合进行依赖于 DOM 的操作，比如访问子组件或使用第三方库操作 DOM。</li></ul><h5 id="_3-更新阶段" tabindex="-1"><a class="header-anchor" href="#_3-更新阶段"><span>（3）更新阶段</span></a></h5><p><strong>beforeUpdate:</strong></p><ul><li>组件的响应式数据发生变化，开始重新渲染之前调用。</li><li>此时可以在数据变化前执行一些操作，如手动修改数据。</li></ul><p><strong>updated:</strong></p><ul><li>组件的重新渲染完成之后调用。</li><li>可以在这个钩子中执行依赖于 DOM 结构更新后的操作。</li></ul><h5 id="_4-取消挂载阶段" tabindex="-1"><a class="header-anchor" href="#_4-取消挂载阶段"><span>（4）取消挂载阶段</span></a></h5><p><strong>beforeUnmount:</strong></p><ul><li>在组件实例即将从 DOM 中移除之前调用。</li><li>此时组件仍然存在于 DOM 中，你可以执行一些清理工作，比如移除事件监听器或取消定时器。</li><li>适用于需要在组件完全移除前进行处理的场景。</li></ul><p><strong>unmounted:</strong></p><ul><li><p>组件实例从 DOM 中移除之后调用。</p></li><li><p>此时组件的所有绑定事件、子组件等都已被解除，DOM 元素也被彻底删除。</p></li><li><p>适合用于完全清理资源或进行一些统计、日志记录等操作。</p></li><li><p>下面这张图可以帮助我们更好地了解一个 Vue 组件所经历生命周期：</p></li></ul><p><img src="https://i-blog.csdnimg.cn/direct/a7e6a545f30444ceb99878a962d5c735.png" alt="img"></p><h4 id="_2-钩子函数" tabindex="-1"><a class="header-anchor" href="#_2-钩子函数"><span>2.钩子函数</span></a></h4><p>上述 Vue 组件的这些生命周期阶段为我们提供了不同的钩子函数，可以帮助我们在组件的不同生命周期阶段执行特定的逻辑。</p><p>下面让我们以最常用的钩子函数<code>mounted()</code>进行举例说明：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;欢迎来到 TIC!&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 设置页面标题</span></span>
<span class="line">    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;Vue 示例&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 控制台输出消息</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;组件已挂载，页面标题已设置。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i-blog.csdnimg.cn/direct/be7aa0330afa4b718ce3c3e812164dca.png" alt="img"></p><p>可以看到网页的标题成功修改，同时控制台也打印了相关信息。</p><p><code>mounted()</code>钩子函数在 Vue 组件中广泛用于绘图，尤其是我们需要在组件挂载后操作 DOM 或使用外部库来绘制图表或图形时。因为<code>mounted()</code>确保了组件的模板已经渲染完毕，DOM 元素已经存在，因此非常适合在这个阶段进行绘图操作。</p><p>读者如果感兴趣可以自行去了解 chart.js，mermaid 等绘图工具的使用。</p><p>**注意：**不要在 <code>updated</code> 钩子中更改组件的状态，因为这会导致无限的更新循环。</p><h3 id="二、路由" tabindex="-1"><a class="header-anchor" href="#二、路由"><span>二、路由</span></a></h3><h4 id="_1-路由的含义" tabindex="-1"><a class="header-anchor" href="#_1-路由的含义"><span>1.路由的含义</span></a></h4><p>Vue 的路由管理通常通过 Vue Router 来实现，它是 Vue.js 官方提供的路由库。路由的作用是根据 URL 的变化来渲染不同的组件，帮助开发者构建单页面应用（SPA）。但如果我们只需要一个简单的页面路由，而不想为此引入一整个路由库，可以通过动态组件的方式。</p><h4 id="_2-动态组件方式实现路由" tabindex="-1"><a class="header-anchor" href="#_2-动态组件方式实现路由"><span>2.动态组件方式实现路由</span></a></h4><p>让我们以下面这段代码为例进行解释:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./Home.vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;./About.vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">&#39;./NotFound.vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> Home<span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;/about&#39;</span><span class="token operator">:</span> About</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">currentPath</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">currentView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> routes<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentPath<span class="token punctuation">]</span> <span class="token operator">||</span> NotFound<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>currentPath <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> |</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> |</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/non-existent-path<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Broken Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentView<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-引入组件部分" tabindex="-1"><a class="header-anchor" href="#_1-引入组件部分"><span>（1）引入组件部分</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./Home.vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;./About.vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">&#39;./NotFound.vue&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这部分代码导入了三个组件：Home.vue、About.vue 和 NotFound.vue。这些组件对应不同的页面视图。当用户导航到不同的路径时，将显示不同的组件。当然，我们要事先在对应的路径上创建好这三个组件。</p><h5 id="_2-定义路由对象" tabindex="-1"><a class="header-anchor" href="#_2-定义路由对象"><span>（2）定义路由对象</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> Home<span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;/about&#39;</span><span class="token operator">:</span> About</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>routes</code> 是一个简单的对象，用于将路径映射到组件。前面的键是路径字符串，后面的值是对应的组件。这意味着当路径为 &#39;/&#39; 时，将显示 Home 组件；当路径为 <code>&#39;/about&#39;</code> 时，将显示 About 组件。</p><h5 id="_3-data-选项" tabindex="-1"><a class="header-anchor" href="#_3-data-选项"><span>（3）data 选项</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">currentPath</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data 返回了一个对象，包含了组件的响应式状态。这里的 <code>currentPath</code> 用于存储当前的路径。<code>window.location.hash.slice(1)</code> 是获取当前 URL 的 hash 值并去掉前面的 #。如果没有 hash，则默认返回 &#39;/&#39;。</p><p>那么什么是 hash 呢？</p><p>hash 是指 URL 中的一个片段，它以 # 开头，通常用来表示页面中的某个部分或状态。hash 是 URL 的一部分，但它不会被发送到服务器，因此不会触发页面的重新加载。例如一个典型的 URL 包含以下部分：<code>http://example.com/path/page.html#section</code></p><p>其中，<code>#section</code> 就是 hash。也就是说，hash 是 URL 的一部分，用于表示页面中的特定位置或状态。它不会触发页面重新加载，因此非常适合在单页面应用中实现无刷新导航和客户端路由。</p><h5 id="_4-computed-选项" tabindex="-1"><a class="header-anchor" href="#_4-computed-选项"><span>（4）computed 选项</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">currentView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> routes<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentPath<span class="token punctuation">]</span> <span class="token operator">||</span> NotFound<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>computed</code> 定义了计算属性 <code>currentView</code>。它根据 <code>currentPath</code> 返回相应的组件。如果 <code>currentPath</code> 对应的路径在 <code>routes</code> 中存在，返回相应组件；如果不存在，返回 <code>NotFound</code> 组件。</p><h5 id="_5-mounted-生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_5-mounted-生命周期钩子"><span>（5）mounted 生命周期钩子</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>currentPath <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mounted</code> 是我们前面刚刚讲到的 Vue 的生命周期钩子之一，表示组件已经挂载到 DOM 上。这里使用 <code>window.addEventListener</code> 监听 <code>hashchange</code> 事件。当 URL 的 <code>hash</code> 改变时，更新 <code>currentPath</code>，从而触发视图重新渲染。</p><h5 id="_6-模板部分" tabindex="-1"><a class="header-anchor" href="#_6-模板部分"><span>（6）模板部分</span></a></h5><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> |</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> |</span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/non-existent-path<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Broken Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentView<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;nav&gt;</code>标签中定义了三个链接，点击这些链接会改变 URL 的 hash 部分，从而触发路径更新和视图切换。</p><p><code>&lt;component :is=&quot;currentView&quot; /&gt;</code> 是 Vue 的动态组件，用于根据 <code>currentView</code> 的值动态渲染不同的组件。</p><h5 id="_7-实现效果" tabindex="-1"><a class="header-anchor" href="#_7-实现效果"><span>（7）实现效果</span></a></h5><p><img src="https://i-blog.csdnimg.cn/direct/2d34a55ffdee402fa392476f0553a486.png" alt="img"></p><p><img src="https://i-blog.csdnimg.cn/direct/396a734353cc4f29a1dbdf1be8cf6d25.png" alt="img"></p><p><img src="https://i-blog.csdnimg.cn/direct/8b81b6ed2f32436192879faa85fe01cb.png" alt="img"></p><p>可以看到，当我们点击不同的链接时，会改变 URL 的 hash 部分，从而触发 Vue.js 应用中对应的组件显示。</p><h4 id="_3-vue-router-实现路由" tabindex="-1"><a class="header-anchor" href="#_3-vue-router-实现路由"><span>3.Vue Router 实现路由</span></a></h4><p>相较于动态组件方式实现路由，Vue Router 提供了一种灵活且强大的方式来管理 Vue.js 应用中的路由，使得开发者能够创建复杂的单页面应用（SPA）。它支持动态路由、嵌套路由、懒加载组件和导航守卫等特性，能够简化页面导航逻辑、提高应用性能，并增强用户体验。通过集成 Vue Router，开发者可以更轻松地管理应用的视图状态，进行组件的动态切换，以及实现复杂的路由控制和权限管理。</p>`,71),r={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"三、element-plus",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三、element-plus"},[n("span",null,"三、Element Plus")])],-1),k=n("p",null,"Vue.js 是一个高度组件化的前端框架。组件化是 Vue.js 的核心特性之一，它将用户界面分解成可重用的、独立的组件，使得开发和维护变得更加高效和组织化。相信通过前面的学习，大家对此应该也有所体会。既然是一个如此高度组件化的前端框架，那么有没有什么能够直接供我们使用的组件呢？",-1),v={href:"https://element-plus.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"Element Plus 是一个与 Vue 3 完美匹配的 UI 组件库，专门为构建现代网页应用设计。它提供了很多现成的组件，比如按钮、表单和对话框，让你可以轻松地用 Vue 的方式快速创建漂亮的界面。每个组件都封装了自己的样式和功能，像一个个积木块一样，方便你在不同地方重复使用。通过结合 Vue 的组件化特性，Element Plus 使得设计和维护界面变得更加简单和高效。",-1),g=n("p",null,"善用 Element Plus 能够使我们的 Vue 项目开发事半功倍。",-1);function h(b,f){const a=e("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[s("由于内容较多，就不在此处进行展开，读者如果感兴趣，可以自行前往官方文档："),n("a",r,[s("Vue Router - Vue.js 的官方路由"),t(a)]),s(" 了解更多关于 Vue Router 的使用方式和细节。")]),d,k,n("p",null,[s("这就是我们现在要介绍的 Element Plus 了："),n("a",v,[s("Element Plus - 基于 Vue 3，面向设计师和开发者的组件库"),t(a)])]),m,g])}const y=p(i,[["render",h],["__file","Vuexuexibiji（liu）：shengmingzhouqigouzi、luyou、Element Plus.html.vue"]]),w=JSON.parse('{"path":"/blogs/frontEnd/Vue xuexibiji/Vuexuexibiji（liu）：shengmingzhouqigouzi、luyou、Element Plus.html","title":"Vue笔记","lang":"zh-CN","frontmatter":{"title":"Vue笔记","date":"2024/9/16","categories":["frontEnd/Vue 学习笔记"],"author":"aoxuexinghuo","tags":["Vue","手写笔记","前端框架"]},"headers":[{"level":2,"title":"Vue学习笔记（六）：生命周期钩子、路由、Element Plus","slug":"vue学习笔记-六-生命周期钩子、路由、element-plus","link":"#vue学习笔记-六-生命周期钩子、路由、element-plus","children":[{"level":3,"title":"一、生命周期钩子","slug":"一、生命周期钩子","link":"#一、生命周期钩子","children":[]},{"level":3,"title":"二、路由","slug":"二、路由","link":"#二、路由","children":[]},{"level":3,"title":"三、Element Plus","slug":"三、element-plus","link":"#三、element-plus","children":[]}]}],"git":{"createdTime":1726474714000,"updatedTime":1726474714000,"contributors":[{"name":"SimonWuZY","email":"153283769+simonwuzy@users.noreply.github.com","commits":1}]},"filePathRelative":"blogs/frontEnd/Vue 学习笔记/Vue学习笔记（六）：生命周期钩子、路由、Element Plus.md"}');export{y as comp,w as data};

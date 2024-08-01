import{_ as s,o as n,c as a,a as e}from"./app-IclfXZ4S.js";const i={},l=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>为了节约用户的时间成本，主题可以自动将 <code>series</code> 文件夹下的文档，按照文件夹嵌套关系生成系列的配置。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"></span>
<span class="line">/</span>
<span class="line">└─ .vuepress</span>
<span class="line">└─ series</span>
<span class="line">  └─ 系列1</span>
<span class="line">    └─ 文档1.md</span>
<span class="line">    └─ 文档2.md</span>
<span class="line">  └─ 系列2</span>
<span class="line">    └─ 分组1</span>
<span class="line">      └─ 文档3.md</span>
<span class="line">    └─ 分组2</span>
<span class="line">      └─ 文档4.md</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 自动设置分类</span></span>
<span class="line">    autoSetSeries<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function p(c,o){return n(),a("div",null,t)}const d=s(i,[["render",p],["__file","auto-set-series.html.vue"]]),u=JSON.parse('{"path":"/docs/flutter/theme/auto-set-series.html","title":"自动设置系列","lang":"zh-CN","frontmatter":{"title":"自动设置系列","date":"2023-02-17T00:00:00.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":1722477324000,"updatedTime":1722477324000,"contributors":[{"name":"lyydsheep","email":"2230561977@qq.com","commits":1}]},"filePathRelative":"docs/flutter/theme/auto-set-series.md"}');export{d as comp,u as data};

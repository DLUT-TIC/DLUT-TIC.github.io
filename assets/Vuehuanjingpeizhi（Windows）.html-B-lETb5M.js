import{_ as i,r as o,o as s,c as a,b as e,d as n,a as c,e as t}from"./app-v05Qjvz8.js";const r={},d=t('<h2 id="vue环境配置-windows" tabindex="-1"><a class="header-anchor" href="#vue环境配置-windows"><span>Vue环境配置（Windows）</span></a></h2><h3 id="一、node-js安装配置" tabindex="-1"><a class="header-anchor" href="#一、node-js安装配置"><span>一、node.js安装配置</span></a></h3><p>vue的使用需要以node.js为前提，如果您的电脑上已经安装了node.js，可直接跳过这一步。</p><p>我们可以在终端（win+r，然后输入cmd打开终端）中输入<code>node -v</code>来查询电脑上是否已经安装node.js以及版本号。如下图显示，我的电脑上目前已经安装了node.js，且版本号为20.12.0。</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/930ke.png" alt="930ke"></p>',5),m={href:"https://nodejs.org/zh-cn",target:"_blank",rel:"noopener noreferrer"},h=t('<p>下载完成后打开刚刚下载的文件：</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/v2ni9.png" alt="v2ni9"></p><p>选择安装路径：</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/7r85x.png" alt="7r85x"></p><p>选择我们需要的安装模式（注意此处要手动修改）：</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/j2yc2.png" alt="j2yc2"></p><p>手动勾选此处的自动安装必要工具项（用于安装一些额外的开发工具和依赖）：</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/qd9nz.png" alt="qd9nz"></p><p>选择安装：</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/bl154.png" alt="bl154"></p><p>安装完成：</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/cmy1z.png" alt="cmy1z"></p><p>然后我们可以使用前面提到的的方式，在终端中输入<code>node -v</code>来检查node.js是否成功安装。</p><h3 id="二、npm方法安装vue" tabindex="-1"><a class="header-anchor" href="#二、npm方法安装vue"><span>二、NPM方法安装Vue</span></a></h3><p>由于 npm 安装速度慢，因此我们在下载时选择使用淘宝镜像及其命令 cnpm。</p><p>首先在电脑上<strong>全局安装cnpm</strong>。</p><p>打开电脑终端，输入指令<code>npm install -g cnpm --registry=https://registry.npmmirror.com</code>。下载完成后输入<code>cnpm -v</code>进行检查。</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/e04cr.png" alt="e04cr"></p><p>注：cnpm是由淘宝NPM镜像提供的一个npm的镜像服务客户端，用于在中国大陆地区加速npm包的安装，因为直接使用npm在国内有时候会比较慢。cnpm和npm命令的用法几乎完全相同，所以我们可以无缝切换使用。</p><p>然后我们就可以输入<code>cnpm init vue@latest</code>来创建一个vue项目。它使用了Vue团队推荐的最新项目模板，提供了一种无需全局安装Vue CLI的方式来创建Vue项目，更加简单快捷。当然，你可以先选择好该项目的路径。</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/dg5he.png" alt="dg5he"></p><p>初次创建时，会询问我们是否下载对应的依赖项，我们输入y后回车即可。</p><p>其余设置无特殊要求，输入项目名称后，一路回车，保持默认即可。</p><p>然后我们依次输入他为我们提供的三条指令：</p><p><code>cd vue-project</code> 进入我们的vue项目目录，这里的vue-project为项目名称。</p><p><code>cnpm install</code> 安装项目所需的依赖项，使用cnpm下载速度更快。</p><p><code>npm run dev</code> 启动项目的开发服务器</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/mi79q.png" alt="mi79q"></p><p>上图显示项目启动成功，运行在<code>http:// localhost:5173</code>。我们将网址复制，在浏览器中打开。</p><p><img src="https://raw.githubusercontent.com/Emisaber/pic_obsidian/main/lh6pn.png" alt="lh6pn"></p><p>现在，你就成功创建了一个你自己的Vue项目模板， 你可以按照自己的想法对各个模块进行修改。</p>',31);function u(l,g){const p=o("ExternalLinkIcon");return s(),a("div",null,[d,e("p",null,[n("node.js的下载地址为："),e("a",m,[n("Node.js — 在任何地方运行 JavaScript"),c(p)])]),h])}const _=i(r,[["render",u],["__file","Vuehuanjingpeizhi（Windows）.html.vue"]]),v=JSON.parse('{"path":"/blogs/frontEnd/Vuehuanjingpeizhi（Windows）.html","title":"Vue笔记（环境配置）","lang":"zh-CN","frontmatter":{"title":"Vue笔记（环境配置）","date":"2024/9/16","categories":["frontEnd"],"author":"aoxuexinghuo","tags":["Vue","手写","前端框架"]},"headers":[{"level":2,"title":"Vue环境配置（Windows）","slug":"vue环境配置-windows","link":"#vue环境配置-windows","children":[{"level":3,"title":"一、node.js安装配置","slug":"一、node-js安装配置","link":"#一、node-js安装配置","children":[]},{"level":3,"title":"二、NPM方法安装Vue","slug":"二、npm方法安装vue","link":"#二、npm方法安装vue","children":[]}]}],"git":{"createdTime":1726474714000,"updatedTime":1726497971000,"contributors":[{"name":"saber","email":"wuyacwc@gmail.com","commits":1}]},"filePathRelative":"blogs/frontEnd/Vue环境配置（Windows）.md"}');export{_ as comp,v as data};

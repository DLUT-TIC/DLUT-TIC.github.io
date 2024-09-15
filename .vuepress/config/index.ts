import * as zhConfig from './zh'

export const themeConfig = {
  locales: {
    '/': {
      selectLanguageText: '语言',
      selectLanguageName: '简体中文',
      lastUpdatedText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      commentConfig: zhConfig.commentConfig,
      bulletin: zhConfig.bulletin,
      title: 'TIC',
      description: 'Welcome to TIC',
    },
  },
// 左上角的图标
  logo: '/logo.jpg',

  authorAvatar: '/logo.jpg',
  author: 'TIC-TEAM',

  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: '/favicon.ico' }],
      // 扩展markdown ---> 显示latex公式
    ['link', {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'}],
    ['link', {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js'}],
    ['link', {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css'}],
    ['link', {rel:'stylesheet', href:'https://gitcdn.xyz/cdn/goessner/markdown-it-texmath/master/texmath.css'}],
    ['script', {src: 'https://github.com/markdown-it/markdown-it/blob/master/bin/markdown-it.js'}],
    ['script', {src: 'https://gitcdn.xyz/cdn/goessner/markdown-it-texmath/master/texmath.js'}],
    ['script', {src: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js'}],

  ],

  // 根据blog文件中md的categories自动生成分类和标签
  autoSetBlogCategories: true,
  autoAddCategoryToNavbar: {
    location: 5, // 默认 0
    categoryText: '务虚笔记', // 默认 categories
    tagText: '标签' // 默认 tags
  },
  
  base: "/TIC/",
}

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

  logo: '/logo.png',

  authorAvatar: '/logo.png',
  author: 'TIC-TEAM',

  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  // 根据blog文件中md的categories自动生成分类和标签
  autoSetBlogCategories: true,
  autoAddCategoryToNavbar: {
    location: 5, // 默认 0
    categoryText: '碎碎念', // 默认 categories
    tagText: '标签' // 默认 tags
  },
  
  base: "/TIC/"
}

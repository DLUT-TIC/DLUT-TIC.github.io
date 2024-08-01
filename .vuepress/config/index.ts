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
    },
  },
  base:'/docs/',

  logo: '/logo.png',

  authorAvatar: '/logo.png',
  author: 'TIC-TEAM',

  // 根据blog文件中md的categories自动生成分类和标签
  autoSetBlogCategories: true,
  // 自动将分类和标签添加至头部导航条
  autoAddCategoryToNavbar: {
    location: 5, // 默认 0
    categoryText: '碎碎念', // 默认 categories
    tagText: '标签' // 默认 tags
  },

}

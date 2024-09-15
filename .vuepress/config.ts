import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/index'
import { viteBundler } from '@vuepress/bundler-vite'
import { katex } from '@mdit/plugin-katex'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      //首页左上角的文字
      title: 'DUT-TIC',
      description: 'Welcome to TIC',
    },
  },
  bundler: viteBundler({}),
  theme: recoTheme(themeConfig),
  // 扩展markdown ---> 显示latex公式
  extendsMarkdown: (md) => {
    md.use(katex);
    md.linkify.set({ fuzzyEmail: false });
  },
  // markdown: {
  //   lineNumbers: true,
  //   anchor: { permalink: false },
  //   toc: {includeLevel: [1,2]},
  //   extendMarkdown: md => {
  //     md.use(require('markdown-it-texmath'))
  //   }
  // }
})

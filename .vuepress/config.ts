import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/index'
import { viteBundler } from '@vuepress/bundler-vite'
import { katex } from '@mdit/plugin-katex'

export default defineUserConfig({
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'DUT-TIC',
      description: 'Welcome to TIC',
    },
  },
  bundler: viteBundler({}),
  theme: recoTheme(themeConfig),
  extendsMarkdown: (md) => {
    md.use(katex);
    md.linkify.set({ fuzzyEmail: false });
  },
})

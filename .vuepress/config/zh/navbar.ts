//这是右上方导航栏的配置
export const navbar = [
  {text: '首页', link: '/', icon: 'PageFirst'},

  {text: '前端', link: '/docs/flutter/flutter1', icon: 'PageFirst'},

  {text: '人工智能', link: '/docs/flutter/flutter1', icon: 'PageFirst'},

  {text: '后端', link: '/docs/flutter/flutter1', icon: 'PageFirst'},

  {
    text: '计算机基础',
    icon: 'Document',
    children: [
        { text: '计算机网络', link: 'www.baidu.com' },
        { text: '操作系统', link: 'www.baidu.com' },
        { text: '数据结构与算法', link: 'www.baidu.com' },
    ],
  },
]

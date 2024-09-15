//这是右上方导航栏的配置
export const navbar = [
  //文本、链接（点击后跳转到目标位置）、图标
  //图标只能使用https://www.xicons.org/#/zh-CN中的carbon类型
  {text: '首页', link: '/', icon: 'PageFirst'},

  {text: '前端', link: '/docs/frontEnd/大前端技术栈', icon: 'AnnotationVisibility'},

  {text: '人工智能', link: '/docs/ai/学习建议', icon: 'Star'},
  //docs目录下存放路线有关的文章，编写格式不做要求
  //碎碎念的文章放在blogs目录下，并且文章正文前的部分（用---包裹起来的部分）严格遵守编写格式
  {text: '后端', link: '/docs/backEnd/overview', icon: 'CloudSatelliteServices'},

  {
    text: '计算机基础',
    icon: 'Document',
    children: [
        { text: '计算机网络', link: 'www.baidu.com' },
        { text: '操作系统', link: 'www.baidu.com' },
        { text: '数据结构与算法', link: 'www.baidu.com' },
    ],
  },
  {
    text: '友情链接',
    children: [
      { text: '创新实践中心1', link: 'http://www.baidu.com', icon: 'Bar'},
      { text: 'Simon blog', link: 'http://www.baidu.com', icon: 'PageFirst'},
      { text: 'Nanami blog', link: 'http://www.baidu.com', icon: 'BrushFreehand'},
      { text: 'lyydsheep blog', link: 'http://www.baidu.com', icon: 'PageFirst'},
      { text: 'saber blog', link: 'https://emisaber.github.io/White_Box/', icon: 'Cafe'},
    ]
  }
]

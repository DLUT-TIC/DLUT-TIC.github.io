//这是评论的配置
export const commentConfig = {
  type: 'valine',
  options: {
    appId: 'jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz',
    appKey: 'Js91M9DfM9vPwVaUj7xdkbxh',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true,
    recordIP: true,
    hideComments: true, // 隐藏评论
  },
  // type: 'giscus',
  // options: {
  //   repo: 'vuepress-reco/docs-v2',
  //   repoId: 'R_kgDOGwsq6A',
  //   category: 'Comments',
  //   categoryId: 'DIC_kwDOGwsq6M4CWm89',
  //   mapping: 'title',
  //   hideComments: true, // 全局隐藏评论，默认 false
  // },
}

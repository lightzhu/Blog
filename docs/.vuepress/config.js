module.exports = {
  title: '朝花夕拾',
  subtitle: '朱国亮的个人博客',
  description: '让你软弱的正是你自己的懒惰！',
  base: '/',
  smoothScroll: true,
  // dest: 'public',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'ligtzhu' }],
    ['meta', { name: 'keywords', content: 'vuepress,前端,Node、H5、css、blog' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?50879d2668c8f4bf9b35b92431627be9";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `
    ]
  ],
  theme: 'reco',
  themeConfig: {
    author: 'lightzhu',
    authorAvatar: '/image/26041875.jpeg',
    logo: '/image/logo.png',
    type: 'blog',
    displayAllHeaders: true,
    // 自动形成侧边导航
    sidebar: 'auto',
    searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 项目开始时间
    startYear: '2019',
    docsDir: 'docs',
    docsBranch: 'gh-pages-source',
    mode: 'light',
    codeTheme: 'tomorrow',
    nav: [
      { text: 'Home', icon: 'reco-home', link: '/' },
      { text: '工具', icon: 'reco-api', link: '/tool/' },
      { text: 'External', link: 'https://github.com/lightzhu' }
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      }
    }
  },
  configureWebpack: {
    devServer: {
      port: 3100,
      hot: true,
      open: true,
      hotOnly: true
      // inline: true,
    },
    resolve: {
      alias: {
        '@': '.vuepress'
      }
    }
  }
}

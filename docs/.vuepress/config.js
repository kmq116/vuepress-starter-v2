module.exports = {
  // 站点配置
  // lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",

    sidebar: [
      // SidebarItem
      {
        text: "01-第一章",
        link: "/guide/",
        collapsible: true,
        children: [
          // SidebarItem
          {
            text: "起始",
            // link: "https://github.com",
            children: ["/guide/README.md", "/guide/start.md"],
          },
        ],
      },
    ],
  },
};

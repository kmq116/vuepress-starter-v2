module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        sidebar: [
            // SidebarItem
            {
                text: 'new Vue',
                children: [
                    {
                        text: 'github',
                        children: ['/guide/index.md','/guide/newVue.md']
                    },
                ],
            },
            // 字符串 - 页面文件路径
        ],
    },
    plugins: [
        '@vuepress/plugin-search',
        {
            // 允许搜索 Frontmatter 中的 `tags`
            getExtraFields: (page) => page.frontmatter.tags ?? [],
        },
    ]
};

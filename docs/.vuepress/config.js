module.exports = {
    // 站点配置
    // lang: "zh-CN",
    title: "Hello， VuePress ！",
    description: "这是我的第一个 VuePress 站点",

    // 主题和它的配置
    theme: "@vuepress/theme-default",
    themeConfig: {
        logo: "https://vuejs.org/images/logo.png",

        sidebar: [
            // SidebarItem
            {
                text: "01-点击展开",
                collapsible: true,
                children: [
                    // SidebarItem
                    {
                        text: "起始",
                        collapsible: true,
                        // link: "https://github.com",
                        children: ["/guide/README.md", "/guide/start.md"],
                    },
                ],
            }, {
                text: "02-第二章",
                collapsible: true,
                children: [
                    // SidebarItem
                    {
                        text: "起始",
                        collapsible: true,
                        link: "https://github.com",
                        children: ["/learn/01.md"],
                    },
                ],
            },
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

module.exports = {
    title: 'OpenAPI 使用文档',
    description: 'OpenAPI 使用文档',
    base: '/',
    themeConfig: {
        repo: 'Asce90237/API-Docs', //右上角github链接
        editLinks: true,
        smoothScroll: true,
        docsDir: 'docs',
        locales: {
            '/': {
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    {
                        text: '指南',
                        link: '/',
                    },
                    {
                        text: 'OpenAPI',
                        link: 'https://www.openapi.love',
                    },
                    {
                        text: '支持 OpenAPI',
                        link: '/support/',
                    },
                ],
                sidebar: {
                    '/': [
                        {
                            title: '指南',
                            collapsable: true,
                            children: [''],
                        },
                        {
                            title: '腾讯QQ',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'tencent/avatar',
                            ],
                        },
                        {
                            title: '热点趋势',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'trending/baidu',
                                'trending/douyin',
                                'trending/weibo',
                                'trending/zhihu',
                            ],
                        },
                        {
                            title: '随机输出',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'random/yiyan',
                                'random/color',
                                'random/acg',
                            ],
                        },
                        {
                            title: '智能聊天',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'aichat/chatgpt',
                            ],
                        },
                        {
                            title: '机器生成',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'drawing/emojichange',
                                'drawing/ppt',
                                'drawing/rating',
                            ],
                        },
                        {
                            title: '实用接口',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                'utility/getip',
                                'utility/history',
                                'utility/phonehome',
                                'utility/telvalid',
                            ],
                        },
                    ],
                },
            },
        },
    },
    head: [
        ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?d3b3b1b968a56124689d1366adeacf8f";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`],
        ['script', {"data-ad-client": "ca-pub-1759509770249694", async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}],
        ['script', {}, '(adsbygoogle = window.adsbygoogle || []).push({});'],
    ]
};
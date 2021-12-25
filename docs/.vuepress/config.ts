import { defineUserConfig } from '@vuepress/cli';
import type { DefaultThemeOptions } from '@vuepress/theme-default';

export default defineUserConfig<DefaultThemeOptions>({
    title: 'xhayper',
    base: '/',
    head: [
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/favicon-16x16.png` }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/images/icons/favicon-32x32.png` }],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['link', { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` }],
        ['link', { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
        ['meta', { name: 'description', content: 'A collection of random stuff that is useful sometime.' }],
        ['meta', { property: 'og:description', content: 'A collection of random stuff that is useful sometime.' }],
        ['meta', { property: 'og:url', content: 'https://xhayper.github.io/' }]
    ],
    themeConfig: {
        repo: 'xhayper/xhayper.github.io',
        docsDir: 'docs',
        navbar: [
            {
                text: "Guide",
                link: "/guide"
            },
            {
                text: "RPG Maker MV",
                link: "/rpg-maker-mv"
            }
        ],

        sidebar: {
            '/guide': [
                {
                    text: 'Guide',
                    children: [
                        '/guide/README.md'
                    ],
                },
            ],
            '/rpg-maker-mv': [
                {
                    text: 'RPG Maker MV',
                    children: [
                        '/rpg-maker-mv/README.md',
                        '/rpg-maker-mv/updating.md'
                    ],
                },
            ]
        }
    },
    plugins: [
        [
            '@vuepress/plugin-google-analytics',
            {
                'id': 'G-Z1LMRJWXRS'
            }
        ],
        [
            '@vuepress/plugin-shiki',
            {
                'langs': ['js', 'html', 'bat', 'bash', 'json']
            }
        ],
        ['@vuepress/plugin-pwa'],
        ['@vuepress/plugin-pwa-popup']
    ]
});
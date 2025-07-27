import { defineConfig } from 'vitepress'
import vitepressProtectPlugin from 'vitepress-protect-plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "赔钱云宇宙 Wiki",
  description: "赔钱云指北",
  ignoreDeadLinks: [
    (link: string) => {
      // 忽略所有链接检查
      return true
    }
  ],
  vite: {
    plugins: [
      vitepressProtectPlugin({
        disableF12: true, // 禁用F12开发者模式
        disableCopy: false, // 启用文本复制
        disableSelect: false, // 启用文本选择
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Wiki', link: '/wiki' }
    ],

    sidebar: [
      {
        text: 'wiki',
        items: [
          { text: 'Wiki', link: '/wiki' },
          { text: '语录收集', link: '/bgp' }
        ]
      },
      {
        text: '乐子',
        items: [
          { text: '群主', link: '/lezi/zjx'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/q3cc/peiqian-wiki' }
    ],

    footer: {
      message: "除文档和图片外文件遵循 MIT 协议发布，文档和图片遵循 CC-BY-NC-SA 4.0 协议发布。",
      copyright: "赔钱云宇宙 Wiki © 2025-present",
    }
  }
})

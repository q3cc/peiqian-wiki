import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "赔钱云宇宙 Wiki",
  description: "赔钱云指北",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Wiki', link: '/wiki' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Wiki', link: '/wiki' },
          { text: '语录收集', link: '/bgp' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/q3cc' }
    ],

    footer: {
      message: "“赔钱云宇宙 Wiki”与“赔钱云”无关",
      copyright: "赔钱云宇宙 Wiki © 2025-present",
    }
  }
})

import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    //navbar: ['/', '/get-started','about'],
     navbar: [
      { text: '首頁', link: '/' },
      { text: '關於我們', link: '/about' }
    ]
  }),

  bundler: viteBundler(),
})

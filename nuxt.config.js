import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/scss/app.scss',
    '~/assets/scss/hamburger.scss',
  ],
  components: {
    global: true,
    dirs: ['~/components', '~/storyblok'],
  },
  modules: [
    [
      '@storyblok/nuxt',
      { 
        accessToken: process.env.STORYBLOK_SPACE_TOKEN,
        region: 'eu'
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
  },
  buildModules: ["@nuxtjs/svg"],
  build: {
    transpile: ['swiper']
  },
})

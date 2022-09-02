import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/scss/fonts.scss',
    '~/assets/scss/hamburger.scss',
  ],
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_SPACE_TOKEN }],
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
  },
  buildModules: ["@nuxtjs/svg"],
})

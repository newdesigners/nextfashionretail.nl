import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/css/fonts.css',
  ],
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_SPACE_TOKEN }],
    '@nuxtjs/tailwindcss',
  ],
})

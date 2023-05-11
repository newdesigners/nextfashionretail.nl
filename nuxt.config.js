import { defineNuxtConfig } from 'nuxt/config'
import axios from 'axios'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) return;

      let per_page = 100;
      let requests = [];
      let totalPages;

      const stories = await axios
        .get("https://api.storyblok.com/v2/cdn/stories", {
          params: {
            per_page: 1,
            page: 1,
            token: process.env.STORYBLOK_SPACE_TOKEN,
          },
        })
        .then((response) => {
          // access total header -> Total amount of Stories
          // and calculate Total amount of pages
          totalPages = Math.ceil(response.headers.total / per_page);

          for (let i = 1; i <= totalPages; i++) {
            requests.push(
              axios.get("https://api.storyblok.com/v2/cdn/stories", {
                params: {
                  per_page: per_page,
                  page: i,
                  token: process.env.STORYBLOK_SPACE_TOKEN,
                },
              })
            );
          }
          return Promise.all(requests);
        })
        .then((responses) => {
          let allStories = responses.reduce((acc, response) => {
            return acc.concat(response.data.stories);
          }, []);

          return allStories;
        })
        .catch((error) => {
          console.error(error);
        });

      stories.forEach(({ full_slug }) => {
        let slugToAdd = `/${full_slug}`; // Always append a forward slash at the beginning of `full_slug`
        nitroConfig.prerender.routes.push(slugToAdd);
      });
    },
  },
  css: [
    '~/assets/scss/app.scss',
    '~/assets/scss/hamburger.scss',
  ],
  components: {
    global: true,
    dirs: ['~/components', '~/storyblok']
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
  build: {
    transpile: ['swiper']
  },
  publicRuntimeConfig: {
    HOST_NAME: process.env.HOST_NAME
  },
})

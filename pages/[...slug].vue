<script setup>
  let { slug } = useRoute().params
  if (slug.length > 1) slug = slug.join('/')
  const config = useRuntimeConfig()
  const story = await useStoryblok(slug ? slug : 'home', { version: 'draft' })
  const openGraphImage = 'https://a.storyblok.com/f/172899/1200x630/498416cf68/open-graph-sharing-image.jpg'
  const title = story.value.name ? story.value.name : 'Home'
  const description = 'Next Fashion Retail helpt jou met duurzamer worden'
  
  useHead({
    titleTemplate: 'Next Fashion Retail | %s',
    title,
    htmlAttrs: {
      lang: 'nl-NL'
    },
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        name: 'msapplication-TileColor',
        content: '#603cba'
      },
      {
        name: 'theme-color',
        content: '#fff1e5'
      },
      {
        property: 'og:locale',
        content: 'nl_NL'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'Next Fashion Retail'
      },
      {
        property: 'og:image',
        content: openGraphImage
      },
      {
        property: 'og:image:width',
        content: '1200'
      },
      {
        property: 'og:image:height',
        content: '630'
      },
      {
        property: 'og:title',
        content: `Next Fashion Retail | ${ title }`
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:url',
        content: config.HOST_NAME + '/' + slug
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: `Next Fashion Retail | ${ title }`
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: openGraphImage
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00e676' },
    ],
    script: [
      { defer:true, 'data-domain':"nextfashionretail.nl", src:"https://plausible.io/js/plausible.js" }
    ]
  })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
<script setup>
  let { slug } = useRoute().params
  if (slug.length > 1) slug = slug.join('/')
  const story = await useStoryblok(slug ? slug : 'home', { version: 'draft' })

  // definePageMeta({
  //   title: title
  // })
  useHead({
    titleTemplate: 'Next Fashion Retail | %s',
    title: `${ story.value.name }`,
    htmlAttrs: {
      lang: 'nl-NL'
    },
    meta: [
      {
        name: 'description',
        content: 'Next Fashion Retail helpt jou met duurzamer worden'
      },
      {
        name: 'msapplication-TileColor',
        content: '#603cba'
      },
      {
        name: 'theme-color',
        content: '#fff1e5'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00e676' },
    ],
  })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
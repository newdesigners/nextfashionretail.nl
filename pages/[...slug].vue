<script setup>
  let { slug } = useRoute().params
  if (slug.length > 1) slug = slug.join('/')
  const story = await useStoryblok(slug ? slug : 'home', { version: 'draft' })

  useHead({
  title: 'Next Fashion Retail',
  meta: [{
    name: 'description',
    content: 'Next Fashion Retail helpt jou met duurzamer worden'
  }],
  link: [{
    
  }]
})
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
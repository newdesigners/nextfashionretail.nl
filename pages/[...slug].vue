<script setup>
  let { slug } = useRoute().params
  if (slug.length > 1) slug = slug.join('/')
  const story = await useStoryblok(slug ? slug : 'home', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
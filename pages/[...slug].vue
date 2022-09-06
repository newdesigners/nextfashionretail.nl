<script setup>
  const route = useRoute()
  const slug = route.params.slug
  const story = await useStoryblok(slug ? slug : 'home', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
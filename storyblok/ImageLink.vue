<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <a
  
    :href="blok.url.cached_url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <figure v-if="blok.image.filename">
      <img 
        :src="blok.image.filename"
        :alt="blok.image.alt"
      />
    </figure>
  </a>
</template>
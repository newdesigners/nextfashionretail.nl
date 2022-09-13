<script setup>
  const props = defineProps({ blok: Object })
  const articleContent = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <article
    class="rich-text prose-sm md:prose-lg lg:prose-xl md:max-w-none"
    v-html="articleContent"
  >
  </article>
</template>
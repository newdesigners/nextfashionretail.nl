<script setup>
  const props = defineProps({ blok: Object })
  const articleContent = computed(() => renderRichText(props.blok.description))
</script>

<template>
  <article
    v-if="props.blok.textleft"
    class="text-left rich-text prose-sm md:prose-lg lg:prose-xl md:max-w-none"
    v-html="articleContent"
  >
  </article>
  <article
    v-else
    class="rich-text prose-sm md:prose-lg lg:prose-xl md:max-w-none"
    v-html="articleContent"
  >
  </article>
</template>
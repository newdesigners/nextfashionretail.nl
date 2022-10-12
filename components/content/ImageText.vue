<script setup>
  const props = defineProps({ blok: Object })
  const articleContent = computed(() => renderRichText(props.blok.description))
</script>

<template>
  <aside class="py-4">
    <div class="md:flex md:items-center md:gap-x-6 lg:gap-x-12">
      <figure
        class="md:w-1/2 lg:w-1/3" 
        v-if="blok.image.filename"
      >
        <img 
          :src="`${ blok.image.filename }/m/1200x0/filters:quality(80)`"
          :alt="blok.image.alt"
        />
      </figure>
      <div class="md:flex-1">
        <article
          class="rich-text prose-sm md:prose-lg lg:prose-xl md:max-w-none"
          v-html="articleContent"
        >
      </article>
      </div>
    </div>
  </aside>
</template>
<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <aside class="py-4">
    <figure v-if="blok.source.filename">
      <img class="w-full aspect-square sm:aspect-[2.36] object-center object-cover h-auto"
        :src="blok.source.filename"
        :alt="blok.source.alt"
      />
    </figure>
  </aside>
</template>
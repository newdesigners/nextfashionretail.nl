<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <aside class="py-4">
    <figure v-if="blok.source.filename">
      <img class="w-full aspect-square sm:aspect-[2.4] object-center object-cover h-auto"
        :src="`${ blok.source.filename }/m/1800x0/filters:quality(80)`"
        :alt="blok.source.alt"
      />
    </figure>
  </aside>
</template>
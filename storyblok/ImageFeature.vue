<script setup>
import Text from '../components/content/Text.vue';

  defineProps({ blok: Object })
</script>

<template>
  <section 
    v-editable="blok"
    class="py-16 sm:py-24 lg:py-32 xl:py-44"
  >
    <div class="container items-center flex flex-col sm:flex-row lg:w-5/6 xl:w-[85%] gap-[70px] lg:gap-0 lg:justify-between">
      <figure 
        v-if="blok.image.filename"
        class="w-1/2 min-w-[190px] sm:max-w-[190px] lg:max-w-none lg:w-1/3" 
      >
        <img
          class="w-full h-auto"
          :src="`${ blok.image.filename }/m/920x0/filters:quality(80)`"
          :alt="blok.image.alt"
        >
      </figure>
      <article class="flex-1 lg:flex-initial lg:w-1/2 xl:w-[45%]">
        <h2 class="pb-6 sm:pb-4 xl:pb-3.5">{{ blok.title }}</h2>
        <Text :blok="blok"/>
      </article>
    </div>
  </section>
</template>
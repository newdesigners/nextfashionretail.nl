<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <section class="py-16 xl:py-44">
    <div class="container items-center flex flex-col sm:flex-row lg:w-5/6 xl:w-[90%] gap-[70px] lg:gap-0 lg:justify-between">
      <figure 
        v-if="blok.image.filename"
        class="w-1/2 min-w-[190px] sm:max-w-[190px] lg:max-w-none lg:w-1/3" 
      >
        <img
          class="w-full h-auto"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        >
      </figure>
      <article class="flex-1 lg:flex-initial lg:w-[45%] xl:w-1/2">
        <h2 class="pb-8 sm:pb-4 xl:pb-3.5">{{ blok.title }}</h2>
        <p>{{ blok.text }}</p>
      </article>
    </div>
  </section>
</template>
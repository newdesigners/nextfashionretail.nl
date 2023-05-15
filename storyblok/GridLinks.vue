<script setup>
import Text from '../components/content/GridLinkText.vue';

  defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="bg-nfr-beige"
  >
    <div class="container py-6 lg:py-16 xl:py-20">
      <article class="sm:text-center pb-10 sm:pb-16 sm:mx-auto">
        <h2 v-if="blok.textleft" class="text-left text-24 lg:text-30 xl:text-40 xl:pb-3.5">{{ blok.title }}</h2>
        <h2 v-else class="text-24 lg:text-30 xl:text-40 xl:pb-3.5">{{ blok.title }}</h2>
        <Text :blok="blok"/>
      </article>
      <ul
        v-if="blok.cards"
        class="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-8 sm:gap-x-10 md:gap-x-20 md:gap-y-10 lg:gap-x-28 lg:grid-cols-[minmax(0,_46%)_minmax(0,_46%)]"
      >
        <li
          v-for="card in blok.cards"
          :key="card.id"
          class=""
        >
          <StoryblokComponent :blok="card" /> 
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="bg-nfr-beige"
  >
    <div class="container py-14 lg:py-18 xl:py-24">
      <article class="sm:text-center pb-10 sm:pb-16 sm:w-[70%] sm:mx-auto xl:w-3/5">
        <h2 class="pb-5">{{ blok.title }}</h2>
        <p>{{ blok.description }}</p>
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
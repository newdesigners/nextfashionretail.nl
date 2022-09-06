<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="bg-nfr-beige"
  >
    <div class="container py-14">
      <article class="sm:text-center pb-8 sm:pb-16 sm:w-4/5 sm:mx-auto">
        <h2 class="pb-5">{{ blok.title }}</h2>
        <p class >{{ blok.description }}</p>
      </article>
      <ul
        v-if="blok.cards"
        class="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-5 sm:gap-x-14"
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
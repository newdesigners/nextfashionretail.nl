<script setup>
import Button from '../components/content/Button.vue';

  defineProps({ blok: Object, isFirst: Boolean })
</script>

<template>
  <section
    v-editable="blok"
    :class="[`bg-beige-100`, { 'bg-inherit' : blok.container_width === 'small' }]" 
  >
    <div class="container py-6 lg:py-16 xl:py-20 ">
      <article
        :class="[`bg-white`, { 'p-9 md:p-14 xl:p-24' : blok.container_width === 'small' }]" 
      >
        <aside
          v-if="blok.close_button"
          class="text-right pb-3"
        >
          <NuxtLink
            :to="blok.close_button && blok.close_button_link_to ? `/${ blok.close_button_link_to.cached_url }` : '/'" 
            class="close-button inline-block hover:text-black"
          >
            <figure class="relative w-[46px] md:w-[56px] lg:w-[60px] inline-block">
            <img class="w-full h-auto"
              src="~/assets/images/svg/blob-1.svg"
              alt="blob illustratie"
            />
            <SvgImport
              type="x"
              class="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            </figure>
          </NuxtLink>
        </aside>
        <div v-if="isFirst">
          <h1 class="text-24 lg:text-30 xl:text-40 xl:pb-3.5">{{ blok.title }}</h1>
        </div>
        <div v-else>
          <h2 class="text-24 lg:text-30 xl:text-40 xl:pb-3.5">{{ blok.title }}</h2>
        </div>
        <component
          v-for="blok in blok.content"
          :key="blok._uid"
          :blok="blok"
          :is="blok.component"
        />
      </article>
    </div>
  </section>
</template>

<style lang="scss">
  a.close-button {
    &.router-link-active {
      @apply text-black;
    }
  }
</style>
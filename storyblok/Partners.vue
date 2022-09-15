<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="py-14 lg:py-20"
    :class="`bg-${ blok.background_color }`"

  >
    <div class="container">
      <h2 class="pb-10 lg:pb-14 font-bold lg:text-30">{{ blok.title }}</h2>
      <aside>
        <ul class="grid grid-cols-3 sm:flex sm:flex-wrap gap-8 sm:gap-9 md:gap-12">
          <li
            v-for="partner in blok.partners"
            :key="partner._uid"
            class="flex"
          >
            <StoryblokComponent
              class="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[120px]"
              :blok="partner"
            />
          </li>
        </ul>
      </aside>
  </div>
  </section>
</template>
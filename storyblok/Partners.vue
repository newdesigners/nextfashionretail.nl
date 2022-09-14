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
        <ul class="grid grid-cols-3 sm:flex sm:flex-wrap gap-8 sm:justify-between">
          <li
            v-for="partner in blok.partners"
            :key="partner._uid"
            class="flex"
          >
            <StoryblokComponent
              class="max-w-[66px] lg:max-w-[90px] xl:max-w-[120px]"
              :blok="partner"
            />
          </li>
        </ul>
      </aside>
  </div>
  </section>
</template>
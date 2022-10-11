<script setup>
  const props = defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="bg-nfr-beige"
  >
    <div class="pt-[110px]">
      <section
        v-editable="blok"
        :class="[`bg-${ blok.section_background_color }`, { 'bg-inherit' : blok.container_width === 'small' }]" 
      >
        <div class="container py-6 lg:py-16 xl:py-20">
          <article
            :class="[`bg-${ blok.section_background_color }`, { 'p-9 md:p-14 xl:p-24' : blok.container_width === 'small' }]" 
          >
            <!-- <div v-if="isFirst">
              <h1 class="text-24 lg:text-30 xl:text-40 xl:pb-3.5">{{ blok.title }}</h1>
            </div>
            <div v-else>
              <h2 class="text-24 lg:text-30 xl:text-40 xl:pb-3.5">{{ blok.title }}</h2>
            </div> -->
            <component
              v-for="blok in blok.content"
              :key="blok._uid"
              :blok="blok"
              :is="blok.component"
            />
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
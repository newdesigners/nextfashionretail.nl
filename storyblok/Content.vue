<script setup>
  defineProps({ blok: Object, isFirst: Boolean })
</script>

<template>
  <section
    v-editable="blok"
    class="container mb-10 lg:mb-28"
  >
    <article
      :class="[`bg-${ blok.section_background_color }`, { 'p-10 py-14 md:p-14 xl:p-24' : blok.container_width === 'small' }]" 
    >
      <aside
        v-if="blok.close_button"
        class="text-right pb-3"
      >
        <NuxtLink to="/" class="inline-block hover:text-black">
          <figure class="relative w-[31px] lg:w-[55px] inline-block">
          <img class="w-full h-auto"
            src="~/assets/images/svg/blob-1.svg"
            alt="blob illustratie"
          />
          <SvgImport
            type="x"
            class="w-[16px] lg:w-[28px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
  </section>
</template>
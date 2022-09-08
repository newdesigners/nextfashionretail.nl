<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok">
    <article class="p-8 lg:p-14 xl:p-20 bg-white flex flex-col md:flex-row md:items-center md:justify-between">
      <div class="text-center md:text-left md:flex md:flex-col-reverse md:md:justify-start md:pb-3 md:w-3/4 lg:w-[70%]">
        <aside class="mb-5 sm:mb-8 md:mb-0">
          <ul class="flex gap-x-1.5 justify-end md:justify-start">
            <li
              v-for="tag in blok.tags"
              :key="tag.uid"
              class="bg-nfr-green text-[8px] lg:text-[10px] lg:px-5 py-0.5 px-3 rounded-full"
            >
              {{ tag.name }}
            </li>
          </ul>
        </aside>
        <article class="pb-6 xl:pb-10">
          <h2 class="font-bold pb-5 xl:pb-8">{{ blok.title }}</h2>
          <p>{{ blok.description}}</p>
        </article>
      </div>
      <figure
          v-if="blok.image.filename"
          class="w-[66px] h-auto mx-auto md:mx-0 md:max-w-[250px] md:w-1/6"
        >
          <img
            class="w-full h-auto"
            :src="blok.image.filename"
            alt="blok.image.alt"
          />
      </figure>
    </article>
  </section>
</template>
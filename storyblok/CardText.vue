<script setup>
  const props = defineProps({ blok: Object })
  const articleContent = computed(() => renderRichText(props.blok.content.description))
</script>

<template>
  <section v-editable="blok">
    <article class="p-8 lg:p-14 xl:p-20 bg-white flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap">
      <div class="text-center md:text-left md:flex md:flex-col md:md:justify-start pb-3 md:w-3/4 lg:w-[70%]">
        <aside class="mb-5 sm:mb-8">
          <ul class="flex gap-x-1.5 lg:gap-x-3 justify-end md:justify-start">
            <li
              v-for="tag in blok.content.tags"
              :key="tag.uid"
              class="bg-nfr-green text-[8px] lg:text-[10px] xl:text-[14px] lg:px-5 py-0.5 px-3 rounded-full"
            >
              {{ tag.name }}
            </li>
          </ul>
        </aside>
        <article>
          <h2 class="font-bold md:text-16 lg:text-18 xl:text-24">{{ blok.content.title }}</h2>
          <div
            class="rich-text prose-sm md:prose-lg lg:prose-xl md:max-w-none"
            v-html="articleContent"
          >
          </div>
        </article>
      </div>
      <figure
        v-if="blok.content.image.filename"
        class="w-[66px] h-auto mx-auto md:mx-0 md:max-w-[250px] md:w-[20%]"
      >
        <img
          class="w-full h-auto"
          :src="blok.content.image.filename"
          alt="blok.content.image.alt"
        />
      </figure>
      <aside class="flex justify-center md:justify-end w-full">
        <MainButton :button="{ label: 'Lees meer', link: { cached_url: blok.full_slug, linktype: 'story'} }" />
      </aside>
    </article>
  </section>
</template>
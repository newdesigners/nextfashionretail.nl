<script setup>
  const props = defineProps({ blok: Object, isFirst: Boolean })

  const resolvedRichText = computed(() => {
    const storyBlokApi = useStoryblokApi()
    storyBlokApi.setComponentResolver((component, blok) => {
      switch(component) {
        case 'GridIcons': {
          return `<GridIconsComponent />`
        }
        case 'Video' : {

        }
        default:
          return `Component ${ component } is niet gevonden`
      }
    })

    return storyBlokApi.richTextResolver.render(props.blok.content);
  })
</script>

<template>
  <section v-editable="blok">
    <article class="container mb-10 lg:mb-36">
      <div class="bg-white p-8 lg:p-12 xl:p-24">
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
          <h1 class="pb-3.5">{{ blok.title }}</h1>
        </div>
        <div v-else>
          <h2 class="text-24 lg:text-30 xl:text-40 pb-3.5">{{ blok.title }}</h2>
        </div>
        <article
          class="prose-sm md:prose lg:prose-xl rich-text md:max-w-none"
          v-html="resolvedRichText"
        >
        </article>
      </div>
    </article>
  </section>
</template>
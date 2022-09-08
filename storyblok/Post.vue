<script setup>
  const props = defineProps({ blok: Object })
  const resolvedRichText = computed(() => renderRichText(props.blok.content))
  const richText = ref(null)
  console.log(richText);
</script>

<template>
  <section 
    v-editable="blok"
  >
    <article class="container">
      <div class="bg-white p-8 lg:p-12 xl:p-20">
        <aside
          v-if="blok.close_button"
          class="text-right pb-3"
        >
          <NuxtLink to="/" class="inline-block hover:text-black">
            <figure class="relative w-[31px] inline-block">
              <img class="w-full h-auto"
                src="~/assets/images/svg/blob-1.svg"
                alt="blob illustratie"
              />
              <SvgImport
                type="x"
                class="w-[16px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </figure>
          </NuxtLink>
        </aside>
        <h1 class="pb-3.5">{{ blok.title }}</h1>
        <article
          ref="richText"
          class="prose-sm md:prose lg:prose-xl rich-text"
          v-html="resolvedRichText"
        >
        </article>
      </div>
    </article>
  </section>
</template>
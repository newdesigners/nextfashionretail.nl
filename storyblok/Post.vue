<script setup>
  const props = defineProps({ blok: Object })
  const resolvedRichText = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <section 
    v-editable="blok"
  >
    <article class="container">
      <div class="bg-white p-8">
        <aside
          v-if="blok.close_button"
          class="text-right pb-3"
        >
          <NuxtLink class="inline-block" to="/">
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
          class="prose-sm md:prose lg:prose-xl rich-text"
          v-html="resolvedRichText">
        </article>
      </div>
    </article>
  </section>
</template>
<script setup>
  const props = defineProps({ blok: Object, isFirst: Boolean })
  const articleContent = computed(() => renderRichText(props.blok.description)) 
  // let articleContent;

  // try {
  //   articleContent = computed(() => renderRichText(props.blok.description))
  // } catch (error) {
  //   // Handle the error, e.g., log it or show a fallback content
  //   console.error('Error rendering rich text:', error)
  // }
</script>

<template>
  <section
    v-editable="blok"
    :class="{ 'pt-6 lg:pt-16': isFirst }"
  >
    <div class="container pb-16 sm:text-center sm:w-[70%] sm:mx-auto xl:w-3/5">
      <div class="pb-2">
        <div v-if=isFirst>
          <h1>{{ blok.title }}</h1>
        </div>
        <div v-else>
          <h2>{{ blok.title }}</h2>
        </div>
      </div>
      <article v-if="articleContent" class="rich-text prose-sm md:prose-lg lg:prose-xl md:max-w-none" v-html="articleContent">
      </article>
      <!-- <p>{{ blok.description }}</p> -->
    </div>
  </section>
</template>
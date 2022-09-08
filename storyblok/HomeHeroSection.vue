<script setup>
  const props = defineProps({ blok: Object })
  const imageUrl = computed(() => { return { backgroundImage: `url(${ props.blok.background_image.filename })`}});
</script>

<template>
  <section
    v-editable="blok"
    class="relative w-full h-[90vh] flex bg-cover bg-bottom after:w-full after:h-full after:bg-black after:opacity-30 after:absolute after:left-0 after:top-0 after:z-[1]"
    :style="imageUrl"
  >
    <div class="relative h-[auto] w-full flex justify-center items-center">
      <div class="container relative z-[3] pt-[35%] sm:pt-[12%] lg:pt-[12%]">
        <h1 class="text-white font-extrabold text-[33px] lg:text-40 xl:text-[80px] lg:mx-auto lg:text-center xl:w-[85%]">{{ blok.headline }}</h1>
      </div>
      <Svg
        type="blob-1-stroke"
        class="z-[2] home-hero__blob-figure absolute -translate-x-1/2 -translate-y-1/2 w-[320px] lg:w-[500px] xl:w-[814px] left-0 top-[90%] sm:top-[85%]"
      />
    </div>
  </section>
</template>
 
<style scoped>
  .home-hero__blob-figure :deep() svg path {
    @apply stroke-nfr-green;
  }
</style>

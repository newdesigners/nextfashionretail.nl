<script setup>
  const props = defineProps({ blok: Object })
  const imageUrl = computed(() => { 
    return { backgroundImage: `url('${ props.blok.background_image.filename }/m/1635x0/filters:quality(80)')` } 
  })
</script>

<template>
  <section
    v-editable="blok"
    class="mt-[-142px] lg:mt-[-168px] relative w-full h-[75vh] sm:h-[90vh] md:h-[70vh] lg:h-[90vh] flex bg-cover bg-bottom after:w-full after:h-full after:bg-black after:opacity-30 after:absolute after:left-0 after:top-0 after:z-[1]"
    :style="imageUrl"
  >
    <div class="relative h-[auto] w-full flex justify-center items-center">
      <div class="container relative z-[3] pt-[35%] sm:pt-[12%] lg:pt-[12%]">
        <h1 class="text-white font-extrabold text-[34px] md:text-40 xl:text-[44px] 2xl:text-[48px] lg:mx-auto md:text-center lg:w-[85%]">{{ blok.headline }}</h1>
      </div>
      <SvgImport
        type="blob-1-stroke"
        class="z-[2] home-hero__blob-figure absolute -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[360px] lg:w-[400px] xl:w-[440px] 2xl:w-[590px] left-0 top-[90%] sm:top-[85%]"
      />
    </div>
  </section>
</template>
 
<style lang="scss">
  .home-hero__blob-figure svg path {
    @apply stroke-nfr-green;
  }
</style>

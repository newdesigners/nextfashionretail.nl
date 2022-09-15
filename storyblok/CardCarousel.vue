<script setup>
  defineProps({ blok: Object })
</script>
<template>
  <article
    target="_blank"
    rel="noopener noreferrer"
    class="p-6 h-[288px] max-w-[244px] overflow-hidden after:max-w-[244px] hover:scale-110 bg-cover bg-center after:w-full after:h-full after:bg-black after:opacity-40 after:absolute after:left-0 after:top-0 after:z-[1]"
    :style="{ backgroundImage: `url('${ blok.image.filename }')` }"
  >
    <div>

    </div>
    <section class="relative z-10 h-full flex flex-col justify-between">
      <aside class="text-right">
        <MainButton
          class="inline-block"
          :button="{ link: blok.url, label: 'Website' }"
        />
      </aside>
      <article class="text-white">
        <h3 class="font-bold">{{ blok.title }}</h3>
        <p class="flex items-center font-bold text-14 lg:text-16 xl:text-18 gap-x-2.5">
          <SvgImport
            class="carousel__svg w-[10px]"
            type="location-mark"
          />  
          <span>{{ blok.location }}</span>
        </p>
      </article>
    </section>
  </article>
</template>

<style lang="scss">
.carousel {
  &__svg {
    svg path {
      @apply fill-white;
    }
  }
}
</style>
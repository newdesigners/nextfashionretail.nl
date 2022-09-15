<script setup>
  defineProps({ blok: Object })
</script>
<template>
  <article
    target="_blank"
    rel="noopener noreferrer"
    class="relative carousel__wrapper aspect-[0.84375] overflow-hidden"
  >
    <div
      class="carousel__background w-full h-full bg-cover bg-center after:w-full after:h-full after:bg-black after:opacity-40 after:absolute after:left-0 after:top-0 after:z-[1]"
      :style="{ backgroundImage: `url('${ blok.image.filename }')` }"
    >
    </div>
    <section class="absolute top-0 left-0 p-5 w-full z-10 h-full flex flex-col justify-between">
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
              class="carousel__svg min-w-[10px] w-[10px]"
              type="location-mark"
            />  
            <span class="text-12 lg:text-14 2xl:text-18">{{ blok.location }}</span>
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

  &__wrapper {
    &:hover {
      .carousel {
        &__background {
          @apply scale-125;
        }
      }
    }
  } 

  &__background {
    @apply transition-all duration-150 ease-in;
  }
}
</style>
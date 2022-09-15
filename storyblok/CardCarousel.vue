<script setup>
  defineProps({ blok: Object })
</script>
<template>
  <article
    target="_blank"
    rel="noopener noreferrer"
    class="relative carousel__wrapper h-[288px] max-w-[244px] overflow-hidden"
  >
    <div
      class="carousel__background w-full h-full bg-cover bg-center after:max-w-[244px] after:w-full after:h-full after:bg-black after:opacity-40 after:absolute after:left-0 after:top-0 after:z-[1]"
      :style="{ backgroundImage: `url('${ blok.image.filename }')` }"
    >
    </div>
    <section class="absolute top-0 left-0 p-6 w-full z-10 h-full flex flex-col justify-between">
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
    @apply transition-all duration-100 ease-in;
  }
}
</style>
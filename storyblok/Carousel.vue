<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'

  defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="py-14 lg:py-20"
    :class="`bg-${ blok.background_color }`"

  >
    <div>
      <article class="container">
        <h2 class="pb-10 lg:pb-14 font-bold lg:text-30">{{ blok.title }}</h2>
      </article>
      <aside class="w-full">
        <swiper
          :slidesPerView="'auto'"
          :spaceBetween="20"
          :loop="true"
          :centeredSlides="true"
          :slidesPerGroup="1"
          :slideToClickedSlide="true"
        >
          <swiper-slide
            v-for="c in blok.carousel"
            :key="c._uid"
          >
            <StoryblokComponent :blok="c" />
          </swiper-slide>
        </swiper>
      </aside>
  </div>
  </section>
</template>

<style>
  .swiper-slide {
    @apply w-[65%] sm:w-[25%] xl:w-[20%];
  }
</style>
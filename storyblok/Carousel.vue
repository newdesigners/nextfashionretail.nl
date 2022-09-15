<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'

  defineProps({ blok: Object })
  const onSwiper = (swiper) =>  {
    console.log(swiper);
  }
  const onSlideChange = () => {
    console.log('slide change');
  }
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
          :slidesPerView="1.5"
          :spaceBetween="5"
          :loop="true"
          :centeredSlides="true"
          :slideToClickedSlide="true"
          :breakpoints="{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
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
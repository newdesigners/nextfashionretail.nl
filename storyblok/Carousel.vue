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
      <aside>
        <swiper
          :slidesPerView="4"
          :spaceBetween="30"
          :centeredSlides="true"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 1</div></swiper-slide>
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 2</div></swiper-slide>
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 3</div></swiper-slide>
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 3</div></swiper-slide>
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 3</div></swiper-slide>
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 3</div></swiper-slide>
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 3</div></swiper-slide>
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 3</div></swiper-slide>
          <swiper-slide><div class="w=[245px] h-[200px] bg-nfr-beige">Slide 3</div></swiper-slide>
        </swiper>
      </aside>
  </div>
  </section>
</template>
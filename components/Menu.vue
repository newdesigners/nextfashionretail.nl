<script setup>
  import { ref } from 'vue'
  import svgBlobPath from '@/assets/images/svg/blob-1.svg?data'
  
  defineProps({
    state: Boolean
  })
</script>

<template>
  <div
    class="w-[62px] h-[62px] flex justify-center items-center bg-center bg-cover bg-no-repeat"
    :style="{ backgroundImage: `url('${ svgBlobPath }')` }"
  >
    <div
      class="hamburger hamburger--slider-r"
      :class="{ 'is-active' : state }"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
  </div>
</template>
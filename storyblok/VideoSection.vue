<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <div 
    v-editable="blok"
    class="container pb-16 sm:pb-24 lg:pb-32 xl:pb-44"
  >
  <div class="h-[215px] md:h-[737px]">
        <video class="w-full h-full object-cover" ref="video" v-if="blok?.src" :src="blok.src.filename" preload="metadata"></video>
    </div>
</div>
</template>
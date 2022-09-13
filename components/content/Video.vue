<script setup>
  defineProps({ blok: Object })

  let video = ref(null)
  const open = () => {
    if(video.value.requestFullscreen) {
      video.value.requestFullscreen();
      video.value.play();
    } else if(video.value.webkitRequestFullscreen) {
      video.value.webkitRequestFullscreen();
      video.value.play();
    } else if(video.value.msRequestFullscreen) {
      video.value.msRequestFullscreen();
      video.value.play();
    } else {
      console.log('here')
    }
  }
</script>

<template>
  <aside class="py-4 relative">
    <figure @click="open">
      <video
        class="w-full h-full aspect-square sm:aspect-[2.36] object-cover"
        ref="video"
        v-if="blok.source"
        :src="blok.source.filename"
        preload="metadata">
      </video>
    </figure>
    <figure
      class="flex items-center justify-center w-14 h-14 lg:w-20 lg:h-20 bg-nfr-green rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      @click="open"
    >
      <SvgImport
        class="video__icon"
        type="play"
      />
    </figure>
  </aside>
</template>

<style lang="scss">
  .video {
    &__icon {
      @apply w-[22px] lg:w-[30px];

      svg path {
        @apply fill-white;
      }
    }
  }
</style>
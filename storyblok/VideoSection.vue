<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  mounted() {
    let video = this.$refs.video;
    video.addEventListener(
      'fullscreenchange',
        function(event) {
            if (!document.fullscreenElement) {
              video.pause();
            }
        },
        false
    );
  },
  methods: {
    open() {
      let video = this.$refs.video;
      
      if(video.requestFullscreen) {
        video.requestFullscreen();
        video.play();
      } else if(video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
        video.play();
      } else if(video.msRequestFullscreen) {
        video.msRequestFullscreen();
        video.play();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
        video.play();
  }
    },
  },
};
</script>

<template>
  <div v-editable="blok" class="relative container mb-16 sm:mb-24 lg:mb-32 xl:mb-44">
    
    <div class="absolute left-1/2 top-1/2 z-20 transform -translate-y-1/2 -translate-x-1/2 hover:cursor-pointer" @click="open">
        <div class="h-20 w-20 rounded-full bg-white text-black">
            <svg style="color: rgb(46, 133, 15);" xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" fill="#2e850f"></path> </svg>
        </div>
    </div>

    <div class="h-[215px] lg:h-[600px] w-full hover:cursor-pointer" @click="open">
        <video class="w-full h-full object-cover" ref="video" v-if="blok?.src" :src="blok.src.filename + '#t=0.001'" preload="metadata" type='video/mp4' ></video>
    </div>
  </div>
</template>
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
      <svg class="w-20 md:w-30 lg:w-40" viewBox="0 0 175 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M145.083 16.9422L145.089 16.9466C159.164 29.011 166.271 49.0365 170.363 70.2167L170.364 70.2228C174.567 91.4958 175.513 113.122 167.063 130.675C158.497 148.346 140.304 162.054 120.748 166.657C101.226 171.251 80.2425 166.677 60.1434 159.327L60.134 159.324C39.8863 152.073 21.0288 142.257 10.9378 126.815L10.9351 126.811C0.857141 111.497 -0.655682 90.1554 4.06865 70.9616L4.06913 70.9597C8.7804 51.7089 19.7746 34.5495 34.7976 22.4556C49.8203 10.362 68.908 3.19398 89.268 1.75993L89.2686 1.75989C109.568 0.322154 131.01 4.77063 145.083 16.9422Z" fill="#00E676" stroke="#00E676" stroke-width="3"/>
        <path d="M145.083 16.9422L145.089 16.9466C159.164 29.011 166.271 49.0365 170.363 70.2167L170.364 70.2228C174.567 91.4958 175.513 113.122 167.063 130.675C158.497 148.346 140.304 162.054 120.748 166.657C101.226 171.251 80.2425 166.677 60.1434 159.327L60.134 159.324C39.8863 152.073 21.0288 142.257 10.9378 126.815L10.9351 126.811C0.857141 111.497 -0.655682 90.1554 4.06865 70.9616L4.06913 70.9597C8.7804 51.7089 19.7746 34.5495 34.7976 22.4556C49.8203 10.362 68.908 3.19398 89.268 1.75993L89.2686 1.75989C109.568 0.322154 131.01 4.77063 145.083 16.9422Z" fill="#00E676" stroke="#00E676" stroke-width="3"/>
        <path d="M126 91.1962C130 88.8867 130 83.1132 126 80.8038L72 49.6269C68 47.3175 63 50.2043 63 54.8231V117.177C63 121.796 68 124.682 72 122.373L126 91.1962Z" fill="black"/>
      </svg>
    </div>

    <div class="h-[215px] md:h-[350px] lg:h-[500px] xl:h-[570px] 2xl:h-max w-full hover:cursor-pointer" @click="open">
        <video class="w-full h-full object-cover" ref="video" v-if="blok?.src" :src="blok.src.filename + '#t=0.001'" preload="metadata" type='video/mp4' ></video>
    </div>
  </div>
</template>
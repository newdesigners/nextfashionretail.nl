<script setup>
  const props = defineProps({ blok: Object })
  const isLast = (i) => i === props.blok.body.length - 1;
</script>

<template>
  <div
    v-editable="blok"
    :class="blok.background_color ? blok.background_color : 'bg-white'"
  >
    <!--
      Header original size 142px and large 168px  
      added padding (20px, large 90px) for space between header and main
    -->
    <div :class="{ 'pt-[162px] lg:pt-[258px]' : $route.params.slug !== '' }">
      <StoryblokComponent
        v-for="(blok, i) in blok.body"
        :key="blok._uid"
        :blok="blok"
        :is-first="i === 0"
        :is-last="isLast(i)"
      />
    </div>
  </div>
</template>
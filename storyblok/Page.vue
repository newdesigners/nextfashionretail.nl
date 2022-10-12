<script setup>
  const props = defineProps({ blok: Object })
  const isLast = (i) => i === props.blok.body.length - 1;
</script>

<template>
  <div
    v-editable="blok"
    :class="blok.background_color ? blok.background_color : 'bg-white'"
  >
    <div class="pt-[110px]">
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
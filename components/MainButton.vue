<script setup>
  defineProps({
    button: Object
  })
</script>

<template>
    <!-- Props are based on link field type in Storyblok-->
    <!-- External link -->
    <a
      v-if="button.link.linktype === 'url'"
      :href="button.link.cached_url"
      target="_blank"
      rel="noopener noreferrer"
      class="main-button"
    >
      <span class="">{{ button.label }}</span>
      <Svg type="arrow" />
    </a>
    
    <!-- Internal link -->
    <NuxtLink
      v-if="button.link.linktype === 'story'"
      :to="button.link.cached_url"
      class="main-button"
    >
      <span>{{ button.label }}</span>
      <Svg type="arrow" />
    </NuxtLink>
</template>

<style lang="scss">
.main-button {
  @apply rounded-full px-3 py-0.5 bg-nfr-green text-[8px] font-medium inline-flex items-center;
  
  span {
    @apply pr-1.5;
  }
}
</style>
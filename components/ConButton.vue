<script setup>
  defineProps({ button: Object, type: String })
</script>

<template>
    <!-- Props are based on link field type in Storyblok-->
    <!-- External link -->
    <a
      v-if="button.link.linktype === 'url'"
      :href="button.link.cached_url"
      target="_blank"
      rel="noopener noreferrer"
      class="content-button"
      :class="type ? `content-button--${ type }` : ''" 
    >
      <span class="">{{ button.label }}</span>
      <SvgImport
        :class="type"
        type="arrow"
      />
    </a>

    <!-- Internal link -->
    <NuxtLink
      v-if="button.link.linktype === 'story'"
      :to="`/${ button.link.cached_url}`"
      class="content-button"
      :class="type ? `content-button--${ type }` : ''"  
    >
      <span>{{ button.label }}</span>
      <SvgImport
        :class="type"
        type="arrow"
        />
    </NuxtLink>
</template>

<style lang="scss">
.content-button {
  @apply mr-4 mt-4 lg:mr-8 lg:mt-16 rounded-full px-3 py-0.5 md:px-8 md:py-2 bg-nfr-green text-[11px] md:text-[14px] lg:text-[18px] font-medium inline-flex items-center;
  
  a.router-link-active {
    @apply text-nfr-green;
  }
  
  span {
    @apply flex-1 pr-1.5 lg:pr-2;
  }

  &:hover {
    @apply text-black bg-nfr-green-light no-underline;
  }

  figure {
    @apply w-4 lg:w-[40px] lg:ml-5;
  }

  &--big {
    @apply text-14 py-1.5 px-7 lg:py-2.5 lg:text-20 lg:px-10 xl:text-22 xl:px-12;

    span {
      @apply pr-2 lg:pr-4;
    }

    figure {
      @apply w-[16px] lg:w-[26px];
    }
  }
}
</style>
<script setup>
  defineProps({ button: Object, type: String })
</script>

<template>
    <a
      :href="button.link.filename"
      download
      target="_blank"
      class="download-button"
    >
      <span class="">{{ button.label }}</span>
      <SvgImport
        :class="type"
        type="arrow"
      />
    </a>

</template>

<style lang="scss">
.download-button {
  @apply rounded-full px-3 py-0.5 lg:px-4 lg:py-1 xl:px-5 bg-nfr-green text-[12px] lg:text-[14px] font-medium inline-flex items-center;
  
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
    @apply w-2 lg:w-[15px] transform rotate-90;
  }

  &--big {
    @apply rounded-full px-3 py-0.5 lg:px-4 lg:py-4 xl:px-16 bg-nfr-green text-[12px] lg:text-[14px] font-medium inline-flex items-center;

    span {
      @apply pr-2 lg:pr-4;
    }

    figure {
      @apply w-[16px] lg:w-[26px];
    }
  }
}
</style>
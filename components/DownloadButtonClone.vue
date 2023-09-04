<script setup>
  const props = defineProps({ button: Object, type: String })
</script>

<template>
    <a
      v-if="props.button.buttonIsBig"
      :href="props.button.link.filename"
      download
      target="_blank"
      class="download-button--big"
    >
      <span class="">{{ props.button.label }}</span>
      <SvgImport
        :class="props.type"
        type="arrow"
      />
    </a>

    <a
      v-else
      :href="props.button.link.filename"
      download
      target="_blank"
      class="download-button"
    >
      <span class="">{{ props.button.label }}</span>
      <SvgImport
        :class="props.type"
        type="arrow"
      />
    </a>

</template>

<style lang="scss">
.download-button {
  @apply rounded-full whitespace-nowrap px-3 py-0.5 lg:px-4 lg:py-1 xl:px-5 bg-nfr-green text-[8px] lg:text-[15px] font-medium inline-flex items-center;
  
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
    @apply rounded-full whitespace-nowrap px-3 py-0.5 md:px-8 md:py-2 bg-nfr-green text-[11px] md:text-[14px] lg:text-[18px] font-medium inline-flex items-center;

    span {
      @apply pr-2 lg:pr-4;
    }

    figure {
      @apply w-[10px] md:w-[20px] lg:w-[25px] transform rotate-90;
    }
    &:hover {
    @apply text-black bg-nfr-green-light no-underline;
  }
  }
}
</style>
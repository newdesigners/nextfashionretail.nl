<script setup>
  const props = defineProps({ blok: Object })
</script>

<template>
    <div v-if="props.blok.buttonIsBig" class="mt-4 md:mt-12">
        <p class="text-[10px] md:text-18">{{props.blok.Text}}</p>
        <a
        :href="props.blok.url.cached_url"
        download
        target="_blank"
        class="TextWithButton--big md:mt-4"
        >
        <span class="">{{ props.blok.button_label }}</span>
        <SvgImport
            :class="props.type"
            type="arrow"
        />
        </a>
    </div>

    <div v-else class="mt-4 md:mt-12">
        <p class="text-[10px] md:text-18">{{props.blok.Text}}</p>
    <a
      :href="props.blok.url.cached_url"
      download
      target="_blank"
      class="TextWithButton mt-4"
    >
      <span class="">{{ props.blok.button_label }}</span>
      <SvgImport
        :class="props.type"
        type="arrow"
      />
    </a>
</div>

</template>

<style lang="scss">
.TextWithButton {
  @apply rounded-full px-3 py-0.5 lg:px-4 lg:py-1 xl:px-5 bg-nfr-green text-[8px] lg:text-[15px] font-medium inline-flex items-center;
  
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
    @apply rounded-full px-3 py-0.5 md:px-8 md:py-4 xl:px-12 bg-nfr-green text-[8px] md:text-[12px] lg:text-[20px] xl:text-[25px] font-medium inline-flex items-center;

    span {
      @apply pr-2 lg:pr-4;
    }

    figure {
      @apply w-[10px] md:w-[20px] lg:w-[40px] transform rotate-90;
    }
    &:hover {
    @apply text-black bg-nfr-green-light no-underline;
  }
  }
}
</style>
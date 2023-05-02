<script setup>

const props = defineProps({ blok: Object })
  const cardContent = computed(() => renderRichText(props.blok.description))

</script>

<template>
  <article
    v-editable="blok"
    class="bg-white"
  >
    <div class="py-[26px] px-[30px] lg:px-[40px] lg:py-[32px] xl:p-12">
      <h3 class="pb-2 lg:pb-3">{{ blok.title }}</h3>
      <article
          class="rich-text prose-sm md:prose-lg lg:prose-xl md:max-w-none"
          v-html="cardContent"
        >
      </article>
      <aside class="flex justify-end">
        <DownloadButton :button="{ label : blok.button_label, link : blok.file }" />
      </aside>
    </div>
  </article>
</template>

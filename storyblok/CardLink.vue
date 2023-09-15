<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <article
    v-editable="blok"
    class="bg-white"
  >
    <div class="py-[20px] px-[24px] lg:px-[40px] lg:py-[32px] xl:p-7">
      <h3 class="pb-2 lg:pb-3">{{ blok.title }}</h3>
      <p class="text-[12px] pb-4 sm:pb-5 xl:pb-6 lg:text-[14px] xl:text-[16px]">{{ blok.description }}</p>
      <aside class="flex justify-end">
        <MainButton :button="{ label : blok.button_label, link : blok.url }" />
      </aside>
    </div>
  </article>
</template>

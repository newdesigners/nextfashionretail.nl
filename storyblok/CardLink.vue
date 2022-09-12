<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <article
    v-editable="blok"
    class="bg-white"
  >
    <div class="py-[18px] px-[30px] lg:py-[28px] xl:px-10 xl:py-10">
      <h3 class="pb-2 lg:pb-3">{{ blok.title }}</h3>
      <p class="text-[8px] pb-2.5 sm:pb-4 xl:pb-6 lg:text-[14px] xl:text-[16px]">{{ blok.description }}</p>
      <aside class="flex justify-end">
        <MainButton :button="{ label : blok.button_label, link : blok.url }" />
      </aside>
    </div>
  </article>
</template>

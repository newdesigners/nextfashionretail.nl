<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <article
    v-editable="blok"
    class="bg-white"
  >
    <div class="py-[18px] px-[30px]">
      <h3 class="pb-2">{{ blok.title }}</h3>
      <p class="text-[8px] leading-[1.875] pb-2.5">{{ blok.description }}</p>
      <aside class="flex justify-end">
        <MainButton :button="{ label : blok.button_label, link : blok.url }" />
      </aside>
    </div>
  </article>
</template>

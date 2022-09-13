<script setup>
  defineProps({ blok: Object, isLast: Boolean })
</script>

<template>
  <section
    v-editable="blok"
    class="bg-white"
    :class="{ 'mb-20' : !isLast }"
  >
    <div class="container py-16 lg:py-[120px]">
      <h2 class="text-18 lg:text-30 font-semibold pb-5 lg:pb-8">{{ blok.title }}</h2>
      <MainButton
        v-if="blok.button_url"
        :button="{ label: blok.button_label, link: blok.button_url }"
        type="big" 
      />
    </div>
  </section>
</template>
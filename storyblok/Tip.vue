<script setup>
  const props = defineProps({ blok: Object })
</script>

<template>
  <div
    v-editable="blok"
    class="bg-nfr-beige"
  >
    <div class="pt-[110px]">
      <!-- <div v-if="isFirst">
        <h1 class="text-24 lg:text-30 xl:text-40 xl:pb-3.5">{{ blok.title }}</h1>
      </div>
      <div v-else>
        <h2 class="text-24 lg:text-30 xl:text-40 xl:pb-3.5">{{ blok.title }}</h2>
      </div> -->
      <component
        v-for="blok in blok.content"
        :key="blok._uid"
        :blok="blok"
        :is="blok.component"
      />
    </div>
  </div>
</template>
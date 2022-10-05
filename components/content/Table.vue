<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <aside v-if="blok.table.length !== 0" class="py-4">
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 lg:w-[94%] mx-auto">
      <li
        v-for="item in blok.table"
        :key="item._uid"
      >
        <figure
          v-if="item.image.filename"
          class="mb-6" 
        >
          <img
            class="w-[88px] h-[88px] lg:w-[100px] xl:w-[120px] object-contain"
            :src="item.image.filename"
            :alt="item.image.alt"
          />
        </figure>
        <p class="flex-1">{{ item.text }}</p>
      </li>
    </ul>
  </aside>
</template>
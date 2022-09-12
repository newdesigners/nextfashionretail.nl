<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <aside class="py-4">
    <ul class="flex flex-wrap gap-4 lg:gap-8">
      <li
       v-for="icon in blok.icons"
       :key="icon._uid"
      >
        <figure
          v-if="icon.source.filename"
          class="w-[40px] lg:w-[60px] xl:w-[70px]" 
        >
          <img
            class="w-full h-auto"
            :src="icon.source.filename"
            :alt="icon.source.alt"
          />
        </figure>
      </li>
    </ul>
  </aside>
</template>
<script setup>
  defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok">
    <div class="container">
      <ul
        v-if="blok.tips"
        class="flex flex-col gap-y-9"
      >
        <li
          v-for="tip in blok.tips"
          :key="tip._uid"
        >
          <StoryblokComponent :blok="tip" />
        </li>
      </ul>
    </div>
  </section>
</template>
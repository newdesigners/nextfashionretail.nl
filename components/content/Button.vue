<script setup>
import ConButton from '../ConButton.vue';

  const props = defineProps({ blok: Object })
</script>

<template>
       
    <ConButton
    class="content-button"
            :button="{ link: blok.url, label: blok.button_label }"
          />
</template>
<script setup>

const props = defineProps({ blok: Object })
const cardContent = computed(() => renderRichText(props.blok.description))

</script>

<template>
    <article
      v-editable="blok"
      class="bg-white"
    >
      <!-- <div class="py-[26px] px-[30px] lg:px-[40px] lg:py-[32px] xl:p-12"> -->
        
        <aside v-if="blok.ButtonIsLeft" class="flex flex-col items-start mt-4 md:mt-6 gap-6" >
          <DownloadButtonClone :button="{ label : blok.button_label, link : blok.file, buttonIsBig : blok.buttonIsBig }" />
        </aside>
  
        <aside v-else class="flex flex-col justify-end mt-4 md:mt-12 items-end">
          <DownloadButtonClone :button="{ label : blok.button_label, link : blok.file, buttonIsBig : blok.buttonIsBig}"/>
        </aside>
  
        <!-- <aside v-if="blok.ButtonIsLeft" class="flex justify-start items-end mt-4 md:mt-6">
          <DownloadButtonClone :button="{ label : blok.button_label2, link : blok.file2, buttonIsBig : blok.buttonIsBig }" />
        </aside>
  
        <aside v-else class="flex justify-end mt-4 md:mt-12 items-end">
          <DownloadButtonClone :button="{ label : blok.button_label2, link : blok.file2, buttonIsBig : blok.buttonIsBig}"/>
        </aside>
  
        <aside v-if="blok.ButtonIsLeft" class="flex justify-start items-end mt-4 md:mt-6">
          <DownloadButtonClone :button="{ label : blok.button_label3, link : blok.file3, buttonIsBig : blok.buttonIsBig }" />
        </aside>
  
        <aside v-else class="flex justify-end mt-4 md:mt-12 items-end">
          <DownloadButtonClone :button="{ label : blok.button_label3, link : blok.file3, buttonIsBig : blok.buttonIsBig}"/>
        </aside>
  
        <aside v-if="blok.ButtonIsLeft" class="flex justify-start items-end mt-4 md:mt-6">
          <DownloadButtonClone :button="{ label : blok.button_label4, link : blok.file4, buttonIsBig : blok.buttonIsBig }" />
        </aside>
  
        <aside v-else class="flex justify-end mt-4 md:mt-12 items-end">
          <DownloadButtonClone :button="{ label : blok.button_label4, link : blok.file4, buttonIsBig : blok.buttonIsBig}"/>
        </aside> -->
  <!-- 
        <component
            v-for="blok in props.blok.ButtonsWithText"
            :key="blok._uid"
            :blok="blok"
            :is="blok.component === 'ButtonWithText' ? 'TextWithButtonClone' : blok.component"
          /> -->
  
      <!-- </div> -->
    </article>
  </template>
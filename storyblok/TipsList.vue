<script setup>
  defineProps({ blok: Object })

  const tips = ref(null)
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories', { version: 'draft', starts_with: 'duurzaamheid-care' })
  console.log(data.stories)
  tips.value = data.stories.filter((story) => story.is_startpage !== true)
</script>

<template>
  <section v-editable="blok">
    <div class="container">
      <!-- <ul
        v-if="blok.tips"
        class="flex flex-col gap-y-9 xl:gap-y-14 pb-20 lg:pb-32"
      >
        <li
          v-for="tip in blok.tips"
          :key="tip._uid"
        >
          <StoryblokComponent :blok="tip" />
        </li>
      </ul> -->
      <ul
        v-if="tips"
        class="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-8 sm:gap-x-10 md:gap-x-20 md:gap-y-10 lg:gap-x-28 lg:grid-cols-[minmax(0,_46%)_minmax(0,_46%)] pb-20 lg:pb-32"
      >
        <li
          v-for="tip in tips"
          :key="tip._uid"
        >
          <CardText :blok="tip" />
        </li>
      </ul>
    </div>
  </section>
</template>
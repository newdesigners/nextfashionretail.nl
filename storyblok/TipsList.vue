<script setup>
  defineProps({ blok: Object })

  const tips = ref(null)
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories', { version: 'draft', starts_with: 'duurzaamheid-care' })

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
        class="flex flex-col gap-y-9 xl:gap-y-14 pb-20 lg:pb-32"
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
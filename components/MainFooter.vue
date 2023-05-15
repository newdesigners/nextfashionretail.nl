<script setup>
  const routes = ref([])

  routes.value = [
    {
      name: 'Materialen',
      url: '/duurzaamheid-materialen',
    },
    {
      name: 'Care',
      url: '/duurzaamheid-care',
    },
    {
      name: 'Makers',
      url: '/duurzaamheid-makers',
    },
    {
      name: 'Whitepaper',
      url: '/duurzaamheid-whitepapers',
    },
    {
      name: 'Tools',
      url: '/duurzaamheid-tools',
    },
    // {
    //   name: 'Ons verhaal',
    //   url: '/duurzaamheid-ons-verhaal',
    // },
    {
      name: 'Over ons',
      url: '/duurzaamheid-over-ons',
    },
  ]
</script>

<template>
  <footer class="bg-black py-11 lg:py-14">
    <div class="container">
      <ul class="flex flex-col gap-5 lg:flex-row justify-around lg:w-4/5 mx-auto">
        <li
          v-for="(route, index) in routes"
          :key="index"
          class="text-white text-14 lg:text-18 xl:text-20"
        >
          <NuxtLink :to="route.url">{{ route.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
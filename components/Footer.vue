<script setup>
  import { ref } from 'vue'
  const routes = ref([])

  routes.value = [
    {
      name: 'Materialen',
      url: '/materialen',
    },
    {
      name: 'Care',
      url: '/care',
    },
    {
      name: 'Makers',
      url: '/makers',
    },
    {
      name: 'Ons verhaal',
      url: '/ons-verhaal',
    },
    {
      name: 'Over ons',
      url: '/over-ons',
    },
  ]
</script>

<template>
  <footer class=" bg-black py-11 lg:py-36">
    <div class="container">
      <ul class="flex flex-col gap-5 lg:flex-row lg:justify-around">
        <li
          v-for="(route, index) in routes"
          :key="index"
          class="text-white text-[14px] lg:text-[35px]"
        >
          <NuxtLink :to="route.url">{{ route.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
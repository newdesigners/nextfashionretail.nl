<script setup>
  const routes = ref([])
  const isOpen = ref(false)

  const onClick = () => {
    isOpen.value = !isOpen.value
  }

  const onClose = () => {
    isOpen.value = false
  }

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
  <header
    class="w-full delay-100 transition-height duration-300 ease-in-out h-[142px] bg-white overflow-hidden lg:h-full"
    :class="{ 'h-[475px] bg-nfr-beige' : isOpen }"
  >
    <div class="container lg:flex justify-between items-center">
      <div class="flex justify-between items-center py-10 lg:py-28">
        <Svg
          :color="isOpen ? '#000' : '#FFF'"
          type="logo"
          class="lg:w-[136px] h-auto"
        />
        <Menu
          @click="onClick"
          :state="isOpen"
          class="lg:hidden"
        />
      </div>
      <div
        class="delay-300 transition opacity-0 duration-200 ease-in lg:opacity-100"
        :class="{ 'opacity-100' : isOpen }"
      >
        <ul
          @click="onClose"
          class="lg:flex"
        >
          <li 
            v-for="(route, index) in routes"
            :key="index"
            class="text-14 font-semibold mb-4 lg:text-[22px] lg:mb-0 lg:mr-8 lg:last:mr-0"
          >
            <NuxtLink :to="route.url">{{ route.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
a.router-link-active {
  @apply text-nfr-green underline;
}

svg path {
  @apply lg:fill-black;
}
</style>
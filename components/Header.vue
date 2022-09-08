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
    class="absolute w-full delay-100 transition-height duration-300 ease-in-out h-[142px] bg-transparent overflow-hidden lg:h-[auto] z-50"
    :class="{ 'h-[475px] !bg-nfr-beige lg:bg-transparent' : isOpen }"
  >
    <div class="container lg:flex justify-between items-center">
      <div
        class="flex justify-between items-center py-10 lg:py-12"
        :class="{ 'header--open' : isOpen}"
      >
        <NuxtLink
          @click="onClose"
          to="/"
        >
          <SvgImport
            type="logo"
            class="lg:w-[110px] h-auto header__logo"
            :class="{ 'header__logo--reverse' : $route.params.slug === '' }"
          />
        </NuxtLink>
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
            class="text-14 font-semibold mb-4 lg:text-[22px] lg:mb-0 lg:mr-8 lg:last:mr-0 lg:text-white"
            :class="{'lg:text-black' : $route.params.slug !== '' }"
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

.header {
  &__logo {
    svg path {
      @apply fill-black;
    }

    &--reverse {
      svg path {
        @apply fill-white;
      }
    }
  }
}

.header {
  &--open {
    .header__logo {
      svg path {
        @apply fill-black;
      }
    }
  }
}
</style>
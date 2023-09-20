<script setup>
  const routee = useRoute();
  const routes = ref([])
  const isOpen = ref(false)
  const isScrolled = ref(false)
  const onClick = () => { isOpen.value = !isOpen.value }
  const onClose = () => { isOpen.value = false }
  
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
      name: '30wearschallenge',
      url: '/duurzaamheid-30wearschallenge'
    },
    {
      name: 'Whitepapers',
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

  onMounted(() => {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 25) {
        isScrolled.value = true
      } else {
        isScrolled.value = false
      }
    })
  })
</script>

<template>
  <header
    class="fixed top-0 w-full delay-100 transition-height duration-300 ease-in-out h-[110px] bg-transparent overflow-hidden lg:h-[auto] z-50"
    :class="[{ 'h-[380px] !bg-nfr-beige lg:bg-transparent' : isOpen }, { 'header--scrolled' : isScrolled }]"
  >
    <div class="container lg:flex justify-between items-center">
      <div
        class="flex justify-between items-center py-6 lg:py-7"
        :class="{ 'header--open' : isOpen }"
      >
        <NuxtLink
          @click="onClose"
          to="/"
        >
          <SvgImport
            type="logo"
            class="header__logo w-[70px] lg:w-[80px] h-auto"
            :class="{ 'header__logo--reverse' : routee.params.slug === '' }"
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
            class="transition-colors delay-150 ease-out duration-300 text-14 font-semibold mb-4 lg:text-18 lg:mb-0 lg:mr-8 xl:mr-9 lg:last:mr-0 text-black lg:text-white"
            :class="{'blackImported' : routee.params.slug !== ''}"
          >
            <NuxtLink :to="route.url">{{ route.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">

.blackImported{
  @apply lg:text-black
}
a.router-link-active {
  @apply text-nfr-green underline;
}

.header {
  &__logo {
    svg {
      path {
        @apply transition-all ease-out fill-black lg:delay-150 duration-300;
      }
    }

    &--reverse {
      svg path {
        @apply fill-white;
      }
    }
  }

  &--open {
    .header__logo {
      svg path {
        @apply fill-black;
      }
    }
  }
  
  &--scrolled {
    @apply bg-nfr-beige;
    
    li {
        @apply lg:text-black;
     }

    .header {
      &__logo {
        svg path {
          @apply fill-black;
        }
      }
    }
  }
}
</style>

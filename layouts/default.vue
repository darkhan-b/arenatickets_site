<template>
  <div class="d-flex min-h-100vh flex-column justify-content-between">
    <AppHeader />
    <section class="body-content">
      <slot />
    </section>
    <AppFooter />
  </div>
</template>

<script setup>
import { useMessage } from 'naive-ui'

const generalStore = useGeneralStore()
const route = useRoute()

const { categories, cities, translations, isMobile, windowWidth } =
  storeToRefs(generalStore)

onMounted(() => {
  window.$message = useMessage()
  window.addEventListener('resize', (e) => {
    sizing()
  })
  sizing()
})

const sizing = () => {
  isMobile.value = window.innerWidth <= 768
  windowWidth.value = window.innerWidth
}

useHead({
  meta: [
    {
      name: 'og:url',
      content: 'https://arenatickets.kz' + route.path
    }
  ]
})
</script>

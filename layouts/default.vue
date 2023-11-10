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
import { storeToRefs } from 'pinia'
import { useGeneralStore } from '~/stores/general.store'

const generalStore = useGeneralStore()
const route = useRoute()

const { isMobile } = storeToRefs(generalStore)

onMounted(() => {
  window.$message = useMessage()
  window.addEventListener('resize', (e) => {
    isMobile.value = window.innerWidth <= 768
  })
  isMobile.value = window.innerWidth <= 768
})

useHead({
  meta: [
    {
      name: 'og:url',
      content: 'https://arenatickets.kz' + route.path
    }
  ]
})
</script>

import { defineNuxtPlugin } from '#app'
import { useGeneralStore } from '~/stores/general.store'

export default defineNuxtPlugin(async (nuxtApp) => {
  const store = useGeneralStore(nuxtApp.$pinia)
  await store.boot()
})

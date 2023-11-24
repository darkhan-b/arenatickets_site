import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    clientId: null,
    isMobile: false,
    categories: [],
    cities: [],
    paySystems: [],
    translations: {}
  }),
  actions: {
    async boot() {
      // runs before everything else
      const { data } = await useAPI(`settings`)
      this.categories = data.value.data.categories
      this.cities = data.value.data.cities
      this.translations = data.value.data.translations
      this.paySystems = data.value.data.paySystems
    }
  }
})

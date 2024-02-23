import { defineStore } from 'pinia'
import moment from 'moment/moment'
import 'moment/locale/ru'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    clientId: 1,
    isMobile: false,
    windowWidth: 0,
    locale: 'ru',
    currency: 'KZT',
    categories: [],
    cities: [],
    paySystems: [],
    translations: {},
    settings: {}
  }),
  actions: {
    async boot() {
      // runs before everything else
      const data = await useAPI(`settings`)
      const authStore = useAuthStore()
      const { user } = storeToRefs(authStore)
      const parsed = data.value.data
      this.settings = parsed.settings
      this.categories = parsed.categories
      this.cities = parsed.cities
      this.translations = parsed.translations
      this.paySystems = parsed.paySystems
      user.value = parsed.user
      moment.locale('ru')
    }
  }
})

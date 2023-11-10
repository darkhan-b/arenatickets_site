import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    clientId: null,
    isMobile: false
  }),
  actions: {}
})

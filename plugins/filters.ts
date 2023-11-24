import { translate } from '~/utils/helpers'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      t: (key: string) => translate(key)
    }
  }
})

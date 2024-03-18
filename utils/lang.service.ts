const LANG_KEY = 'locale'

export const langService = {
  saveLang: (language: string) => {
    const cookie = useCookie(LANG_KEY)
    cookie.value = language
  },

  getLang: () => {
    const cookie = useCookie(LANG_KEY)
    return cookie.value || null
  },

  destroyLang: () => {
    const cookie = useCookie(LANG_KEY)
    cookie.value = null
  }
}

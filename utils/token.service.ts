const ID_TOKEN_KEY = 'api_token'

export const tokenService = {
  saveToken: (token: string) => {
    const cookie = useCookie(ID_TOKEN_KEY)
    cookie.value = token
  },

  getToken: () => {
    const cookie = useCookie(ID_TOKEN_KEY)
    return cookie.value || null
  },

  destroyToken: () => {
    const cookie = useCookie(ID_TOKEN_KEY)
    cookie.value = null
  }
}

import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loginModalOpened: false,
    registerModalOpened: false
  }),
  actions: {
    async login(email: String, password: String) {
      const res = await useAPI(`auth/login`, {
        method: 'POST',
        body: { email, password }
      })
      const parsed = res?.value?.data
      const userObj = parsed?.user
      const token = parsed?.token
      if (!userObj || !token) return false
      tokenService.saveToken(token)
      this.user = userObj
      return userObj
    },
    async register(
      { name, email, password } = {
        name: String,
        email: String,
        password: String
      }
    ) {
      const res = await useAPI(`auth/register`, {
        method: 'POST',
        body: {
          name,
          email,
          password
        }
      })
      const parsed = res?.value?.data
      const userObj = parsed?.user
      const token = parsed?.token
      if (!userObj || !token) return null
      tokenService.saveToken(token)
      this.user = userObj
      return userObj
    },
    logout() {
      this.user = null
      tokenService.destroyToken()
    }
  }
})

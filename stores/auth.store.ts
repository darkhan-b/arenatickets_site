import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loginModalOpened: false,
    registerModalOpened: false,
    forgotModalOpened: false
  }),
  getters: {
    permissions: (state) => {
      return state.user?.permissionsList || []
    },
    hasPermission: (state) => {
      return (permission: string) => {
        const permissions = state.user?.permissionsList || []
        return permissions.includes(permission)
      }
    }
  },
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
    async passwordResetInitiate(email: String) {
      const res = await useAPI(`auth/password/reset`, {
        method: 'POST',
        body: { email }
      })
      return res?.value?.data || null
    },
    async passwordResetFinish(
      { email, token, password, password_confirmation } = {
        email: String,
        token: String,
        password: String,
        password_confirmation: String
      }
    ) {
      const res = await useAPI(`auth/password/set`, {
        method: 'POST',
        body: { email, token, password, password_confirmation }
      })
      const parsed = res?.value?.data
      const userObj = parsed?.user
      const accessToken = parsed?.token
      if (!userObj || !accessToken) return false
      tokenService.saveToken(accessToken)
      this.user = userObj
      return userObj
    },
    logout() {
      this.user = null
      tokenService.destroyToken()
    }
  }
})

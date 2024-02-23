<template>
  <div>
    <a
      v-if="!user"
      class="px-4 header-block position-relative text-white pointer text-uppercase"
      @click="auth">
      {{ $t('login') }}
    </a>
    <n-dropdown
      v-if="user"
      trigger="click"
      :options="profileOptions"
      @select="handleSelect">
      <a
        class="px-4 header-block position-relative text-white pointer text-uppercase">
        {{ user?.name }}
      </a>
    </n-dropdown>
  </div>
</template>

<script setup>
import { NDropdown } from 'naive-ui'
const authStore = useAuthStore()

const { user, loginModalOpened } = storeToRefs(authStore)

const router = useRouter()

const auth = () => {
  loginModalOpened.value = true
}

const profileOptions = computed(() => {
  return [
    {
      label: user?.value?.name || '',
      key: 'profile'
    },
    {
      type: 'divider',
      key: 'd1'
    },
    {
      label: 'История заказов',
      key: 'history'
    },
    {
      label: 'Выйти',
      key: 'logout'
    }
  ]
})

const handleSelect = (key) => {
  if (key === 'logout') {
    authStore.logout()
    router.push('/')
  }
  if (key === 'history') {
    router.push('/profile/history')
  }
  if (key === 'profile') {
    router.push('/profile/account')
  }
}
</script>

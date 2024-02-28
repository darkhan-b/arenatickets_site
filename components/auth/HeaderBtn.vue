<template>
  <div>
    <a
      v-if="!user"
      class="px-md-4 px-4 header-block position-relative text-white pointer text-uppercase"
      @click="auth">
      {{ $t('login') }}
    </a>
    <n-dropdown
      v-if="user"
      trigger="click"
      :options="profileOptions"
      @select="handleSelect">
      <a
        class="px-md-4 px-4 header-block position-relative text-white pointer text-uppercase">
        <span class="d-md-inline d-none">{{ user?.name }}</span>
        <span class="d-inline d-md-none"><UserSvg /></span>
      </a>
    </n-dropdown>
  </div>
</template>

<script setup>
import { NDropdown } from 'naive-ui'
import UserSvg from '~/assets/svg/user.svg?component'
const authStore = useAuthStore()

const { user, loginModalOpened } = storeToRefs(authStore)

const router = useRouter()

const auth = () => {
  loginModalOpened.value = true
}

const profileOptions = computed(() => {
  const availableMenu = [
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
      label: 'Отчет',
      permission: 'reports',
      key: 'report'
    },
    {
      label: 'Выйти',
      key: 'logout'
    }
  ]

  return availableMenu.filter(
    (item) => !item.permission || authStore.hasPermission(item.permission)
  )
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
  if (key === 'report') {
    router.push('/profile/report')
  }
}
</script>

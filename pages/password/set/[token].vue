<template>
  <div class="container pt-5 pb-5" style="max-width: 450px">
    <h1 class="text-center">{{ $t('password_reset') }}</h1>
    <n-space vertical :size="[12, 16]" class="mt-4">
      <div class="form-group">
        <label class="form-label">{{ $t('email') }}</label>
        <n-input
          v-model:value="email"
          class="form-control"
          :placeholder="$t('email')"></n-input>
      </div>
      <div class="form-group">
        <label class="form-label">{{ $t('password') }}</label>
        <n-input
          v-model:value="password"
          type="password"
          class="form-control"
          :placeholder="$t('password')"></n-input>
      </div>
      <div class="form-group">
        <label class="form-label">{{ $t('confirm_password') }}</label>
        <n-input
          v-model:value="confirmPassword"
          type="password"
          class="form-control"
          :placeholder="$t('confirm_password')"></n-input>
      </div>

      <n-button
        class="btn-themed w-100 mt-3"
        :loading="loading"
        :disabled="!valid"
        @click="submit"
        text
        >{{ $t('reset') }}</n-button
      >
    </n-space>
  </div>
</template>

<script setup>
import { NInput, NSpace, NButton } from 'naive-ui'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const loading = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const token = route.params.token

const valid = computed(() => {
  return (
    email.value && password.value && password.value === confirmPassword.value
  )
})

const submit = async () => {
  const res = await authStore.passwordResetFinish({
    email: email.value,
    password: password.value,
    password_confirmation: confirmPassword.value,
    token
  })
  if (res) await router.push('/')
}
</script>

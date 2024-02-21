<template>
  <n-modal v-model:show="loginModalOpened" style="width: 450px" preset="card">
    <div class="px-3">
      <h5 class="mt-0 fw-bold">{{ $t('login') }}</h5>
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
        <n-button
          class="btn-themed w-100 mt-3"
          :loading="loading"
          :disabled="!valid"
          @click="loginClicked"
          text
          >{{ $t('login') }}</n-button
        >
      </n-space>
      <hr class="mt-4" />

      <div class="text-center">
        <div>
          {{ $t('no_account') }}?
          <a class="text-primary pointer" @click="register">{{
            $t('register')
          }}</a>
        </div>
      </div>
    </div>
  </n-modal>
</template>

<script setup>
import { NModal, NInput, NSpace, NButton } from 'naive-ui'

const authStore = useAuthStore()

const { loginModalOpened, registerModalOpened } = storeToRefs(authStore)

const valid = computed(() => {
  return email.value && password.value
})

const loading = ref(false)
const email = ref('')
const password = ref('')

const loginClicked = async () => {
  loading.value = true
  try {
    const res = await authStore.login(email.value, password.value)
    if (res) {
      loginModalOpened.value = false
      window.$message.success(translate('login_successful'))
    }
  } finally {
    loading.value = false
  }
}

const register = () => {
  loginModalOpened.value = false
  registerModalOpened.value = true
}
</script>

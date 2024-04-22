<template>
  <n-modal v-model:show="forgotModalOpened" style="width: 450px" preset="card">
    <div class="px-3">
      <h5 class="mt-0 fw-bold">{{ $t('password_reset') }}</h5>
      <div v-if="!isReset">
        <n-space vertical :size="[12, 16]" class="mt-4">
          <div class="form-group">
            <label class="form-label">{{ $t('email') }}</label>
            <n-input
              v-model:value="email"
              class="form-control"
              :placeholder="$t('email')"></n-input>
          </div>
          <n-button
            class="btn-themed w-100 mt-3"
            :loading="loading"
            :disabled="!valid"
            @click="reset"
            text
            >{{ $t('reset') }}</n-button
          >
        </n-space>

        <div class="text-center mt-4">
          <div>
            <a class="text-primary pointer" @click="toLogin">{{
              $t('login')
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isReset" class="mt-4 mb-3">
      <n-alert :title="$t('reset_password')" type="success">
        {{ $t('password_reset_instructions') }}
      </n-alert>
    </div>
  </n-modal>
</template>

<script setup>
import { NModal, NInput, NSpace, NButton, NAlert } from 'naive-ui'

const authStore = useAuthStore()

const { loginModalOpened, forgotModalOpened } = storeToRefs(authStore)

const valid = computed(() => {
  return !!email.value
})

const loading = ref(false)
const email = ref('')
const isReset = ref(false)

const reset = async () => {
  loading.value = true
  try {
    const res = await authStore.passwordResetInitiate(email.value)
    if (res) {
      isReset.value = true
    }
  } finally {
    loading.value = false
  }
}

const toLogin = () => {
  forgotModalOpened.value = false
  loginModalOpened.value = true
}
</script>

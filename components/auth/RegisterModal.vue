<template>
  <n-modal
    v-model:show="registerModalOpened"
    style="width: 450px"
    preset="card">
    <div class="px-3">
      <h5 class="mt-0 fw-bold">{{ $t('registration') }}</h5>
      <div>
        {{ $t('already_have_an_account') }}?
        <a class="text-primary pointer" @click="authorize">{{ $t('login') }}</a>
      </div>
      <hr class="mt-4" />
      <n-space vertical :size="[12, 16]" class="mt-4">
        <div class="form-group">
          <label class="form-label">* {{ $t('your_name') }}</label>
          <n-input
            v-model:value="form.name"
            class="form-control"
            :placeholder="$t('your_name')"></n-input>
        </div>
        <div class="form-group">
          <label class="form-label">* Email</label>
          <n-input
            v-model:value="form.email"
            class="form-control"
            placeholder="Email"></n-input>
        </div>
        <div class="form-group">
          <label class="form-label">* {{ $t('password') }}</label>
          <n-input
            v-model:value="form.password"
            type="password"
            class="form-control"
            :placeholder="$t('password')"></n-input>
        </div>
        <n-button
          class="btn-themed w-100 mt-3"
          :loading="loading"
          :disabled="!valid"
          @click="registerClicked"
          text
          >{{ $t('to_register') }}</n-button
        >
      </n-space>
      <div class="text-center mt-4">
        <div>
          {{ $t('by_pressing_this_button_you_agree_with') }}
          <a class="text-decoration-underline pointer" @click="seeTerms">{{
            $t('data_processing_policy')
          }}</a
          >.
        </div>
      </div>
    </div>
  </n-modal>
</template>

<script setup>
import { NModal, NInput, NSpace, NButton, NRadio, NRadioGroup } from 'naive-ui'

const authStore = useAuthStore()

const { loginModalOpened, registerModalOpened } = storeToRefs(authStore)

const router = useRouter()

const valid = computed(() => {
  return form.name && form.password && form.email
})

const form = reactive({
  name: '',
  email: '',
  password: ''
})
const loading = ref(false)

const registerClicked = async () => {
  loading.value = true
  try {
    const res = await authStore.register(form)
    if (res) {
      registerModalOpened.value = false
      window.$message.success(translate('login_successful'))
    }
  } finally {
    loading.value = false
  }
}

const authorize = () => {
  registerModalOpened.value = false
  loginModalOpened.value = true
}

const seeTerms = () => {
  registerModalOpened.value = false
  router.push('/page/confidentiality')
}
</script>

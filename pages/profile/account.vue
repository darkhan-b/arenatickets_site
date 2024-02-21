<template>
  <div class="container">
    <div class="pb-5 pt-5 narrow-content">
      <div>
        <n-grid cols="1" :x-gap="20" :y-gap="20">
          <n-grid-item>
            <label class="form-label">{{ $t('name') }}</label>
            <n-input
              v-model:value="userForm.name"
              class="form-control"
              :placeholder="$t('name')"></n-input>
          </n-grid-item>
          <n-grid-item>
            <label class="form-label">{{ $t('surname') }}</label>
            <n-input
              v-model:value="userForm.surname"
              class="form-control"
              :placeholder="$t('surname')"></n-input>
          </n-grid-item>
          <n-grid-item>
            <label class="form-label">{{ $t('email') }}</label>
            <n-input
              v-model:value="userForm.email"
              readonly
              class="form-control"
              :placeholder="$t('email')"></n-input>
          </n-grid-item>
          <n-grid-item>
            <label class="form-label">{{ $t('phone') }}</label>
            <n-input
              v-model:value="userForm.phone"
              class="form-control"
              :placeholder="$t('phone')"></n-input>
          </n-grid-item>
        </n-grid>
        <n-button
          class="btn-themed mt-4"
          :loading="loading"
          :disabled="loading"
          @click="save"
          text
          >{{ $t('save_changes') }}</n-button
        >
      </div>

      <div class="mt-5">
        <h3>{{ $t('change_password') }}</h3>
        <n-grid cols="1" :x-gap="20" :y-gap="20" class="mt-4">
          <n-grid-item>
            <label class="form-label">{{ $t('old_password') }}</label>
            <n-input
              type="password"
              autofill="off"
              v-model:value="passForm.old_password"
              class="form-control"
              :placeholder="$t('old_password')"></n-input>
          </n-grid-item>
          <n-grid-item>
            <label class="form-label">{{ $t('new_password') }}</label>
            <n-input
              type="password"
              v-model:value="passForm.password"
              class="form-control"
              :placeholder="$t('new_password')"></n-input>
          </n-grid-item>
          <n-grid-item>
            <label class="form-label">{{ $t('confirm_password') }}</label>
            <n-input
              type="password"
              v-model:value="passForm.confirm_password"
              class="form-control"
              :placeholder="$t('confirm_password')"></n-input>
          </n-grid-item>
        </n-grid>
        <n-button
          class="btn-themed mt-4"
          :loading="loading"
          :disabled="loading || !validPass"
          @click="savePassword"
          text
          >{{ $t('save_password') }}</n-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NInput, NGrid, NGridItem, NButton } from 'naive-ui'
import { translate } from '~/utils/helpers'

const authStore = useAuthStore()

const { user } = storeToRefs(authStore)

const userForm = reactive({
  name: user?.value?.name || '',
  surname: user?.value?.surname || '',
  email: user?.value?.email || '',
  phone: user?.value?.phone || ''
})

const passForm = reactive({
  old_password: '',
  password: '',
  confirm_password: ''
})

const loading = ref(false)

const validPass = computed(() => {
  return (
    passForm.old_password &&
    passForm.password &&
    passForm.password === passForm.confirm_password
  )
})

const save = async () => {
  loading.value = true
  try {
    const res = await useAPI('profile/update', {
      method: 'POST',
      body: JSON.stringify(userForm)
    })
    if (res.value?.data?.id) {
      user.value = res.value.data
      window.$message.success(translate('success_message'))
    }
  } finally {
    loading.value = false
  }
}

const savePassword = async () => {
  if (!validPass.value) return
  loading.value = true
  try {
    const res = await useAPI('profile/password/change', {
      method: 'POST',
      body: JSON.stringify(passForm)
    })
    if (res.value.data) {
      window.$message.success(translate('success_message'))
      passForm.old_password = ''
      passForm.password = ''
      passForm.confirm_password = ''
    }
  } finally {
    loading.value = false
  }
}
</script>

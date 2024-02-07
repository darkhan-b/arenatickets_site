<template>
  <div
    class="search-wrapper position-relative d-flex align-items-center text-center">
    <input
      v-model="email"
      class="form-control form-control-purple search-input w-100"
      type="text"
      :placeholder="$t('email')" />
    <n-button class="round-btn bg-white" @click="subscribe">
      <ArrowSvg class="svg-arrow svg-primary" />
    </n-button>
  </div>
</template>

<script setup>
import ArrowSvg from '~/assets/svg/arrow_r.svg?component'
import { NButton } from 'naive-ui'
import { parseAPIError } from '~/utils/helpers'

const email = ref('')

const subscribe = async () => {
  if (!email.value) return
  const data = await useAPI('subscribe', {
    method: 'POST',
    body: { email: email.value }
  })
  const message = data.value?.data?.message
  if (message) {
    window.$message.success(message)
    email.value = ''
  }
}
</script>

<style scoped lang="scss">
.search-wrapper {
  max-width: 420px;
}
.svg-arrow {
  width: 25px;
}
</style>

<template>
  <div
    class="search-wrapper position-relative d-flex align-items-center text-center">
    <input
      v-model="email"
      class="form-control form-control-purple search-input w-100"
      type="text"
      :placeholder="$t('email')" />
    <n-button class="round-btn bg-white">
      <ArrowSvg class="svg-arrow svg-primary" />
    </n-button>
  </div>
</template>

<script setup>
import ArrowSvg from '~/assets/svg/arrow_r.svg?component'
import { NButton } from 'naive-ui'

const email = ref('')
</script>

<style scoped lang="scss">
.search-wrapper {
  max-width: 420px;
}
.svg-arrow {
  width: 25px;
}
</style>

<template>
  <div
    class="search-wrapper position-relative d-flex align-items-center text-center">
    <input
      v-model="search"
      class="form-control form-control-purple search-input w-100"
      type="text"
      :placeholder="$t('search')" />
    <n-button class="round-btn bg-white"><SearchSvg /></n-button>
  </div>
</template>

<script setup>
import SearchSvg from '~/assets/svg/search.svg?component'
import { NButton } from 'naive-ui'

const search = ref('')
</script>

<style scoped lang="scss">
.search-wrapper {
  max-width: 386px;
}
</style>

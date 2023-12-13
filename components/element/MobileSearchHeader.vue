<template>
  <div
    class="search-wrapper position-relative d-inline-flex align-items-center align-middle text-end">
    <ElementSearchBlock :q="search" />
    <input
      v-model="search"
      class="form-control form-control-purple search-input w-100"
      type="text"
      v-if="opened"
      :placeholder="$t('search')" />
    <n-button @click="opened = !opened" text><SearchSvg /></n-button>
  </div>
</template>

<script setup>
import SearchSvg from '~/assets/svg/search_w.svg?component'
import { NButton } from 'naive-ui'

const route = useRoute()

const search = ref('')
const opened = ref(false)

watch(
  () => route.path,
  () => {
    search.value = ''
  }
)
</script>

<style scoped lang="scss">
//.search-wrapper {
//  max-width: 386px;
//}
</style>

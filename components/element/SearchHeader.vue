<template>
  <form
    autocomplete="off"
    class="search-wrapper position-relative d-flex align-items-center text-center">
    <ElementSearchBlock :q="search" />
    <input
      v-model="search"
      class="form-control form-control-purple search-input w-100"
      autocomplete="nope"
      type="text"
      :placeholder="$t('search')" />
    <n-button class="round-btn bg-white"><SearchSvg /></n-button>
  </form>
</template>

<script setup>
import SearchSvg from '~/assets/svg/search.svg?component'
import { NButton } from 'naive-ui'

const route = useRoute()

const search = ref('')

watch(
  () => route.path,
  () => {
    console.log('route changed')
    search.value = ''
  }
)
</script>

<style scoped lang="scss">
.search-wrapper {
  max-width: 386px;
}
</style>

<template>
  <div
    class="search-wrapper position-relative d-inline-flex align-items-center align-middle text-end">
    <n-drawer
      v-model:show="opened"
      :width="windowWidth"
      :height="60"
      placement="top">
      <div class="drawer-wrap position-relative">
        <div class="row align-items-center">
          <div class="col">
            <div class="position-relative">
              <input
                v-model="search"
                class="form-control form-control-purple search-input w-100"
                type="text"
                v-if="opened"
                :placeholder="$t('title_of_event')" />
              <SearchSvg class="search-svg" />
            </div>
          </div>
          <div class="col-auto">
            <n-button text class="text-white" @click="opened = false">{{
              $t('cancel')
            }}</n-button>
          </div>
        </div>
      </div>

      <ElementSearchBlock :q="search" class="mobile-search" />
    </n-drawer>

    <n-button @click="opened = !opened" text><SearchSvg /></n-button>
  </div>
</template>

<script setup>
import SearchSvg from '~/assets/svg/search_w.svg?component'
import { NButton, NDrawer } from 'naive-ui'

const route = useRoute()
const generalStore = useGeneralStore()

const { isMobile, windowWidth } = storeToRefs(generalStore)

const search = ref('')
const opened = ref(false)

watch(
  () => route.path,
  () => {
    search.value = ''
    opened.value = false
  }
)
</script>

<style scoped lang="scss">
.drawer-wrap {
  background: $primary;
  height: 60px;
  padding: 0 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.search-svg {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>

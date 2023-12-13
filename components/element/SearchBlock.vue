<template>
  <div class="search-block">
    <div
      v-if="loading"
      class="d-flex justify-content-center align-items-center py-4">
      <n-spin size="small" />
    </div>
    <div v-else>
      <div v-if="!found.length && q.length" class="text-muted py-4">
        {{ $t('no_data_available') }}
      </div>
      <div v-if="found.length > 0">
        <div v-for="(show, index) in found" :key="`show-${index}`" class="px-4">
          <div v-if="index > 0" class="fading-line"></div>
          <nuxt-link
            :to="`/event/${show.slug}`"
            class="text-start row align-items-center py-2">
            <div class="col">
              <div class="fw-bold">{{ $trans(show.title) }}</div>
              <div>{{ show.datePlaceString }}</div>
            </div>
            <div class="col-auto"><ArrowSvg class="arrow-svg" /></div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NSpin } from 'naive-ui'
import ArrowSvg from '~/assets/svg/arrow_r.svg?component'

const props = defineProps({
  q: {
    type: String,
    required: true
  }
})

const found = ref([])
const loading = ref(false)

watch(
  () => props.q,
  () => {
    if (props.q.length) {
      search()
    } else {
      found.value = []
    }
  }
)

const search = async () => {
  if (loading.value) return
  loading.value = true
  const { data, error } = await useAPI(`search?q=${props.q}`)
  found.value = data.value?.data?.data || []
  loading.value = false
}
</script>

<style scoped lang="scss">
.search-block {
  z-index: 5;
  position: absolute;
  top: calc(100% + 20px);
  background: white;
  width: 100%;
  box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  .fading-line {
    height: 2px;
    width: 467px;
    background: linear-gradient(
      90deg,
      rgba(217, 217, 217, 0.35) 0%,
      rgba(217, 217, 217, 0) 90.04%,
      rgba(217, 217, 217, 0) 90.04%
    );
  }
  .arrow-svg {
    width: 20px;
  }
}
</style>

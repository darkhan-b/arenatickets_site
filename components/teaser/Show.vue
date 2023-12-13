<template>
  <nuxt-link v-if="show" class="show-teaser" :to="`/event/${show.slug}`">
    <div class="position-relative img-wrapper">
      <img :src="show.teaser" alt="" class="w-100" />
      <div class="price d-flex justify-content-center align-items-center">
        {{ formatPrice(show.minCost) }}
      </div>
    </div>
    <h3 class="mt-3">{{ $trans(show.title) }}</h3>
    <div class="d-flex align-items-center gap-3">
      <div>{{ show.dateString }}</div>
      <div class="bubble"></div>
      <div>{{ show.placeString }}</div>
    </div>
  </nuxt-link>
</template>

<script setup>
import { formatPrice } from '@/utils/helpers'

const props = defineProps({
  show: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.show-teaser {
  .img-wrapper {
    border-radius: 22px;
    overflow: hidden;
  }
  .price {
    position: absolute;
    border-radius: 55px;
    bottom: 10px;
    left: 10px;
    background: rgba(255, 255, 255, 0.62);
    height: 30px;
    padding: 0 18px;
  }
  h3 {
    font-size: 20px;
  }
}
</style>

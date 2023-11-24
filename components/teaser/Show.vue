<template>
  <a
    class="show-teaser"
    :href="`https://widget.arenatickets.kz/1/t/${show.timetables[0].id}/${show.timetables[0].uuid}`">
    <div class="position-relative img-wrapper">
      <img :src="show.main" alt="" class="w-100" />
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
  </a>
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
  .bubble {
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background-color: $dark;
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
}
</style>

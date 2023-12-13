<template>
  <section id="home-popular">
    <h2>{{ $t('popular') }}</h2>
    <n-carousel
      :slides-per-view="isMobile ? 1.2 : 3"
      :space-between="isMobile ? 20 : 40"
      :loop="true"
      draggable>
      <TeaserShow
        v-for="(show, index) in data.data"
        :key="`show-${index}`"
        :show="show" />
    </n-carousel>
  </section>
</template>

<script setup>
import { NCarousel } from 'naive-ui'
const generalStore = useGeneralStore()

const { isMobile } = storeToRefs(generalStore)

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.popular-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 40px;
}
</style>

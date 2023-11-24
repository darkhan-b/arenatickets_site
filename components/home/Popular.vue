<template>
  <section id="home-popular">
    <h2>{{ $t('popular') }}</h2>
    <div class="popular-grid d-grid">
      <TeaserShow
        v-for="(show, index) in data.data"
        :key="`show-${index}`"
        :show="show" />
    </div>
  </section>
</template>

<script setup>
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

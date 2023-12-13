<template>
  <nuxt-link :to="`/category/${category.slug}`" class="category-teaser">
    <div class="d-flex align-items-center text-start">
      <div class="category-title">{{ $trans(category.title) }}</div>
      <ArrowSvg class="svg-white arrow-svg" />
    </div>
  </nuxt-link>
</template>

<script setup>
import ArrowSvg from '~/assets/svg/arrow_r.svg?component'

const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.category-teaser {
  border-radius: 22px;
  padding: 32px;
  color: #fff;
  min-height: 200px;
  display: flex;
  align-items: center;
  font-size: 22px;
  background-image: url('/images/footer-bg.svg');
  background-size: 176px;
  background-repeat: no-repeat;
  background-position: right bottom;
  .category-title {
    font-size: 22px;
    text-transform: uppercase;
    margin-right: 8px;
  }
  .arrow-svg {
    width: 41px;
  }
}
@media screen and (max-width: 768px) {
  .category-teaser {
    min-height: 120px;
    padding: 12px;
    background-size: 76px;
    .category-title {
      font-size: 16px;
    }
    .arrow-svg {
      width: 22px;
      margin-left: 10px;
    }
  }
}
</style>

<template>
  <section id="home-categories">
    <h2>{{ $t('categories') }}</h2>
    <div class="categories-grid d-grid">
      <TeaserCategory
        v-for="(category, index) in categories"
        :class="`color-${index}`"
        :key="`category-${category.id}`"
        :category="category" />
    </div>
  </section>
</template>

<script setup>
import { useGeneralStore } from '~/stores/general.store'
import { storeToRefs } from 'pinia'

const generalStore = useGeneralStore()

const { categories } = storeToRefs(generalStore)
</script>

<style scoped lang="scss">
.categories-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 40px;
}
</style>

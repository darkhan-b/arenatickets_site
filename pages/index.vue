<template>
  <div class="container py-5 text-center">
    <HomeCategories />
  </div>
</template>

<script setup>
import { translate } from '@/utils/helpers'
import { useGeneralStore } from '@/stores/general.store'
import { storeToRefs } from 'pinia'

const generalStore = useGeneralStore()

const { categories } = storeToRefs(generalStore)

const { data } = await useAPI(`home`)
// const blocks = data.value.data.blocks
// const slides = data.value.data.slides
// const cats = data.value.data.special_cats
// const seo = data.value.data.seo_text
</script>

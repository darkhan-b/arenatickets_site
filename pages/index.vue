<template>
  <div class="container py-5 text-center">
    <HomePopular :data="recommended" />
    <HomeCategories class="mt-5 pt-3" />
  </div>
</template>

<script setup>
import { translate } from '@/utils/helpers'
import { useGeneralStore } from '@/stores/general.store'
import { storeToRefs } from 'pinia'

const generalStore = useGeneralStore()

const { categories } = storeToRefs(generalStore)

const { data } = await useAPI(`home`)
const recommended = data.value.data.recommended
// const blocks = data.value.data.blocks
// const slides = data.value.data.slides
// const cats = data.value.data.special_cats
// const seo = data.value.data.seo_text
</script>

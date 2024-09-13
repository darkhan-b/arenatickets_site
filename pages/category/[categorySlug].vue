<template>
  <section
    v-if="category"
    id="category"
    class="container mb-section mt-section">
    <h1 class="mb-5">{{ $trans(category.title) }}</h1>
    <div v-if="!shows.length">
      <n-result status="404" :title="$t('no_data_available')"></n-result>
    </div>
    <div class="category-grid d-grid">
      <TeaserShow
        v-for="(show, index) in shows"
        :key="`show-${index}`"
        :show="show" />
    </div>
    <div class="text-center mt-5" v-if="hasMore">
      <n-button class="px-5" :loading="loading" @click="loadMore">{{
        $t('show_more')
      }}</n-button>
    </div>
  </section>
</template>

<script setup>
import { NResult, NButton } from 'naive-ui'

const route = useRoute()

const hasMore = ref(false)
const page = ref(1)
const shows = ref([])
const category = ref(null)
const loading = ref(false)

const loadData = async () => {
  const data = await useAPI(
    `category/${route.params.categorySlug}?page=${page.value}`
  )
  const categoryData = data.value?.data || null
  category.value = categoryData?.category || null
  shows.value = shows.value.concat(categoryData?.events?.data || [])
  hasMore.value = categoryData?.events?.next_page_url ? true : false
}

const loadMore = async () => {
  if (loading.value) return
  loading.value = true
  page.value++
  await loadData()
  loading.value = false
}

await loadData()

const title = trans(category.value.title)
const description = `Продажа билетов на ${trans(category.value.title)}`

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description }
  ]
})
</script>

<style scoped lang="scss">
.category-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 40px;
}
#category {
  padding-bottom: 80px;
}
@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
}
</style>

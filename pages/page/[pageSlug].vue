<template>
  <div class="page" v-if="page">
    <div class="page-title">
      <div class="container">
        <h1>{{ trans(page.title) }}</h1>
      </div>
    </div>
    <div class="container">
      <article v-html="trans(page.body)"></article>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const page = ref(null)

const loadPage = async () => {
  const data = await useAPI(`page/${route.params.pageSlug}`)
  page.value = data.value?.data
  if (!page.value) {
    showError({ statusCode: 404 })
  }
}

await loadPage()

const title = trans(page.value?.title || '')
const description = trans(page.value?.title || '')

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

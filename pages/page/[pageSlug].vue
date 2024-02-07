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

loadPage()
</script>

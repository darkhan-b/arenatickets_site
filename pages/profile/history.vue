<template>
  <div class="container mobile-container">
    <h1 class="mb-5 mt-5">{{ $t('myOrders') }}</h1>
    <div class="pb-5">
      <n-result
        v-if="loaded && !orders.length"
        status="404"
        :title="$t('no_tickets')">
      </n-result>
      <div v-for="o in orders" :key="`order-${o.id}`">
        <TeaserOrder :order="o" class="mb-3" />
      </div>

      <div class="text-center mt-5" v-if="hasMore">
        <n-button class="px-5" :loading="loading" @click="loadMore">{{
          $t('show_more')
        }}</n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NResult } from 'naive-ui'

const hasMore = ref(false)
const loading = ref(false)
const loaded = ref(false)
const page = ref(1)
const orders = ref([])

const loadData = async () => {
  const data = await useAPI(`profile/orders?page=${page.value}`)
  const orderData = data.value?.data || null
  orders.value = orders.value.concat(orderData?.orders?.data || [])
  hasMore.value = !!orderData?.orders?.next_page_url
  loaded.value = true
}

const loadMore = async () => {
  if (loading.value) return
  loading.value = true
  page.value++
  await loadData()
  loading.value = false
}

loadData()
</script>

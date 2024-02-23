<template>
  <div class="order-teaser">
    <div class="row align-items-center">
      <div class="col-auto" v-if="show">
        <img class="img-teaser" :src="show.teaser" :alt="show.title" />
      </div>
      <div class="col-md-3 col">
        <n-tag type="success" v-if="order.paid">{{ $t('paid') }}</n-tag>
        <n-tag v-if="!order.paid">{{ $t('not_paid') }}</n-tag>
        <div class="order-id mt-2">{{ $t('order') }}# {{ order.id }}</div>
        <div>{{ $trans(show.title) }}</div>
      </div>
      <div class="col-md">
        <div class="mob-block">
          <div class="row mt-3 mt-md-0">
            <div class="col-md col-6">
              <div>{{ formatDateWords(timetable.date) }}</div>
              <div class="text-muted">{{ formatTime(timetable.date) }}</div>
            </div>
            <div class="col-md col-6">
              <div>{{ formatPrice(order.price) }}</div>
              <div class="text-muted">
                {{ $t('tickets_of') }}: {{ order.order_items.length }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-12 text-end mt-md-0 mt-3">
        <a
          :href="order.ticketsLink"
          class="btn-ticket d-inline-flex align-items-center"
          target="_blank"
          v-if="order.ticketsLink">
          {{ $t('tickets') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatPrice, formatTime, formatDateWords } from '~/utils/helpers'
import { NTag } from 'naive-ui'

const props = defineProps({
  order: {
    type: Object,
    required: true
  }
})

const timetable = computed(() => {
  return props.order.timetable
})

const show = computed(() => {
  return timetable.value?.show
})
</script>

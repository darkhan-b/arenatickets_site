<template>
  <div class="container mobile-container pb-5">
    <h1 class="mb-5 mt-5">{{ $t('report') }}</h1>
    <n-card style="max-width: 600px" :bordered="false" class="bg-gray my-5">
      <div>
        <n-space vertical :size="20" class="mt-15">
          <n-grid cols="2" :x-gap="10">
            <n-grid-item>
              <n-input-group>
                <n-input-group-label>Дата от</n-input-group-label>
                <n-date-picker
                  class="w-100"
                  placeholder=""
                  v-model:value="date_from" />
              </n-input-group>
            </n-grid-item>
            <n-grid-item>
              <n-input-group>
                <n-input-group-label>Дата до</n-input-group-label>
                <n-date-picker
                  class="w-100"
                  placeholder=""
                  v-model:value="date_to" />
              </n-input-group>
            </n-grid-item>
          </n-grid>
          <n-input-group>
            <n-input-group-label>События</n-input-group-label>
            <form-select-group
              class="w-100"
              v-model="show_ids"
              :autocomplete="true"
              model="show"
              :multiple="true" />
          </n-input-group>
          <n-input-group>
            <n-input-group-label>Сеансы</n-input-group-label>
            <form-select-group
              class="w-100"
              v-model="timetable_ids"
              autocomplete-search-field="date"
              :autocomplete="true"
              model="timetable"
              :multiple="true" />
          </n-input-group>
          <n-input-group v-if="report_type !== 'unsold'">
            <n-input-group-label>Площадки</n-input-group-label>
            <form-select-group
              class="w-100"
              v-model="venue_ids"
              :autocomplete="true"
              model="venue"
              :multiple="true" />
          </n-input-group>
          <n-input-group v-if="report_type !== 'unsold'">
            <n-input-group-label>Категории</n-input-group-label>
            <form-select-group
              class="w-100"
              v-model="category_ids"
              :autocomplete="true"
              model="category"
              :multiple="true" />
          </n-input-group>

          <n-radio-group v-model:value="report_type" class="w-100">
            <n-radio-button value="sales">Продажи</n-radio-button>
            <n-radio-button value="refunds">Возвраты</n-radio-button>
            <n-radio-button value="unsold">Непроданные</n-radio-button>
          </n-radio-group>
        </n-space>

        <n-button
          class="mt-5 btn-themed h-auto"
          @click="submit"
          :loading="loading"
          >Сформировать</n-button
        >
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import {
  NButton,
  NCard,
  NDatePicker,
  NGrid,
  NGridItem,
  NInputGroup,
  NInputGroupLabel,
  NRadioButton,
  NRadioGroup,
  NSpace,
  useDialog
} from 'naive-ui'

const dialog = useDialog()

const date_from = ref(null)
const date_to = ref(null)
const show_ids = ref([])
const timetable_ids = ref([])
const venue_ids = ref([])
const category_ids = ref([])
const report_type = ref('sales')
const loading = ref(false)

const submit = async () => {
  loading.value = true
  try {
    const res = await useAPI(`profile/organizer/events/report`, {
      method: 'POST',
      body: {
        report_type: report_type.value,
        date_from: date_from.value,
        date_to: date_to.value,
        venue_ids: venue_ids.value,
        show_ids: show_ids.value,
        timetable_ids: timetable_ids.value,
        category_ids: category_ids.value
      }
    })
    if (res.value) {
      location.href = res.value
    } else {
      dialog.warning({
        title: 'Пустой результат',
        content: 'Не найдено записей по запросу'
      })
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.n-base-selection {
  height: 32px;
}
.n-base-selection-tag-wrapper .n-tag {
  height: 32px;
}
</style>

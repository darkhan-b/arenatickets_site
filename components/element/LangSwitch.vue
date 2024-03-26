<template>
  <div>
    <n-dropdown trigger="click" :options="options" @select="changeLocale">
      <a class="px-md-4 px-3 pointer">{{ locale }}</a>
    </n-dropdown>
  </div>
</template>

<script setup>
import { NDropdown } from 'naive-ui'
import { langService } from '~/utils/lang.service'

const generalStore = useGeneralStore()
const { locale } = storeToRefs(generalStore)

const options = [
  { label: 'Қазақ', key: 'kz' },
  { label: 'Русский', key: 'ru' },
  { label: 'English', key: 'en' }
]

const changeLocale = async (lang) => {
  langService.saveLang(lang)
  locale.value = lang
  await generalStore.initialLoad(lang)
}
</script>

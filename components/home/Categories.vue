<template>
  <div></div>
</template>

<script setup>
import { useGeneralStore } from '~/stores/general.store'
import { storeToRefs } from 'pinia'

const generalStore = useGeneralStore()

const { categories } = storeToRefs(generalStore)
</script>

<style scoped lang="scss"></style>

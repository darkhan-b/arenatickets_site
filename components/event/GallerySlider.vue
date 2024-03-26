<template>
  <div v-if="gallery && gallery.length" class="mt-4">
    <h3>{{ $t('gallery') }}</h3>
    <HomeSlider :slides="gallery" view="event" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  gallery: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>

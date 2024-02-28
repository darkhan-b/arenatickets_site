<template>
  <div>
    <!--    <HomeSlider :slides="slides" />-->
    <div class="container py-5 text-center">
      <HomePopular :data="recommended" />
      <HomeCategories class="mt-5 pt-3" />
    </div>
  </div>
</template>

<script setup>
const data = await useAPI(`home`)
const recommended = data.value.data.recommended
const slides = data.value.data.slider
</script>

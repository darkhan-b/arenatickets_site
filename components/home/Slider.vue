<template>
  <div class="container slider-container">
    <div v-if="slides.length" class="home-slider">
      <n-carousel
        autoplay
        :slides-per-view="1"
        :interval="5000"
        :loop="slides.length > 1"
        dot-placement="bottom"
        :show-dots="false"
        draggable
        show-arrow>
        <n-carousel-item v-for="slide in slides" :key="`slide-${slide.id}`">
          <HomeSlide :slide="slide" :view="view" />
        </n-carousel-item>
      </n-carousel>
    </div>
  </div>
</template>

<script setup>
import { NCarousel, NCarouselItem } from 'naive-ui'

defineProps({
  slides: {
    type: Array,
    required: true
  },
  view: {
    type: String,
    default: 'home'
  }
})
</script>

<script setup lang="ts">
import FbSvg from '~/assets/svg/social_fb.svg?component'
import InstaSvg from '~/assets/svg/social_instagram.svg?component'
import WhatsAppSvg from '~/assets/svg/social_whatsapp.svg?component'
</script>

<template>
  <div class="d-flex gap-5 align-items-center">
    <div class="d-flex gap-4">
      <a><FbSvg /></a>
      <a><InstaSvg /></a>
      <a><WhatsAppSvg /></a>
    </div>
    <a class="fw-bold text-white" href="mailto:info@arenatickets.kz"
      >info@arenatickets.kz</a
    >
  </div>
</template>

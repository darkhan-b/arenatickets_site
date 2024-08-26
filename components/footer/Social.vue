<script setup lang="ts">
import FbSvg from '~/assets/svg/social_fb.svg?component'
import InstaSvg from '~/assets/svg/social_instagram.svg?component'
import WhatsAppSvg from '~/assets/svg/social_whatsapp.svg?component'
import { setting } from '~/utils/helpers'
</script>

<template>
  <div class="d-md-flex d-block justify-content-between">
    <div class="d-flex gap-5 align-items-center">
      <div class="d-flex gap-4">
        <a><FbSvg /></a>
        <a><InstaSvg /></a>
        <a><WhatsAppSvg /></a>
      </div>
      <a class="fw-bold text-white" :href="`mailto:${setting('email')}`">{{
        setting('email')
      }}</a>
    </div>
    <div class="visa-mastercard mt-md-0 mt-5">
      <img alt="visa" src="/images/visa.svg" />
      <img alt="mastercard" src="/images/mc.svg" />
    </div>
  </div>
</template>

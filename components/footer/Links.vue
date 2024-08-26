<template>
  <div>
    <div class="d-md-flex gap-5 text-md-end justify-content-md-end">
      <nuxt-link class="footer-page-link" to="/page/purchase">{{
        $t('how_to_buy_ticket')
      }}</nuxt-link>
      <nuxt-link class="footer-page-link" to="/page/organizers">{{
        $t('to_organizers_short')
      }}</nuxt-link>
      <nuxt-link class="footer-page-link" to="/page/about">{{
        $t('about_company')
      }}</nuxt-link>
    </div>
    <div class="d-md-flex gap-5 mt-md-4 text-md-end justify-content-md-end">
      <nuxt-link class="footer-page-link" to="/page/offer">{{
        $t('public_offer')
      }}</nuxt-link>
      <nuxt-link class="footer-page-link" to="/page/confidentiality">{{
        $t('confidentiality_policy')
      }}</nuxt-link>
      <nuxt-link class="footer-page-link" to="/page/refund">{{
        $t('refund')
      }}</nuxt-link>
    </div>
    <div class="d-md-inline-flex gap-5"></div>
  </div>
</template>
<script setup lang="ts"></script>

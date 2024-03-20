<template>
  <div class="d-md-inline-flex gap-5">
    <nuxt-link class="footer-page-link" to="/page/purchase"
      >$t('how_to_buy_ticket')</nuxt-link
    >
    <nuxt-link class="footer-page-link" to="/page/organizers">{{
      $t('to_organizers_short')
    }}</nuxt-link>
    <nuxt-link class="footer-page-link" to="/page/about">{{
      $t('about_company')
    }}</nuxt-link>
  </div>
</template>

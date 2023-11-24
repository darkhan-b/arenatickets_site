<template>
  <header class="header" id="header">
    <div class="container">
      <div class="row align-items-center g-1 g-md-4">
        <div class="col-auto">
          <nuxt-link to="/" class="header--logo">
            <LogoSvg />
          </nuxt-link>
        </div>
        <div class="col text-center">
          <ElementSearchHeader class="mx-auto" />
        </div>
        <div class="col-auto text-uppercase">
          <div class="d-flex gap-5">
            <nuxt-link>Как купить</nuxt-link>
            <nuxt-link>Контакты</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import LogoSvg from '~/assets/svg/logo_w.svg?component'
</script>

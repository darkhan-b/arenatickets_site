<template>
  <header class="header" id="header">
    <div class="container">
      <div class="row align-items-center g-1 g-md-4">
        <div class="col-auto">
          <nuxt-link to="/" class="header--logo">
            <LogoSvg />
          </nuxt-link>
        </div>
        <div class="col"></div>
        <div class="col-auto text-uppercase">Контакты</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import LogoSvg from '~/assets/svg/logo_w.svg?component'
</script>

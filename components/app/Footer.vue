<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-auto">
          <nuxt-link to="/" class="footer--logo">
            <LogoSvg />
          </nuxt-link>
        </div>
        <div class="col text-end">О компании</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoSvg from '~/assets/svg/logo_w.svg?component'
</script>

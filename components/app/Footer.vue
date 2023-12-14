<template>
  <footer class="footer" :class="`footer-${view}`" id="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-auto" v-if="view === 'general'">
          <nuxt-link to="/" class="footer--logo">
            <LogoSvg />
          </nuxt-link>
        </div>
        <div class="col-md col-12 text-md-end mt-md-0 mt-5">
          <FooterLinks />
        </div>
      </div>
      <div class="mt-5">
        <FooterSocial />
      </div>
      <div class="mt-5">
        <div class="fading-line"></div>
      </div>
      <FooterSubscribe />
    </div>
  </footer>
</template>

<script setup>
import LogoSvg from '~/assets/svg/logo_w.svg?component'

const props = defineProps({
  view: {
    type: String,
    default: 'general'
  }
})
</script>

<style scoped>
.fading-line {
  height: 2px;
  width: 467px;
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0.35) 0%,
    rgba(217, 217, 217, 0) 90.04%,
    rgba(217, 217, 217, 0) 90.04%
  );
}
@media screen and (max-width: 768px) {
  .fading-line {
    width: 100%;
  }
}
</style>

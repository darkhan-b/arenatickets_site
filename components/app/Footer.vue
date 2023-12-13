<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-auto">
          <nuxt-link to="/" class="footer--logo">
            <LogoSvg />
          </nuxt-link>
        </div>
        <div class="col-md col-12 text-md-end mt-md-0 mt-4">
          <div class="d-md-inline-flex gap-5">
            <nuxt-link class="footer-page-link" to="/page/purchase"
              >Как купить билеты</nuxt-link
            >
            <nuxt-link class="footer-page-link" to="/page/organizers"
              >Организаторам</nuxt-link
            >
            <nuxt-link class="footer-page-link" to="/page/about"
              >О компании</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="mt-5">
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
      </div>
      <div class="mt-5">
        <div class="fading-line"></div>
      </div>
      <div class="fw-bold mt-3">Подпишитесь на акции и анонсы событий</div>
      <ElementSubscribeFooter class="mt-3" />
    </div>
  </footer>
</template>

<script setup>
import LogoSvg from '~/assets/svg/logo_w.svg?component'
import FbSvg from '~/assets/svg/social_fb.svg?component'
import InstaSvg from '~/assets/svg/social_instagram.svg?component'
import WhatsAppSvg from '~/assets/svg/social_whatsapp.svg?component'
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
</style>

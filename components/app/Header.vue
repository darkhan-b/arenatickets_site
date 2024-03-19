<template>
  <header class="header" id="header">
    <div class="container">
      <div class="row align-items-center g-1 g-md-4">
        <div class="col-auto">
          <nuxt-link to="/" class="header--logo">
            <LogoSvg />
          </nuxt-link>
        </div>
        <div class="col text-md-center text-end">
          <ElementSearchHeader class="mx-auto" v-if="!isMobile" />
          <ElementMobileSearchHeader class="me-0" v-if="isMobile" />
        </div>
        <div class="col-auto text-md-center text-end">
          <AuthHeaderBtn />
        </div>
        <div class="col-auto text-uppercase">
          <ElementLangSwitch />
        </div>
        <div class="col-auto text-uppercase">
          <div class="d-flex gap-5" v-if="!isMobile">
            <nuxt-link to="/page/purchase">Как купить</nuxt-link>
            <nuxt-link to="/page/contacts">Контакты</nuxt-link>
          </div>
          <ElementMobileMenu class="ps-3" v-if="isMobile" />
        </div>
      </div>
    </div>
    <AuthLoginModal />
    <AuthRegisterModal />
  </header>
</template>

<script setup>
import LogoSvg from '~/assets/svg/logo_w.svg?component'
const generalStore = useGeneralStore()

const { isMobile } = storeToRefs(generalStore)
</script>

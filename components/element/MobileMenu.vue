<template>
  <div class="d-flex mobile-menu">
    <n-button text @click="show = true">
      <MenuSvg />
    </n-button>
    <n-drawer v-model:show="show" :width="windowWidth" placement="right">
      <n-drawer-content class="mobile-drawer">
        <div class="mobile-menu-header">
          <div class="row align-items-center">
            <div class="col">
              <LogoSvg class="logo-svg" />
            </div>
            <div class="col-auto">
              <n-button text @click="show = false"><CloseSvg /></n-button>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-between content-part">
          <FooterLinks class="mt-5" />
          <div>
            <FooterSubscribe />
            <FooterSocial class="pt-5" />
          </div>
        </div>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup>
import MenuSvg from '~/assets/svg/menu.svg?component'
import LogoSvg from '~/assets/svg/logo_w.svg?component'
import CloseSvg from '~/assets/svg/close.svg?component'
import { NButton, NDrawer, NDrawerContent } from 'naive-ui'

const show = ref(false)

const generalStore = useGeneralStore()

const { isMobile, windowWidth } = storeToRefs(generalStore)
</script>

<style scoped lang="scss"></style>

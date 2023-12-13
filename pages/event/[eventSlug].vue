<template>
  <div class="mb-section">
    <section>
      <picture>
        <source
          v-if="show.mobileSlide"
          media="(max-width:576px)"
          class="w-100"
          :srcset="show.mobileSlide" />
        <img class="banner w-100" :src="show.slide" alt="banner" />
      </picture>
    </section>
    <div class="container mt-md-5 mt-1">
      <section>
        <div class="row">
          <div class="col">
            <h1 class="mt-3">{{ $trans(show.title) }}</h1>
            <div class="d-flex align-items-center gap-3">
              <div>{{ show.dateString }}</div>
              <div class="bubble"></div>
              <div>{{ $trans(show.city.title) }}</div>
              <div class="bubble"></div>
              <div>{{ show.placeString }}</div>
            </div>
          </div>
          <div class="col-md-auto">
            <div class="d-flex align-center">
              <ElementTag v-if="!isMobile"
                >{{ $t('from') }} {{ formatPrice(show.minCost) }}</ElementTag
              >
              <n-button
                class="btn-themed text-uppercase w-100"
                @click="toWidgetPurchase(show)"
                >{{ $t('buy') }} <ArrowSvg class="svg-arrow svg-white"
              /></n-button>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-section" v-if="$trans(show.description)">
        <h3>{{ $t('about_event') }}</h3>
        <article class="html-article">
          <div v-html="$trans(show.description)"></div>
        </article>
      </section>

      <section class="mt-section" v-if="venue">
        <h3>{{ $t('address') }}</h3>
      </section>
      <div>
        <div>{{ $trans(venue.title) }}</div>
        <div v-if="$trans(venue.address)">{{ $trans(venue.address) }}</div>
        <div v-if="$trans(venue.description)">
          {{ $trans(venue.description) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowSvg from '~/assets/svg/arrow_r.svg?component'
import { NButton } from 'naive-ui'
import { formatPrice } from '~/utils/helpers'

const route = useRoute()
const generalStore = useGeneralStore()

const { isMobile } = storeToRefs(generalStore)

const { data, error } = await useAPI(`event/${route.params.eventSlug}`)

const showData = data.value?.data || null
const show = showData?.event || null
const venue = show?.venue || null
</script>

<style scoped lang="scss">
.svg-arrow {
  width: 40px;
}
</style>

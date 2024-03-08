<template>
  <div class="mb-section">
    <section>
      <div class="position-relative">
        <picture>
          <source
            v-if="show.mobileSlide"
            media="(max-width:576px)"
            class="w-100"
            :srcset="show.mobileSlide" />
          <img class="banner w-100" :src="show.slide" alt="banner" />
        </picture>
        <div class="shadow" v-if="isMobile"></div>
        <ElementTag v-if="isMobile" class="abs-tag"
          >{{ $t('from') }} {{ formatPrice(show.minCost) }}</ElementTag
        >
      </div>
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
                class="btn-themed btn-purchase text-uppercase mt-md-0 mt-2"
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
        <client-only>
          <div v-if="venue && venue.x_coord && venue.y_coord">
            <div id="map-2gis"></div>
          </div>
        </client-only>
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

const data = await useAPI(`event/${route.params.eventSlug}`)

const showData = data.value?.data || null
const show = showData?.event || null
const venue = show?.venue || null

useHead(
  {
    script: [
      {
        key: '2gis',
        src: 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full',
        onload() {
          showMap()
        }
      }
    ]
  },
  { mode: 'client' }
)

const showMap = async () => {
  if (venue?.x_coord && venue?.y_coord) {
    setTimeout(() => {
      const map = window.DG.map('map-2gis', {
        center: [venue.y_coord, venue.x_coord],
        zoom: 17
      })
      window.DG.marker([venue.y_coord, venue.x_coord]).addTo(map)
    }, 500)
  }
}
</script>

<style scoped lang="scss">
.svg-arrow {
  width: 40px;
}
.abs-tag {
  position: absolute;
  left: 20px;
  bottom: 20px;
}
.btn-purchase {
  min-width: 170px;
  border-radius: 100px;
}
.shadow {
  background: linear-gradient(
    180.53deg,
    rgba(0, 0, 0, 0) 0.72%,
    rgba(0, 0, 0, 0.6) 99.8%
  );
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  bottom: 0;
}
#map-2gis {
  height: 280px;
  width: 100%;
  margin-top: 16px;
}
@media screen and (max-width: 768px) {
  .btn-purchase {
    min-width: 0;
    width: 100%;
  }
}
</style>

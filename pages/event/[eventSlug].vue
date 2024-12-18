<template>
  <div class="mb-section">
    <section>
      <div class="position-relative">
        <div class="overflow-hidden">
          <picture>
            <source
              v-if="show.mobileSlide"
              media="(max-width:576px)"
              class="w-100"
              :srcset="show.mobileSlide" />
            <img class="banner w-100" :src="show.main" alt="banner" />
          </picture>
          <div class="shadow" v-if="isMobile"></div>
          <ElementTag v-if="isMobile" class="abs-tag"
            >{{ $t('from') }} {{ formatPrice(show.minCost) }}</ElementTag
          >
        </div>
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

      <section class="mt-section" v-if="timetables.length > 1">
        <h3>{{ $t('schedule') }}</h3>
        <div class="row">
          <div
            class="col-6 col-lg-4 mb-3"
            v-for="timetable in timetables"
            :key="`t-${timetable.id}`">
            <n-button
              class="btn-themed w-100 btn-purchase btn-themed-outline btn-sizing"
              @click="toWidgetPurchase(show, timetable)"
              >{{ formatDateWords(timetable.date, 'DD MMM YYYY, HH:mm') }}
              <ArrowSvg class="svg-arrow svg-primary"
            /></n-button>
          </div>
        </div>
      </section>

      <section class="mt-section" v-if="$trans(show.description)">
        <h3>{{ $t('about_event') }}</h3>
        <article class="html-article">
          <div v-html="$trans(show.description)"></div>
        </article>
      </section>

      <EventGallerySlider :gallery="gallery" />

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
import { formatDateWords, formatPrice } from '~/utils/helpers'

const route = useRoute()
const generalStore = useGeneralStore()

const { isMobile } = storeToRefs(generalStore)

const data = await useAPI(`event/${route.params.eventSlug}`)

const showData = data.value?.data || null
const gallery = showData?.gallery || []
const show = showData?.event || null
const venue = show?.venue || null
const timetables = show?.timetables || []
const title = trans(show.title)
const description = `Продажа билетов на ${trans(show.title)}`

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

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'og:image', content: show.main },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description }
  ]
})

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

<template>
  <a @click="slideClicked(slide)">
    <div class="shadow"></div>
    <picture typeof="ImageObject" class="carousel-img">
      <source
        v-if="slide.mobile"
        media="(max-width:576px)"
        :srcset="slide.mobile" />
      <img :src="slide.slide" alt="" />
    </picture>
    <section class="slide-section" v-if="view === 'home'">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md col-12">
            <h1>{{ $trans(show ? show.title : slide.title) }}</h1>
            <div
              class="d-flex align-items-center gap-3 mt-md-2 mt-0"
              v-if="show">
              <div>{{ show.dateString }}</div>
              <div class="bubble"></div>
              <div>{{ $trans(show.city.title) }}</div>
              <div class="bubble"></div>
              <div>{{ show.placeString }}</div>
            </div>
            <div class="d-flex align-items-center gap-3" v-else>
              <div>{{ $trans(slide.subtitle) }}</div>
            </div>
          </div>

          <div class="col-md-auto col-12 mt-md-0 mt-2">
            <div class="d-flex align-center">
              <ElementTag class="bg-white"
                >{{ $t('from') }} {{ formatPrice(show.minCost) }}</ElementTag
              >
              <n-button
                class="btn-themed btn-purchase text-uppercase"
                @click="toWidgetPurchase(show)"
                >{{ $t('buy') }} <ArrowSvg class="svg-arrow svg-white"
              /></n-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </a>
</template>

<script setup>
import ArrowSvg from 'assets/svg/arrow_r.svg'
import { NButton } from 'naive-ui'
import { formatPrice, trans } from '~/utils/helpers'

const props = defineProps({
  slide: {
    type: Object,
    required: true
  },
  view: {
    type: String,
    default: 'home'
  }
})

const generalStore = useGeneralStore()

const { isMobile } = storeToRefs(generalStore)

const router = useRouter()

const slideClicked = () => {
  if (props.slide.url && trans(props.slide.url)) {
    router.push(trans(props.slide.url))
    return
  }
  if (show.value) {
    router.push(`/event/${show.value.slug}`)
  }
}

const show = computed(() => {
  return props.slide.show
})
</script>

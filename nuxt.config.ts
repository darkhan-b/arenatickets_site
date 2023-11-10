// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      viewport:
          'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
      title: 'Продажа билетов на события в Казахстане',
      meta: [
        {
          name: 'description',
          content:
              'Продажа билетов на события в Казахстане'
        },
        {
          name: 'og:description',
          content:
              'Продажа билетов на события в Казахстане'
        },
        {
          name: 'og:title',
          content: 'Продажа билетов на события в Казахстане'
        },
        {
          name: 'og:image',
          content: 'https://arenatickets.kz/android-chrome-192x192.png'
        },
        { name: 'og:type', content: 'website' },
        {
          name: 'twitter:title',
          content: 'Продажа билетов на события в Казахстане'
        },
        {
          name: 'twitter:description',
          content:
              'Продажа билетов на события в Казахстане'
        },
        { name: 'author', content: 'Offlime.kz' }
      ],
      // script: [
      //   {
      //     hid: 'gtmHead',
      //     innerHTML: `
      //       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      //       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      //       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      //       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      //       })(window,document,'script','dataLayer','GTM-WJJKX7V');`
      //   }
      // ]
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_API_URL,
      apiToken: process.env.NUXT_API_TOKEN,
    }
  },
  ssr: false,
  css: ['~/assets/scss/app.scss'],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    },
    optimizeDeps: {
      include:
          process.env.NODE_ENV === 'development'
              ? ['naive-ui', 'vueuc']
              : []
    }
  },
  build: {
    transpile:
        process.env.NODE_ENV === 'production'
            ? [
              'naive-ui',
              'vueuc',
              '@css-render/vue3-ssr',
              '@juggle/resize-observer'
            ]
            : ['@juggle/resize-observer']
  },
  modules: ['@pinia/nuxt']
  // modules: ['nuxt-jsonld']
})

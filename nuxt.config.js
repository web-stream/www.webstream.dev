export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WebStream',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts/DMsans.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/mq',
    '~/plugins/gtag.client',
    '~/plugins/adblock.client',
    '~/plugins/v-tooltip.ts',
    '~/plugins/showcases',
    '~/plugins/timer'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxt/content',

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static' // default is 'server'
}

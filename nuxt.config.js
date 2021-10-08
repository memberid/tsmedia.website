import webpack from 'webpack'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TS Media',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js',
      },
      {
        src:
          'https://cdn.rawgit.com/robin-dela/hover-effect/master/js/hover.min.js',
        async: true,
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['vuesax/dist/vuesax.css', '~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax',
    // '@/plugins/three',
    '@/plugins/glide',
    '@/plugins/fontawesome',
    { src: '@/plugins/hoverEffect', mode: 'client' },
    { src: '@/plugins/lingallery', mode: 'client' },
    { src: '@/plugins/vuescroll', mode: 'client' },
    { src: '@/plugins/vue-dragscroll', mode: 'client' },
    '@/plugins/utils/filters/common.filter',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
    '@braid/vue-formulate/nuxt',
    '@nuxtjs/google-analytics',
  ],

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true, // Can be also an object with default options
  },

  publicRuntimeConfig: {
    baseURL: 'https://script.googleusercontent.com/a/macros/tsmedia.id',
    assetURL: 'https://ik.imagekit.io/tsmedia/static/assets',
  },
  googleAnalytics: {
    id: 'UA-209050522-1',
    // debug: {
    //   enabled: true,
    //   sendHitTask: true,
    // },
    autoTracking: {
      pageviewTemplate: (route) => {
        return {
          page: route.path,
          title: window.document.title,
          location: window.location.href,
        }
      },
    },
  },
  default: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
    },
    delete: {},
    get: {},
    head: {},
    post: {},
    put: {},
    patch: {},
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash',
      }),
    ],
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
}

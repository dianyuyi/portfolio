const pkg = require('./package')

module.exports = {
  mode: 'spa',
  css: [
    'bulma/css/bulma.css',
    '@assets/main.sass',
  ],
  build: {
    vendor: [
      '~/plugins/vue-awesome-swiper',
      '~/plugins/vue-gallery',
      '~/plugins/vue-burger-menu',
      '~/plugins/vue-headroom',
      // '~/plugins/fontawesome'
    ],
  },
  router: { base: '/portfolio/' },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Loxi portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
      { property: 'og:title', content: 'Loxi portfolio' },
      { property: 'og:description', content: '羅翕個人作品集' },
      { property: 'og:site_name', content: 'Loxi portfolio' },
      { property: 'og:locale', content: 'zh_TW' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@assets/main.sass',
    // '@fortawesome/fontawesome-svg-core/styles.css',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],
  env: {
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-awesome-swiper',
    '~/plugins/vue-gallery',
    // '~/plugins/fontawesome'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // '@nuxtjs/font-awesome'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}

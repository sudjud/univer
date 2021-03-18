export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zavgar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  ssr: true, 

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/global.css',
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    { src: '~/plugins/materialize.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config : {
          apiKey: "AIzaSyApbm-u73qgWEG5QptDsaTzCFDIFRjNBkw",
          authDomain: "toolshop-14931.firebaseapp.com",
          databaseURL: "https://toolshop-14931-default-rtdb.firebaseio.com",
          projectId: "toolshop-14931",
          storageBucket: "toolshop-14931.appspot.com",
          messagingSenderId: "44419510964",
          appId: "1:44419510964:web:b8800270fa1f5003995de1",
          measurementId: "G-B8NE7VREY3"
        },
        services: {
          auth: true
        }
      }
    ]
  ],


  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}

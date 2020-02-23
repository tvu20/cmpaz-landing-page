export default {
  mode: 'spa',
  srcDir: 'app/',

  router: {
    mode: 'history',
    // middleware: 'setCacheVersion'
  },

  loading: '~/components/Loading.vue',

  head: {
    title: 'The Urban Clinic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Best Aesthetics Clinic in Singapore'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css?family=Material+Icons'
      // }
    ],
    script: [
      {
        innerHTML: `(function(d) {
          const config = {
            kitId: \"ynp6ldv\",
            scriptTimeout: 3000,
            async: true
          };
          const h=d.documentElement; const t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout); const tk=d.createElement("script"); let f=false; const s=d.getElementsByTagName("script")[0]; let a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document)`,
        type: 'text/javascript'
      }
    ]
  },

  css: [ 
    'vuetify/dist/vuetify.min.css',
    'animate.css/animate.min.css',
    '~/assets/styles/main.styl'
  ],

  plugins: [
    '~/plugins/global-components',
    '~/plugins/svg-components',
    '~/plugins/vue-plugins',
    '~/plugins/vuetify',
    // { src: '~/plugins/instagram', ssr: false }
  ],

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    'nuxt-svg-loader',
    // ['storyblok-nuxt', {accessToken: 'NY85ETXSEUdGrQJC2NWbtgtt', cacheProvider: 'memory'}],
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-89506397-3',
    //   dev: false
    // }]
  ],

  apollo: {
    tokenName: 'token',
    // tokenExpires: 1 / 24,
    authenticationType: '',
    // includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    // errorHandler(error) {
    //   console.log(
    //     '%cError',
    //     'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
    //     error.message
    //   )
    // },
    clientConfigs: {
      default: {
        httpEndpoint: 'https://gql.aquahair.sg/'
        // httpEndpoint: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : 'https://gql.aquahair.sg/'
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: {
      icons: 'md'
    }
    // customVariables: ['~/assets/styles/vuetify.sass'],
    // theme: {
    //   dark: true,
      // themes: {
      //   dark: {
      //     primary: colors.blue.darken2,
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3
      //   }
      // }
    // }
  },

  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

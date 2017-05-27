module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ルーツ音楽診断',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: [
      '/roots-music-diagnosis/',
      '/roots-music-diagnosis/p1',
      '/roots-music-diagnosis/p2',
      '/roots-music-diagnosis/p3',
      '/roots-music-diagnosis/p4',
      '/roots-music-diagnosis/p5',
      '/roots-music-diagnosis/p6',
      '/roots-music-diagnosis/p7',
      '/roots-music-diagnosis/p8',
      '/roots-music-diagnosis/p9',
      '/roots-music-diagnosis/p10',
      '/roots-music-diagnosis/p11',
      '/roots-music-diagnosis/p12',
      '/roots-music-diagnosis/p13',
      '/roots-music-diagnosis/p14',
      '/roots-music-diagnosis/p15',
      '/roots-music-diagnosis/a1',
      '/roots-music-diagnosis/a2',
      '/roots-music-diagnosis/a3',
      '/roots-music-diagnosis/a4',
      '/roots-music-diagnosis/a5',
      '/roots-music-diagnosis/a6'
    ]
  },
  css: [
    '~assets/css/style.css'
  ]
}

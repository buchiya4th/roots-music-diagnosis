module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    base: '/roots-music-diagnosis/dist/'
  },
  // generate: {
  //   routes: [
  //     '/roots-music-diagnosis/dist/q1',
  //     '/roots-music-diagnosis/dist/q2',
  //     '/roots-music-diagnosis/dist/q3',
  //     '/roots-music-diagnosis/dist/q4',
  //     '/roots-music-diagnosis/dist/q5',
  //     '/roots-music-diagnosis/dist/q6',
  //     '/roots-music-diagnosis/dist/q7',
  //     '/roots-music-diagnosis/dist/q8',
  //     '/roots-music-diagnosis/dist/q9',
  //     '/roots-music-diagnosis/dist/q10',
  //     '/roots-music-diagnosis/dist/q11',
  //     '/roots-music-diagnosis/dist/q12',
  //     '/roots-music-diagnosis/dist/q13',
  //     '/roots-music-diagnosis/dist/q14',
  //     '/roots-music-diagnosis/dist/q15',
  //     '/roots-music-diagnosis/dist/a1',
  //     '/roots-music-diagnosis/dist/a2',
  //     '/roots-music-diagnosis/dist/a3',
  //     '/roots-music-diagnosis/dist/a4',
  //     '/roots-music-diagnosis/dist/a5',
  //     '/roots-music-diagnosis/dist/a6'
  //   ]
  // },
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
  css: [
    '~assets/css/style.css'
  ]
}

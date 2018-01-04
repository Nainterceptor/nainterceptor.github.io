module.exports = {
  build: {
    extend (config) {
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin');
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 1000,
              name: 'img/[name].[hash:7].[ext]',
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: true },
              ],
            },
          },
        ],
      },
    ],
  },
  head: {},
  loading: { color: '#588C7E' },
  manifest: {
    theme_color: '#588C7E',
  },
  css: [
    { src: '~assets/css/main.scss', lang: 'scss' },
  ],
  modules: [
    '@nuxtjs/pwa',
    'qonfucius-nuxt-fontawesome',
    ['qonfucius-nuxt-bulma', { css: false }],
  ],
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/fontawesome-free-brands',
        icons: ['faGithub', 'faTwitter', 'faLinkedin'],
      },
      {
        package: '@fortawesome/fontawesome-free-regular',
        icons: ['faEnvelope'],
      },
    ],
  },
};

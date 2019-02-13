module.exports = {
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
    ['qonfucius-nuxt-bulma', { css: false, postcss: false }],
  ],
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/free-brands-svg-icons',
        icons: ['faGithub', 'faTwitter', 'faLinkedin'],
      },
      {
        package: '@fortawesome/free-regular-svg-icons',
        icons: ['faEnvelope'],
      },
    ],
  },
};

module.exports = {
  publicPath: '/jamejirakit',
  outputDir: 'jamejirakit',

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}

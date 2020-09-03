module.exports = {
  productionSourceMap: false,
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

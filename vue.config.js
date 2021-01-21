// vue.config.js
module.exports = {
  lintOnSave: false,
  // publicPath:
  //   process.env.NODE_ENV === 'production' ? '/v3/quote-builder/' : '',
  filenameHashing: false,
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [
        {
          filename: '[name].css',
          chunkFilename: '[name].css'
        }
      ])
    }
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  }
}

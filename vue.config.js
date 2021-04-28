module.exports = {
  publicPath: './', //相対パス
  // publicPath: '/covid-app/', 
  chainWebpack: config => {
    config.plugin('html').tap(options => {
      options[0].minify = {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false,
        collapseBooleanAttributes: false,
        removeScriptTypeAttributes: false,
        //filenameHashing: false//ファイル名の後ろに乱数発生をしない
      }
      return options
    })
  }
};

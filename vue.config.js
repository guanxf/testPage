const fs = require('fs')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

const entryPath = path.join(__dirname, 'src/pages')
const views = [] // 模版数组
const pagesOpt = {}
fs.readdirSync(entryPath).forEach(view => {
  const reg = /^\./
  !reg.test(view) && views.push(view)
})
views.forEach(key => {
  pagesOpt[key] = {}
  pagesOpt[key].entry = `./src/pages/${key}/main.js`
  pagesOpt[key].template = `./public/${key}.html`
})
module.exports = {
  pages: pagesOpt,
  publicPath: './',
  productionSourceMap: false,
  // css: { // 产生单独css文件，修改css后保存不会自动刷新浏览器
  //   extract: true
  // },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'serve' ? 'cheap-module-eval-source-map' : 'none',
    optimization: {
      minimize: true
    }
  },
  devServer: {
    proxy: {
      '/yapi': {
        target: 'https://yapi.yuewen.com/mock/2054/activity/', //  ！！！ 2054 需要根据对应yapi的接口文档进行修改
        pathRewrite: { '^/yapi': '' }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('@c', path.join(__dirname, 'src/components'))
      .set('@img', path.join(__dirname, 'src/assets/img'))
    config.module
      .rule('html')
      .test(/\.(htm|html)$/)
      .use('html-withimg-loader')
      .loader('html-withimg-loader')
      .end()
    config
      .plugin('gzip-plugin')
      .use(CompressionPlugin, [{
        test: /\.js$|\.html$|\.css$/, // 匹配文件名
        threshold: 10240 // 对超过10k的数据压缩
      }])
    views.forEach(key => {
      config
        .plugin(`html-${key}`)
        .tap(args => {
          args[0].minify = {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            removeScriptTypeAttributes: true
          }
          return args
        })
    })
  }
}

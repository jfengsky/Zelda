const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const config = require('./webpack.base.config')

// 重置基本配置
config.output.publicPath = '/'
config.plugins = [

  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),

  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../index.html'),
    inject: true
  })
]

// const devClient = 'webpack-hot-middleware/client'

const devClient = './build/dev-client'

Object.keys(config.entry).forEach( (name,i) =>{
  let extras = [devClient]
  config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config
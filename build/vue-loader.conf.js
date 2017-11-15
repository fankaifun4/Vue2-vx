'use strict'
const utils = require('./utils')
const config = require('../config')
const rpx2rem = require('postcss-px2rem-dpr')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction ?
    config.build.productionSourceMap :
    config.dev.cssSourceMap


let px2config = {
    baseDpr: 2, // base device pixel ratio (default: 2)
    remUnit: 100, // rem unit value (default: 75)
    remPrecision: 10, // rem value precision (default: 6)
    forcePxComment: 'px', // force px comment (default: `px`)
    keepComment: 'no', // no transform value comment (default: `no`)
    shouldUseDprRule: function(rule) {
        // var list = ['font', 'font-size'];
        // return list.some(function(item) {
        //   return item === rule.property;
        // })
    },
    shouldIgnoreRule: function(rule) {
        return /border/.test(rule.property);
    }
}


module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    postcss: [rpx2rem(px2config)],
    cssSourceMap: sourceMapEnabled,
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}
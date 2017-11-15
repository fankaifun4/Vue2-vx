'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const px2rem = require('postcss-px2rem-dpr')
let px2Congfig = {
    baseDpr: 2,
    remUnit: 100,
    remPrecision: 10,
    forcePxComment: 'px',
    keepComment: 'no',
    shouldUseDprRule: function(rule) {
        // var list = ['font', 'font-size', 'height'];
        // return list.some(function(item) {
        //     return item === rule.property;
        // })
    },
    shouldIgnoreRule: function(rule) {
        return /border/.test(rule.property);
    }
}
module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction ?
            config.build.productionSourceMap : config.dev.cssSourceMap,
        extract: isProduction
    }),
    postcss: [
        px2rem(px2Congfig)
    ],
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}
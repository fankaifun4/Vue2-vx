// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import lib from './libs/flexlib'
// import ('./css/comm.css')
import ('./css/iconfont.scss')

// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', () => {
//         FastClick.attach(document.body)
//     }, false)
// }

Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
import Vue from 'vue'
import Router from 'vue-router'
import sendMsg from '@/components/send-msg'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/robby',
        name: 'robby',
        component: sendMsg
    }]
})
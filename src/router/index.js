import Vue from 'vue'
import Router from 'vue-router'
import listMsg from '@/pages/vsend'
import home from '@/pages/mian'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        }, {
            path: '/vx/robby',
            name: 'robby',
            component: listMsg
        },
        { path: '*', redirect: '/' }
    ]
})
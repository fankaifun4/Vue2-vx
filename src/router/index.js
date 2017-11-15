import Vue from 'vue'
import Router from 'vue-router'
import sendMsg from '@/components/send-msg'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'sendMsg',
        component: sendMsg
    }]
})
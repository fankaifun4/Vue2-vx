import Vue from 'vue'
import Router from 'vue-router'
import listMsg from '@/pages/vsend'
import home from '@/pages/mian'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/vx',
            component: home,
            children:[
                {
                    path:'home',
                    name:'homeMsg',
                    default:true,
                    component: r => require.ensure([], () => require('../pages/msg-home.vue'), 'vx')
                },
                {
                    path:'list/mail-list',
                    name:'mailList',
                    component: r => require.ensure([], () => require('@/pages/mail-list.vue'), 'vx')
                },{
                    path: 'list/find',
                    name: 'find',
                    component:  r => require.ensure([], () => require('@/components/new-file.vue'), 'vx')
                }
            ]
        },{
            path: '/vx/asend',
            name: 'asend',
            component: listMsg
        },{
            path: '/vx/detail',
            name: 'detial',
            component:  r => require.ensure([], () => require('@/pages/list-detail.vue'), 'vx')
        },
        { path: '*', redirect: '/vx/home' }
    ]
})
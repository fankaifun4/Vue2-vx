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
                    component: r => require.ensure([], () => require('@/pages/msg-home.vue'), 'vx')
                },
                {
                    path:'list/mail-list',
                    name:'mailList',
                    component: r => require.ensure([], () => require('@/pages/mail-list.vue'), 'vx')
                },{
                    path: 'list/find',
                    name: 'find',
                    component:  r => require.ensure([], () => require('@/pages/new-file.vue'), 'vx')
                },{
                    path: 'list/me',
                    name: 'me',
                    component:  r => require.ensure([], () => require('@/pages/me.vue'), 'vx')
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
        },{
            path: '/vx/yiy',
            name: 'yiy',
            component:  r => require.ensure([], () => require('@/pages/yiy.vue'), 'vx')
        },{
            path:'/vx/user/reg',
            name:'reg',
            component:r => require.ensure([], () => require('@/pages/users/reg.vue'), 'vx')
        },{
            path:'/vx/login',
            name:'login',
            component:r => require.ensure([], () => require('@/pages/users/login.vue'), 'vx')
        },
        {
            path:'/vx/404',
            name:'404',
            component:r => require.ensure([], () => require('@/pages/404.vue'), 'vx')
        },
        {
            path:'/vx/xiangce',
            name:'xiangce',
            component:r => require.ensure([], () => require('@/pages/xiangc.vue'), 'vx')
        },
         {
            path:'/vx/upload',
            name:'upload',
            component:r => require.ensure([], () => require('@/pages/upload_pic.vue'), 'vx')
        },
         {
            path:'/vx/swiper',
            name:'swiper',
            component:r => require.ensure([], () => require('@/pages/swiper.vue'), 'vx')
        },
        { path: '*', redirect: '/vx/404' }
    ]
})
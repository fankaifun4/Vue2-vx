import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main.vue'
import personList from '../components/personList.vue'
import Home from '../components/home'
import Item from "../components/item"
import Left_nav from "../components/left_nav"

Vue.use(VueRouter)

const router=new VueRouter({
	mode:'hash',
	base:__dirname,	
	routes:[
		{
			path:'/',
			name:"home",
			component:Home
		},
		{
			path:"/persons",
			name:'personsList',
			component:personList
		},{
			path:"/items/:id",
			name:"items",
			component:Item,
			children:[
				{
					path:"detail",
					component:Left_nav,
					name:"leftNav"
				}
			]
		}

	]
})

export default router

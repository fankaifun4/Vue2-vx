import Vue from 'vue'
import store from '../store/store.js'
import Router from '../routers/router.js'
import Index from '../components/index.vue'
import Store from '../store/store'

new Vue({
	el:"#app",
	store,
	router:Router,	
	render:(render)=>render(Index)
})
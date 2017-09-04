import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
	perpons:{
		username:'fankaifun4',
		pswd:"123456"
	}
}
export default new Vuex.Store({
	state,
	mutations:{
		changeUser:function(state,module){
			state.perpons.username=module			
		}
	},
	actions:{
		async ChangeUser({commit,state},module){	

			//模拟异步
			await getData()
			commit('changeUser',module);
			function getData(){
				return new Promise((resolve,reject)=>{
					setTimeout(resolve,3000,'async is changed')
				})
			}
		}
	}
})
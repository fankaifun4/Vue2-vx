import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
let state = {
    userId: "",
    userIcon: "",
    msgLog: [
        // {
        //     name:'',
        //     msg:[]
        // }
    ]
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})
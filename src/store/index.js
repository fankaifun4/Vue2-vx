import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)
let state = {
    userId: "",
    userIcon: "",
    navSelect:"homeMsg",
    //聊天记录
    msgLog: [
        // {
        //     name:'',
        //     msg:[]
        // }
    ],
    //聊天栏
    chatrecord:[]
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})
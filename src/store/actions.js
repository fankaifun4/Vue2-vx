import * as type from './mutations-type'
export default {
    setUser:function({commit},user){
        commit(type.SETUSER,user)
    },
    toMsgLog:function({commit},msgBody){
        commit(type.MSGLOG,msgBody)
    },
    insertMSG:function({commit},model){
        commit(type.INSERTMSG,model)
    },
    changeNav:function({commit},states){
    	commit(type.CHANGENAV,states)
    },
    deleteMsg:function({commit},userId){
    	commit(type.DELETEMSG,userId)
    }
}
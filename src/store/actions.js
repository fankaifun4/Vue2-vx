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
    }
}
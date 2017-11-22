import * as type from './mutations-type'

export default { 
    [type.SETUSER]:(state,userId)=>{
        state.userId=userId
    },
    [type.MSGLOG]:(state,msgBody)=>{
        state.msgLog.push(msgBody)
    },
    [type.INSERTMSG]:(state,model)=>{
        let list=state.msgLog;
        if(list.length<1) return
        for( let i=0;i<list.length;i++ ){
            if(list[i].name==model.name){
                let tlist=list[i];
                tlist.msg.push(model.msgBody)
                break;
            }
        }
    },
    [type.CHANGENAV]:(state,states)=>{
        state.navSelect=states
    },
    [type.DELETEMSG]:(state,userId)=>{
        state.msgLog.forEach((item,index)=>{
            if(item.name=userId){
                item.msg=[];
            }
        })
    }
}
<template>
  <div class="container" >
      <v-header></v-header>
      <section class="content" ref="contentBody">
        <div>
          <div :is="item.component" :icon='item.icon' :url='item.url' :msg='item.msg' :name='item.name'  v-for="(item,key) in msg" :key="key"  ></div>
        </div>
      </section>
      <v-footer @sendMsg="sendMsgs"></v-footer>
  </div>
</template>
<script>

import {mapState,mapActions} from 'vuex'
import rootMsg from './onther'
import userMsg from './user'
import vHeader from './header'
import vFooter from './footer'

export default {
  name:'vsendMsg',
  data () {
    return {
     msg:[],
     rootmsg:"",
     msgBodyId:this.$route.query.id
   }
  },
  components:{
    rootMsg,
    userMsg,
    vHeader,
    vFooter
  },
  updated(){
    this.$nextTick(function(){
        let getBody=this.$refs.contentBody
        getBody.scrollTop=getBody.scrollHeight
    })
  },
  mounted:function(){
    //设置 vuex state的userId
    this.store.dispatch('setUser','fankx')

    //检测是否有聊天记录
    if( this.msgLog.length<1 ){
      //设置初始化聊天记录
        let msgType={
          name:this.msgBodyId,
          msg:[]
        }
        this.store.dispatch('toMsgLog',msgType)

        //发送问好信息
        this.postMsg('/api','hello')
    }else{
      //获取聊天记录，如果<10则全部，否则选取10条
      let tmpMSG=this.msgLog
      for(let i=0;i<tmpMSG.length;i++){
        if(tmpMSG[i].name==this.msgBodyId){
          if(tmpMSG[i].length<=10){
            this.msg=tmpMSG[i].msg
          }else{
            this.msg=tmpMSG[i].msg.slice(-10)
          }
          break
        }
      }
    }
  },
  computed:{
    //映射 state: userId,msgLog,userIcon 到this
    ...mapState(['userId','msgLog','userIcon']),

    //映射 actions: setUser,toMsgLog 到 this
    ...mapActions(['setUser','toMsgLog','insertMSG']),

    //将 this.$store 计算成 this.store
    store(){
      return this.$store
    }
  },
  methods:{
    //发送消息
      sendMsgs(model){
        this.userMsgBody(model,this.msgBodyId)
        this.postMsg('/api',model)
      },

    //异步函数 发送消息并获取返回消息渲染
      async postMsg(url,msg){
         let res = await this.send(url,msg)
         this.roobyMsgBody(res,this.msgBodyId)
      },

    //发送请求头和事件消息
      send(url,msg){
        return this.$http.post(url,{
           key:"91fac65ebd2d4ae39f57b5af071326ae",
           info:msg||'',
           userId:this.userId
        }).then(res=>{
          if(res.status){
             return res.data
          }
        })
      },

      //动态绑定组件
      //并且插入this.msg到vuex state
      userMsgBody(msg,name){
        let msgBody={
          component:"user-msg",
          msg:msg,
          icon:this.$route.query.userIcon,
          name:this.userId
        }
        this.msg.push(msgBody)
        this.store.dispatch('insertMSG',{name,msgBody})
      },

      //机器人返回信息
      //并将消息存入vuex state
      roobyMsgBody(res,name){
        let msgBody={
          component:'root-msg',
          msg:res.text,
          url:res.url||"",
          icon:this.$route.query.icon,
          name:'robby'
         }
         this.msg.push(msgBody)
         this.store.dispatch('insertMSG',{name,msgBody})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
    *:focus {outline: none;} 
    .container{
      overflow: hidden;
      word-wrap: break-word;
      width:100%;
      height:100%;
      background:#efefef;
      box-sizing: border-box;
    }
    .content{
        width:100%;
        box-sizing: border-box;
        padding:30px 15px;
        position: absolute;
        top:120px;
        bottom:120px;
        overflow-y: scroll;
        overflow-x:hidden;
        background:#efefef;
    }
</style>

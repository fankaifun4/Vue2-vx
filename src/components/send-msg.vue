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
     msgBodyId:this.$route.params.id
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
    this.store.dispatch('setUser','fankx')
    if( this.msgLog.length<1 ){
        let msgType={
          name:this.msgBodyId,
          msg:[]
        }
        this.store.dispatch('toMsgLog',msgType)
        this.postMsg('/api','hello');
    }else{
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
    ...mapState(['userId','msgLog','userIcon']),
    ...mapActions(['setUser','toMsgLog','insertMSG']),
    store(){
      return this.$store
    },
    anotherIcon(){
      let id=this.$route.query.id
      return 'pic_'+id
    },
    userIcon(){
      let id=this.userId
      return 'user_'+id
    }
  },
  methods:{
      sendMsgs(model){
        this.userMsgBody(model,this.msgBodyId)
        this.postMsg('/api',model)
      },
      async postMsg(url,msg){
         let res = await this.send(url,msg)
         this.roobyMsgBody(res,this.msgBodyId)
      },
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
      userMsgBody(msg,name){
        let msgBody={
          component:"user-msg",
          msg:msg,
          icon:this.userIcon,
          name:this.userId
        }
        this.msg.push(msgBody)
        this.store.dispatch('insertMSG',{name,msgBody})
      },
      roobyMsgBody(res,name){
        let msgBody={
          component:'root-msg',
          msg:res.text,
          url:res.url||"",
          icon:this.anotherIcon,
          name:'robby'
         }
         this.msg.push(msgBody)
         this.store.dispatch('insertMSG',{name,msgBody})
      }
  },
  watch:{
   
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

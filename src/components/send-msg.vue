<template>
  <div class="container" >
      <v-header></v-header>
      <section class="content" ref="contentBody">
        <div :is="item.component" :icon='item.icon' :msg='item.msg' :name='item.name'  v-for="(item,key) in msg" :key="key"  ></div>
      </section>
      <v-footer @sendMsg="sendMsgs"></v-footer>
  </div>
</template>
<script>
import rootMsg from './onther'
import userMsg from './user'
import vHeader from './header'
import vFooter from './footer'

export default {
  name: 'HelloWorld',
  data () {
    return {
     msg:[],
     rootmsg:""
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
    
  },
  computed:{
  },
  methods:{
      sendMsgs(model){
          this.msg.push({
            component:"user-msg",
            msg:model,
            icon:'',
            name:''
          })
          this.$http.post('/api',{
              key:"91fac65ebd2d4ae39f57b5af071326ae",
              info:model,
              userid:'user'
          }).then((res)=>{
              
              if(res.status==200){
                  this.msg.push({
                    component:'root-msg',
                    msg:res.data.text,
                    icon:'',
                    name:'rooter'
                  })
                 
              }
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
    
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

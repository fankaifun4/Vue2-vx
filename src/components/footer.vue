<template>
  <footer class="footer">
      <input class="msg-box" v-model="msg" ref="input" @keyup.enter="sendMsg" ></input>
      <div class="iconfont  icon-xiaolian" @click="sendMsg"></div>
      <div class="iconfont  icon-add_c" v-show="!isSend" @click="sendMsg"></div>
      <div class="send-msg" v-show="isSend" @click="sendMsg">发送</div>
  </footer>
</template>
<script>
    export default {
        name:"vFooter",
        data(){
            return {
                msg:"",
                isSend:false
            }
        },
        mounted(){
        },
        methods:{
            sendMsg(){
                if( this.msg.length==0||this.msg=='' ) return
                this.$emit('sendMsg',this.msg)
                this.msg="";
                this.$refs.input.focus()
            }
        },
        watch:{
            msg:function(){
              if(this.msg.length>0||this.msg!=''){
                  this.isSend=true
              }else{
                  this.isSend=false;
              }
            }
        }
    }
</script>
<style lang="scss" scoped>
    input:focus {    outline:none; }
    button:focus{ outline:none }
    .icon-add_c{
        font-size:80px;
        flex:.1;
        transition:all 1;
    }
    .icon-xiaolian{
        font-size:70px;
        margin:0 30px;

    }
    .footer{
        height: 120px;
        position: absolute;
        bottom:0;
        width:100%;
        box-sizing: border-box;
        padding:3px 10px;
        background:#efefef;
        border-top:1px solid #999;
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height:1;
        .msg-box{
            background:#efefef;
            border:0;
            border-bottom:1px solid #096;
            height: 90px;
            font-size: 50px;
            flex:1;
            margin:0 10px 0 5px;;
            text-align:left;
        }
        .send-msg{
            border-radius: 3px;
            background:#22a820;
            padding:10px 20px;
            color:#fff;
            width:150px;
            height:100px;
            box-sizing: border-box;
            line-height:2;
            font-size:42px;
            transition:all 1;
        }
    }
</style>

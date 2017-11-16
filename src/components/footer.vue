<template>
  <footer class="footer">
      <input class="msg-box" v-model="msg" ref="input" @keyup.enter="sendMsg" ></input>
      <div class="iconfont  icon-xiaolian" @click="sendMsg"></div>
      <div class="iconfont  icon-add_c" @click="sendMsg"></div>
  </footer>
</template>
<script>
    export default {
        name:"vFooter",
        data(){
            return {
                msg:""
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
        }
    }
</script>
<style lang="scss" scoped>
    .icon-add_c{
        font-size:80px;
        flex:.1;
    }
    .icon-xiaolian{
        font-size:70px;
    }
    .footer{
        height: 120px;
        position: absolute;
        bottom:0;
        width:100%;
        box-sizing: border-box;
        padding:3px 10px;
        background:#aaa;
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height:1;
        .msg-box{
            display:inline-block;
            resize: none;
            border:1px solid #ccc;
            border-radius: 3px;
            height: 90px;
            font-size: 75px;
            flex:0.8;
        }
        .send-msg{
            border:1px solid #c90;
            border-radius: 3px;
            background:#009;
            padding:10px 20px;
            color:#fff;
            width:120px;
            height:100px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }
</style>

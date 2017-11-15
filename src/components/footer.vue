<template>
  <footer class="footer">
      <textarea rows="1" cols="14" class="msg-box" v-model="msg" ref="input" ></textarea>
      <div class="send-msg" @click="sendMsg">发送</div>
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
                this.$emit('sendMsg',this.msg)
                this.msg="";
                this.$refs.input.focus()
            }
        }
    }
</script>
<style lang="scss" scoped>
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

        .msg-box{
            display:inline-block;
            resize: none;
            border:1px solid #ccc;
            border-radius: 3px;
            height: 90px;
            font-size: 75px;
            
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

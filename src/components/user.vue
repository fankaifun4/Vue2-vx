<template>
  <div class="msg-wrap-user">
          <div class="msg-user">
              <div class="msg-content">{{userMsgs.msg}}</div>
              <div class="user-ji"></div>
          </div>
          <div class="user-icon"><img :src="userMsgs.icon" alt=""></div>
      </div>
</template>
<script>
export default {
    name:"vuserMsg",
    props:['icon','msg','name'],
    data(){
        return {
            userMsgs:{
                icon:'',
                msg:'',
                name:''
            },
        }
    },
    mounted(){
        this.userMsgs.msg=this.msg
        this.userMsgs.name=this.name
        this.userMsgs.icon=require('../assets/imgs/'+this.icon+'.'+'jpg')
    }
}
</script>
<style lang="scss" scoped>
.msg-wrap-user{
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;
      font-size:42px;
      line-height:1.5;
      .user-icon{
        width: 90px;
        height: 90px;
        overflow: hidden;
        border:1px solid #ccc;
        background:transparent;
        img {
            display:block;
            width:100%;
            height:100%;
        }
      }
      .msg-user{
        max-width: 70%;
        overflow: hidden;
        display: flex;
        .user-ji{
          width:0;
          height:0;
          border:10px solid transparent;
          border-left:10px solid #22a820;
          position: relative;
          left:-5px;
          top:25px;
        }
        .msg-content{
          background:#fff;
          border:1px solid #ccc;
          padding:15px 20px;
          border-radius: 4px;
          background:#22a820;
          text-align:left;
        }
      }
    }
</style>

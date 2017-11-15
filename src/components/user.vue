<template>
  <div class="msg-wrap-user">
          <div class="msg-user">
              <div class="msg-content">{{userMsgs.msg}}</div>
              <div class="user-ji"></div>
          </div>
          <div class="user-icon"></div>
      </div>
</template>
<script>
export default {
    name:"userMsg",
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
        this.userMsgs.icon=this.icon
    }
}
</script>
<style lang="scss" scoped>
.msg-wrap-user{
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;
      .user-icon{
        width: 90px;
        height: 90px;
        overflow: hidden;
        border:1px solid #ccc;
        background:#fff;
      }
      .msg-user{
        max-width: 70%;
        overflow: hidden;
        display: flex;
        .user-ji{
          width: 30px;
          height: 30px;
          background:#22a820;
          border:0;
          border-right:1px solid #22a820;
          border-bottom:1px solid #22a820;
          position: relative; 
          transform: rotate(-45deg);
          top:33px;
          left:-20px;
        }
        .msg-content{
          background:#fff;
          border:1px solid #ccc;
          padding:15px 20px;
          border-radius: 4px;
          background:#22a820;
        }
      }
    }
</style>

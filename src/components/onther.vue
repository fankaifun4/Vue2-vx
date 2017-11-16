 <template>
    <div class="msg-wrap-onther">
        <div class="onther-icon"></div>
        <div class="msg-other">
            <div class="onther-ji"></div>
            <div class="msg-content">{{this.msgs.msg}}</div>
        </div>
    </div>
 </template>
 <script>
     export default {
         name:"rootMsg",
         props:['icon','msg','name'],
         data(){
             return{
                msgs:{
                    icon:'',
                    msg:'',
                    name:''
                }, 
             }
         },
         mounted(){
             this.msgs.msg=this.msg
             this.msgs.name=this.name
             this.msgs.icon=this.icon
         }
     }
 </script>
 <style scoped lang="scss">
 .msg-wrap-onther{
    display: flex;
    justify-content: flex-start;
    width:70%;
    margin-bottom:30px;
    font-size:42px;
    line-height:1.5;
    .onther-icon{
        width: 90px;
        height: 90px;
        overflow: hidden;
        border:1px solid #ccc;
        background:#fff;
    }
    .msg-other{
        flex:1;
        overflow: hidden;
        display: flex;
        .onther-ji{
        width:25px;
        height:25px;   
        background:#fff;
        border-left:1px solid #ccc;
        border-top:1px solid #ccc;
        position: relative; 
        top:32px;
        left:13px;
        transform:rotate(-45deg)
        }
        .msg-content{
        background:#fff;
        border:1px solid #ccc;
        padding:15px 20px;
        border-radius: 4px;
        text-align:left;
        max-width:80%;
        }
    }
}
 </style>
 
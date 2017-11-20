 <template>
    <div class="msg-wrap-onther">
        <div class="onther-icon"><img :src="msgs.icon" alt=""></div>
        <div class="msg-other">
            <div class="onther-ji"></div>
            <div class="msg-content">{{msgs.msg}}<a :href='msgs.url'>{{msgs.url}}</a></div>
        </div>
    </div>
 </template>
 <script>
     export default {
         name:"vonther",
         props:['icon','msg','name','url'],
         data(){
             return{
                msgs:{
                    icon:'',
                    msg:'',
                    name:'',
                    url:''
                }, 
             }
         },
         mounted(){
             let icon=this.icon+'.'+'png'
             this.msgs.msg=this.msg
             this.msgs.name=this.name
             this.msgs.icon=require('../assets/imgs/'+icon)
             this.msgs.url=this.url
            
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
        background:transparent;
        img{
            display:block;
            width:100%;
            height:100%;
        }
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
 
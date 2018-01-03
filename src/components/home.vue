<template>
    <div class="home-container">
        <div class="links" v-for="(item,key) in routerLinks" :key="key" @click="goPath(item)">
            <img :src="item.icon" alt="">
            <div class="link-content">
                <div class="item-name">{{item.name}}</div>
                <div class="item-describe">{{item.describe}}</div>
            </div>
            <time class="time">{{item.time}}</time>
        </div>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    import {userInfo} from '@/config/middle'
    export default {
        name:'vhome',
        data(){
            return {
                //首页聊天项目数据设置
                routerLinks:[
                    {
                        name:'图灵机器人',
                        path:'/vx/asend',
                        detail:'/vx/detail',
                        icon:require('../assets/imgs/pic_TLrobby.png'),
                        describe:"一个有趣的智障机器人",
                        time:(new Date().getHours())+":"+(new Date().getMinutes()),
                        id:'tuling'
                    }
                ]
            }
        },
        mounted(){
            //设置用户信息
            this.getUserInfo({userName:'fankx'})
        },
        computed:{
            //映射 state: userId,msgLog,userIcon 到this
            ...mapState(['userId','msgLog','userIcon','chatrecord']),

            //映射 actions: setUser,toMsgLog 到 this
            ...mapActions(['setUser','toMsgLog']),

            //将 this.$store 计算成 this.store
            store(){
                return this.$store
            }
        },
        components:{
           
        },
        methods:{
            // 路由跳转
            goPath(item){
                this.$router.push({
                    path:item.path,
                    query:{ ...item }
                })
            },
            async getUserInfo(user){
              let res=await userInfo(user)
              console.log(res)
            }
        }
    }
</script>
<style scoped lang='scss'>
.home-container{
    position:absolute;
    top:120px;
    bottom:135px;
    left:0;
    right:0;
    overflow-x:hidden;
    overflow-y:auto;
}
.links{
    padding:20px 20px;
    box-sizing: border-box;
    display:flex;
    border-bottom:1px solid #ccc;
    border-right:0;
    border-left:0;
    justify-content:space-start;
    align-items:center;
    background:#fff;
    img{
        width:100px;
        height:100px;
    }
    .time{
        text-align:right;
    }
    .link-content{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:space-start;
        text-align:left;
        overflow:hidden;
        text-overflow:ellipsis ;
        white-space: nowrap;
        margin-left:30px;
        .item-name {
            overflow:hidden;
            text-overflow:ellipsis ;
            white-space: nowrap;
            font-size:40px;
        }
        .item-describe{
            overflow:hidden;
            text-overflow:ellipsis ;
            white-space: nowrap;
            font-size:32px;
            color:#999;
        }
    }
}
</style>
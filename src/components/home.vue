<template>
    <section>
         <vh-header/>
        <div class="links" v-for="(item,key) in routerLinks" :key="key" @click="goPath(item.path)">
            <img :src="item.icon" alt="">
            <div class="link-content">
                <div class="item-name">{{item.name}}</div>
                <div class="item-describe">{{item.describe}}</div>
            </div>
            <time class="time">{{item.time}}</time>
        </div>
    </section>
</template>
<script>
    import vhHeader from './homeHeader'
    export default {
        data(){
            return {
                routerLinks:[
                    {
                        name:'图灵机器人',
                        path:'/robby',
                        icon:require('../assets/imgs/c.png'),
                        describe:"一个有趣的智障机器人",
                        time:"17:08"
                    }
                ]
            }
        },
        mounted(){

        },
        components:{
            vhHeader
        },
        methods:{
            goPath(url){
                this.$router.push(url)
            }
        }
    }
</script>
<style scoped lang='scss'>
.links{
    padding:20px 20px;
    box-sizing: border-box;
    display:flex;
    border:1px solid #ccc;
    border-right:0;
    border-left:0;
    justify-content:space-start;
    align-items:center;
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
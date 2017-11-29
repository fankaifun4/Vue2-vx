<template>
  <header class="header">
    <div class="titles"> 
        <div @click="$router.go(-1)" class="iconfont icon-prev"></div>
        <slot>迷你微信</slot> 
    </div>
    <div class="find-set">
        <div class="find iconfont icon-tubiao-copy" ></div>
        <div class="set iconfont icon-jia1"></div>
    </div>
  </header>
</template>
<script>
    export default {
        name:"vHeader",
        data(){
            return {}
        },
        mounted(){
            
        }
    }
</script>
<style lang="scss" scoped>
    .header{
        height: 120px;
        background:#333;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color:#fff;
        .icon-prev{
            margin:0 30px;
        }
        .titles{
            font-size:40px;
            color:#fff;
            margin-left:10px;
            display:flex;
            align-items:center;
        }
        .find-set{
            display:flex;

            .find{
                font-size:40px;
                margin:0 30px;
            }
            .set{
                font-size:40px;
                margin-right:30px;
            }
        }
       
    }
    
</style>

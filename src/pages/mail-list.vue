<template>
	<section class='mail-list-content'>
		<div class='link-title' v-if="list.gzh.length>0">
			公众号
		</div>
		<div class='links' v-for="(item,key) in list.gzh" :key="key" @click="goPath(item)" >
			<img :src="item.icon" :alt="item.describe">
            <div class="link-content">
                <div class="item-name">{{item.name}}</div>
            </div>
		</div>
		<div class='link-title'>
			联系人
		</div>
		<div class='links' v-for="(item,key) in list.private" :key="key" @click="goPath(item)" >
			<img :src="item.icon" :alt="item.describe">
            <div class="link-content">
                <div class="item-name">{{item.name}}</div>
            </div>
		</div>
	</section>
</template>
<script>
	export default {
		data(){
			return {
				list:{
					gzh:[

					],
					private:[
						{
	                        name:'图灵机器人',
	                        detail:'/vx/detail',
	                        path:'/vx/asend',
	                        icon:'static/imgs/pic_TLrobby.png',
	                        describe:"一个有趣的智障机器人",
	                        phone:'132131231231',
	                        address:'',
	                        id:'tuling'
                    	},{
	                        name:'小熊猫',
	                        detail:'/vx/detail',
	                        path:'/vx/asend',
	                        icon:'static/imgs/pic_a.jpg',
	                        describe:"一个有趣的智障机器人",
	                        phone:'132131231231',
	                        address:'',
	                        id:'xiaoxiongm'
                    	},{
	                        name:'小白兔',
	                        detail:'/vx/detail',
	                        path:'/vx/asend',
	                        icon:'static/imgs/pic_b.jpg',
	                        describe:"一个有趣的智障机器人",
	                        phone:'132131231231',
	                        address:'',
	                        id:'xiaobaitu'
                    	},{
	                        name:'小胖猪',
	                        detail:'/vx/detail',
	                        path:'/vx/asend',
	                        icon:'static/imgs/pic_e.jpg',
	                        describe:"一个有趣的智障机器人",
	                        phone:'132131231231',
	                        address:'',
	                        id:'xiaopangzhu'
                    	},{
	                        name:'小糊涂神',
	                        detail:'/vx/detail',
	                        path:'/vx/asend',
	                        icon:'static/imgs/pic_a.jpg',
	                        describe:"一个有趣的智障机器人",
	                        phone:'132131231231',
	                        address:'' ,
	                        id:'xiaohutushen'
                    	},{
	                        name:'七个小矮人',
	                        detail:'/vx/detail',
	                        path:'/vx/asend',
	                        icon:'static/imgs/pic_b.jpg',
	                        describe:"一个有趣的智障机器人",
	                        phone:'132131231231',
	                        address:'' ,
	                        id:'qigexiaoairen'
                    	},{
	                        name:'人生得意须尽欢',
	                        detail:'/vx/detail',
	                        path:'/vx/asend',
	                        icon:'static/imgs/pic_e.jpg',
	                        describe:"一个有趣的智障机器人",
	                        phone:'132131231231',
	                        address:'' ,
	                        id:'rensdyxjh'
                    	}
					]
				}
			}
		},
		computed:{

		},
		mounted(){

		},
		methods:{
			goPath(item){
                this.$router.push({
            		path:item.detail,
            		query:{...item,userIcon:'/static/imgs/user_fankx.jpg'}
            	})
			}
		}
	}
</script>
<style scoped lang='scss'>
.mail-list-content{
	position:absolute;
	top:120px;
	bottom:130px;
	left:0;
	right:0;
	overflow-y:auto;
	overflow-x:hidden;
}
.link-title{
	text-align: left;
	padding:15px;
	background:#efefef;
	font-size:35px;
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
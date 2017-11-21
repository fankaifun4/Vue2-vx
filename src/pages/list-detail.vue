<template>
	<div>
		<prev-header/>
		<div class="detail-container">
			<div class='tap-cont'>
				<div class='cont-top'>
					<img :src="curInfo.icon" alt="">
					<div class='space-top'>
						<div class='blod'>{{curInfo.name}}</div>
						<div><label class='label'>电话号码：</label><span class='phone'>{{ curInfo.phone }}	</span></div>
					</div>
				</div>
			</div>
			<div class='tap-cont'>
				<div class='address'><span>地区：</span> <span>{{curInfo.address}}</span> </div>
				<div class='xiangc'>
					<div>个人相册：</div>
					<div class='pics'></div> 
				</div>
				<div class='more'>更多</div>
			</div>
			<div class='send-msg' @click="sendMsg">
				发送消息
			</div>
		</div>
	</div>
</template>
<script>
	import prevHeader from '@/components/prev-header'
	export default {
		data(){
			return {
				curInfo:this.$route.query
			}
		},
		components:{
			prevHeader,
		},
		mounted(){
			
		},
		comupted:{
		
		},
		methods:{
			sendMsg(){
				 this.$router.push({
            		name:'asend',
            		query:{...this.curInfo,userIcon:'static/imgs/user_fankx.jpg'}
            	})
			}
		}
	}
</script>
<style scoped lang='scss'>
	.blod{
		font-weight: 700;
	}
	.detail-container{
		position: absolute;
		top:120px;
		bottom:0;
		left:0;
		right:0;
		overflow:auto;
		overflow-x:hidden;
		background:#efefef;
	}
	.tap-cont{
		background:#fff;
		margin:20px 0;
		padding:0 20px;
		font-size:50px;
		.cont-top{
			display:flex;
			justify-content:space-start;
			padding:20px;
			font-size:52px;
			>img{
				width:150px;
				height:150px;
				display:block;
			}
			.space-top{
				text-align: left;
				display: flex;
				justify-content:center;
				flex-direction:column;
				margin-left:50px;
				.label{
					font-size:40px;
				}
				.phone{
					color:#090;
					font-size:36px;
				}
			}
		}
		.address{
			text-align: left;
			padding:20px 0;
			box-sizing:border-box;
			overflow:hidden;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width:100%;
			border-bottom:1px solid #ccc;
		}
		.more{
			text-align: left;
			font-size:50px;
			padding:20px 0;
		}
		.xiangc{
			display:flex;
			padding:20px 0;
			height:220px;
			justify-content:space-start;
			align-items:center;
			border-bottom:1px solid #ccc;
			.pics{
				flex:1;
				height:100%;
			}
		}
	}
	.send-msg{
		padding:30px;
		background:#090;
		color:#fff;
		border-radius: 5px;
		font-size:50px;
		margin:20px;
	}
</style>
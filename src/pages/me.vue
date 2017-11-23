<template>
	<section class="container">
		<div class="find-list">
			<div class="title">
				<img :src="userPic[0]" class='pic-user' alt="" ></img>
				<div class="font">
					<div class='name'>
						小胡子叔叔
					</div>
					<div class='code'>
						微信号:xxxxooo
					</div>
				</div>
				<img :src="userPic[0]" class="user-pic" alt="" />
			</div>
			
		</div>
		<div class="find-list">
			<div class="title bd-b1">
				<div class='iconfont  icon-guanwangicon52  tub' alt="" ></div>
				<div class="font">钱包</div>
			</div>
		
			<div class="title  bd-b1">
				<div class='iconfont icon-add_c tub' alt="" ></div>
				<div class="font">收藏</div>
			</div>
	
			<div class="title  bd-b1">
				<div class='iconfont icon-iconfontcollectionf tub' alt="" ></div>
				<div class="font">相册</div>
			</div>
			<div class="title  bd-b1">
				<div class='iconfont icon-iconfontlikefill tub' alt="" ></div>
				<div class="font">卡包</div>
			</div>
			<div class="title ">
				<div class='iconfont icon-qipao tub' alt="" ></div>
				<div class="font">表情包</div>
			</div>
		</div>
		<div class="find-list">
			
			<div class="title">
				<div class='iconfont icon-iconfont tub' alt="" ></div>
				<div class="font">设置</div>
				<img :src="userPic[0]" class="user-pic" alt="" />
			</div>
		</div>
	</section>
</template>

<script>
	export default {

		data(){
			return {
				userPic:[
					'../static/imgs/user_fankx.jpg'
				]
			}
		},
		mounted(){
			
		},
		computed:{
			
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.bd-b1{
		border-bottom: 1px solid #ccc;
	}
	
	.find-list{
		display:flex;
		padding:0 30px;
		margin:30px 0;
		flex-direction:column;
		background:#fff;
		font-size:40px;
		.title{
			display:flex;
			justify-content:spac-start;
			align-items:center;
			padding:40px 20px;
		}
		.tub{
			font-size: 60px;
			color:#f20;
		}	
		.font{
			flex:1;
			text-align: left;
			margin-left: 40px;
			display:flex;
			flex-direction:column;
			.name{
				font-size:50px;
				font-weight: 700;
			}
			.code{
				color:#666;
				font-size: 42px;
			}
		}
		.user-pic{
			width:70px;
			height:70px;
		}
		.pic-user{
			width:130px;
			height:130px;
			display: block;
		}
	}
</style>
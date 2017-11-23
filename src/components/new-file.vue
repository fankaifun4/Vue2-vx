<template>
	<section class="container">
		<div class="find-list">
			<div class="title pd0">
				<div class='iconfont icon-qipaotub' alt="" ></div>
				<div class="font">朋友圈</div>
				<img :src="userPic[0]" class="user-pic" alt="" />
			</div>
			
		</div>
		<div class="find-list">
			<div class="title bd-b1">
				<div class='iconfont  icon-guanwangicon52  tub' alt="" ></div>
				<div class="font">扫一扫</div>
			</div>
		
			<div class="title">
				<div class='iconfont icon-iconcopy tub' alt="" ></div>
				<div class="font">摇一摇</div>
			</div>
		</div>
		<div class="find-list">
			<div class="title">
				<div class='iconfont icon-iconfontcollectionf tub' alt="" ></div>
				<div class="font">附近的人</div>
			</div>
		</div>
		<div class="find-list">
			<div class="title  bd-b1">
				<div class='iconfont icon-iconfontlikefill tub' alt="" ></div>
				<div class="font">购物</div>
			</div>
			<div class="title">
				<div class='iconfont icon-iconfont tub' alt="" ></div>
				<div class="font">游戏</div>
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
	.pd0{
		padding: 0 !important;
	}
	.find-list{
		display:flex;
		padding:25px 25px 25px 40px;
		margin:30px 0;
		flex-direction:column;
		background:#fff;
		font-size:40px;
		.title{
			display:flex;
			justify-content:spac-start;
			align-items:center;
			padding:20px 0;
		}
		.tub{
			font-size: 60px;
			color:#f20;
		}	
		.font{
			flex:1;
			text-align: left;
			margin-left: 40px;
		}
		.user-pic{
			width:50px;
			height:50px;
		}
	}
</style>
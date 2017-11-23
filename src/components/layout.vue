<template>
	<div class="layout-container" v-show="isShow">
		<div class="layout-wrapper">
			<div class="layer-content">
				<div class='layer-header'>
					<div class="iconfont icon-laba1"></div>
					<slot class='tips' name='layout-head'>警告 !</slot>
				</div>
				<div class="layer-body">
					<div class="layer-txt">
						<slot name="layout-cont">这是警告</slot>
					</div>
				</div>
				<div class='layer-controller'>
					<div class='ok' @click="setTrue">
						确定
					</div>
					<div class='cancel' @click="cancel">
						取消
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['pisShow','psetTrue','closeLayout'],
		data(){
			return{
				isShow:this.pisShow||false
			}
		},
		mounted(){

		},
		methods:{
			setTrue(){
				this.$emit('psetTrue')
			},
			cancel(){
				this.$emit('closeLayout')
			}
		},
		watch:{
			'pisShow'(){
				this.isShow=this.pisShow
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.layout-container{
		position:absolute;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow:hidden;
		.layout-wrapper{
			position:relative;
			background:rgba(0,0,0,.2);
			width:100%;
			height:100%;
			.layer-content{
				background:#fff;
				box-shadow: 0 5px 20px rgba(0,0,0,.5);
				width:80%;
				height:400px;
				border-radius: 5px;
				position:absolute;
				left:0;
				right:0;
				top: 0;
				bottom: 0;
				margin:auto;
				overflow: hidden;
			}
			.layer-header{
				background:#22A820;
				display:flex;
				justify-content: space-start;
				align-items: center;
				padding:25px 0 25px 30px;
				color:#fff;
				>div{
					margin-right: 20px;
					font-size: 42px;
				}
			}
			.layer-body{
				height:200px;
				overflow-y:auto;
				overflow-x:hidden;
				.layer-txt{
					padding:25px;
					font-size:46px;
					text-align: left;
				}
			}
			.layer-controller{
				display:flex;
				justify-content:center;
				align-items:center;
				>div{
					height:40px;
					font-size: 40px;
					text-align: center;
					flex:1;
					margin:0 20px;
					height:70px;
					border-radius: 5px;
					display:flex;
					justify-content:center;
					align-items:center;
				}
				.ok{
					background:#f20;
					color:#fff;

				}
				.cancel{
					background:#fff;
					color:#333;
					border:1px solid #ccc;
				}
			}
		}
	}
	
</style>
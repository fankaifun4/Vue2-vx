<template>
	<section class="leftNav" @click="hiddens">
		<div class="left_list">
			<div class="top1">
				<h1>this is the log</h1>
			</div>
			
			<div :class="{'is-active': isTo,'is-hide':isHide}">
				<ul>
					<li>{{item.id}}</li>
					<li>{{item.describe}}</li>
					<li>{{item.name}}</li>
					<li>{{item.num}}</li>
					<li>{{item.price}}</li>
					<li>{{item.residual}}</li>
				</ul>
			</div>
			
		</div>		
	</section>
</template>
<script>
	export default{
		data(){
			return{
				isTo:false,
				isHide:true			
			}
		},
		props:['detail'],
		methods:{
			hiddens:function(e){			
				this.$router.go(-1)
			}
		},
		mounted(){
			var _this=this;
			setTimeout(function(){ _this.isTo=true } ,100)
		},
		computed:{
			item:function(){
				return this.$props.detail
			}
		}
	}
</script>
<style scoped>
	.leftNav{
		position: absolute;
		left:0;
		bottom: 0;
		top:0;
		right:0;
		background-color: transparent;
	}
	.left_list{
		width:100%;
		position: relative;
		background:transparent;
		height: 100%;
	}
	.is-hide{
		width:80%;
		background: #888;
		position: absolute;
		top: 50px;
		left: -80%;
		bottom: 0;
		transition: all .5s;
		overflow: hidden;
	}
	.top1{
		background: #ccc;
		height:50px;
		width:100%;
	}
	.is-hide>ul>li{
		border-bottom:1px solid #c00;
		padding:.3rem;
		color:#fff;
	}
	.is-active{
		width:80%;
		left:0;
		transition: all .5s;
	}
	
</style>
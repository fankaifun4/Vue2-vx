<template>
	<div class='nav-wrap'>
		<ul class='nav'>
			<li @click="goPath('/vx/home','homeMsg')" >
				<p class='iconfont icon-qipao' :class='{"on":cur=="homeMsg"}' ></p>
				<p class='icondes' :class='{"on":cur=="homeMsg"}'>微信</p>
			</li>
			<li  @click="goPath('/vx/list/mail-list','mailList')">
				<p class='iconfont icon-tongxunlu1' :class='{"on":cur=="mailList"}'></p>
				<p class='icondes' :class='{"on":cur=="mailList"}'>通讯录</p>
			</li>
			<li  @click="goPath('/vx/list/find','find')">
				<p class='iconfont icon-iconcopy' :class='{"on":cur=="find"}'></p>
				<p class='icondes' :class='{"on":cur=="find"}'>发现</p>
			</li>
			<li  @click="goPath('/vx/list/me','me')">
				<p class='iconfont icon-iconfontyonghu' :class='{"on":cur=="me"}'></p>
				<p class='icondes' :class='{"on":cur=="me"}'>我</p>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['changePath','states'],
		data(){
			return {
				cur:'homeMsg'
			}
		},
		mounted(){
			let states=this.$store.state.navSelect
			this.cur=states;
		},
		computed:{
			navSelect(){
				return this.$store.state.navSelect
			}
		},
		methods:{
			goPath(url,states){
				this.$emit('changePath',url,states)
			}
		},
		watch:{
			navSelect(){
				let states=this.navSelect;
				this.cur=states;
			}
		}
	}
</script>
<style scoped lang='scss'>
	.nav-wrap{
		position:absolute;
		bottom:0;
		left:0;
		right:0;
		height:140px;		
		border-top:1px solid #ccc;
		box-sizing:border-box;
		.nav{
			display:flex;
			height:130px;
			justify-content:space-around;
			align-items:center;
			list-style: none;
			>li .iconfont{
				font-size:46px;
				color:#999;
			}
			>li .icondes{
				font-size:32px;
				color:#999;
			}
			>li .on{
				color:#f90;
			}
		}
	}
</style>
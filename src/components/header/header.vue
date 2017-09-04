<template>
	<header>
		<h4 class="left font-b">VUE.Shop</h4>
		<section class="left mg-l-10">
			<span>{{user.username}}</span>
		</section>
		<h4 class="right"><span @click="changeStore">修改</span>| <span @click="asyncChangeUser">异步修改</span></h4>
	</header>
</template>
<script>
	export default{
		data(){
			return{}
		},
		computed:{
			user:function(){
				return this.$store.state.perpons
			}
		},
		mounted(){
			console.log(this.$store.state.perpons)
		},
		methods:{
			changeStore:function(){
				this.$store.commit('changeUser','this is changed User')
			},
			asyncChangeUser:function(){				
				this.$store.dispatch('ChangeUser','async is changed')
			}
		}
	}
</script>
<style scoped lang='scss'>
	@import '../../style/comm';
	header{		
		overflow:hidden;
		background:#f90;
		padding:.3rem;
		.mg-l-10{
			margin-left:.5rem
		}
	}
</style>
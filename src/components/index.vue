<template>
	<div>
		<header-top></header-top>
		<router-view></router-view>
	</div>
</template>
<script> 
import headerTop from './header/header'
import getData from '../service/getData'


export default{
	name:'Index',
	props:['isHome'],
	components:{
		headerTop
	}
}
</script>
<style lang='scss'>
	@import '../style/comm';
</style>
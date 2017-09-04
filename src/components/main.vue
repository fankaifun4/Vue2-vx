<template>
	<div class="main">		
		<router-link to="/persons" class="to-link">去名单编辑</router-link>
		<div class="main-input-wrap"> 
			<label> Name: </label>
			<input type="text" class="mainInput" v-model="name" placeholder="import you want find the name" @keyup.enter="getName" /> 
		</div>			
		<hiLine></hiLine>
	</div>
</template>
<script>
import hiLine from './list.vue'

export default{
	name:"index",
	components:{
		hiLine		
	},
	data(){
		return {
			name:""		
		}
	},
	methods:{
		getName(e){								
			if( this.name=="" || this.name.length<=0 ) return;
			this.$store.state.perpons.push({name:this.name})						
		}
	}
}
</script>
<style scoped lang="scss">
.main{
	
	margin:0 auto;
	
	background: #eee;
	border:1px solid #cecece;
	border-radius: 5px;
	.main-input-wrap{
		margin:0 auto;
		
	}
	.mainInput{
		
		height: 25px;
		line-height: 25px;
		display: inline-block;	
		
	}	
	
}

</style>
<template>
	<section>
		<div>
			<img src="" alt="">
			<router-link to="/"  class="goBack">返回首页</router-link>
			<div class="itemDscribe" >
				<ul>
					<li>{{item.name}}</li>
					<router-link :to='{name:"leftNav",params:{id:item.id},query:{id:item.id}}'>查看详情</router-link>
					<hr/>
					<li>{{item.num}}</li>
					<li>{{item.price}}</li>
					<li>{{item.residual}}</li>
					<li>{{item.describe}}</li>
				</ul>
			</div>
		</div>	
		<transition :name="transitionName">
			<router-view class="vue-animation" :detail="item"></router-view>
		</transition>

	</section>
</template>
<script>
	import items from '../item/item.json'

	export default{
		data(){
			return{
				item:{},
				transitionName:'slide-left'
			}
		},
		beforeMount(){
			let itemsAR=items.items;						
			let tempID=this.$route.params.id;						
			itemsAR.forEach((item,index)=>{
				if( item.id==tempID ){
					this.item=item;
				}
			})
		},
		mounted(){
			
		},
		methods:{

		},
		watch: {  
		    '$route' (to, from) {  
		      if(to.name == 'items'){  
		        this.transitionName = 'slide-right';  
		      }else{  
		        this.transitionName = 'slide-left';  
		      }  
		    }  
	  }  

	}
</script>
<style scoped lang="scss">
	.itemDscribe{
		ul>li{
			border-bottom:1px solid #000;
			padding:10px;
		}
	}
	.goBack{
		display:block;
		color:#f09;
		font-weight:700;
	}
	.vue-animation{
		position: absolute;
		left:0;
		bottom: 0;
		top:0;
		width:100%;		
		background-color: transparent;		
	}
	
</style>
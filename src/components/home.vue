<template>
	<section id="home">	
		<swiper-wrap></swiper-wrap>
		<div class="list">
			<ul>
				<router-link v-for=" (item , index) in items " :to="{name:'items',params:{id:item.id},query:{id:item.id}}">
					<div> <img :src="img"></img> </div>
					<div class="left"> <span>名称：</span> {{ item.name}} </div>
					<div class="right"> <span>价格：</span>{{ item.price }} </div>
					<span class="clear"></span>					
					<div class="left"> <span>数量：</span>{{ item.num }} </div>
					<div class="right"> <span>剩余：</span>{{ item.residual }} </div>
					<div class="clear"> <span>描述：</span>{{ item.describe }} </div>
				</router-link>
			</ul>
		</div>
	</section>
</template>
<script>
	import item from '../service/getData'
	import image from '../images/at.jpeg'
	import swiperWrap from './swiper'
	export default{
		data(){
			return {
				items:item.items,
				img:image
			}
		},
		components:{
			swiperWrap
		},
		methods:{

		}
		
	}
</script>
<style scoped lang='scss'>
	@import '../style/comm';
	#home{	
		.list{
			overflow:hidden;
			ul{				
				a{
					border-top:1px solid #ddd;	
					border-bottom:1px solid #efefef;			
					padding:.3rem;									
					font-size:.8rem;	
					overflow:hidden;
					background:#efefef;
					display:block;
					img{
						
						display:block;			
					}
					div{
						
					}
				}
				.clear{
						clear:both
				}	
			}
		}
	}
	
</style>
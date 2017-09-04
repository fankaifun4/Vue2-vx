<template>		
	<div class="swiper-container">
        <div class="swiper-wrapper">
            <img class="swiper-slide" :src="img1" alt="">
			<img class="swiper-slide" :src="img2" alt="">
        </div>
    	<!-- Add Pagination -->
    	<div class="swiper-pagination"></div>
	</div>	
</template>
<script>
	
	import img1 from "../images/11.png"
	import img2 from "../images/22.png"
	import "../plugins/swiper.min.js"
	import '../style/swiper.min.css'
	 
	export default{
		data(){
			return {
				img1,
				img2
			}
		},
		mounted(){		
			new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        loop: true
			});			
		}
	}
</script>
<style scoped>
	 .swiper-container{
	 	margin-bottom: .3rem
	 }
	.swiper-wrapper img{
		width: 100%;
		display: block;
	}
	.swiper-container{
		height:8rem;

	}
</style>
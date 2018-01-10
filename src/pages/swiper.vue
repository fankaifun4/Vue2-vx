<template>
	<div>
		<div class="wrapper">
			<div class="swiper-container" ref="slider">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						1111111
					</div>
					<div class="swiper-slide">
						2222222
					</div>
					<div class="swiper-slide">
						333333333
					</div>
					<div class="swiper-slide">
						444444444
					</div>
					<div class="swiper-slide">
						55555555
					</div>
					<div class="swiper-slide">
						6666666666
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>	
	</div>
</template>
<script>
	import 'swiper'
	import "../css/swiper.scss"
	export default{
		data(){
			return{

			}
		},
		mounted(){
			new Swiper(this.$refs.slider,{
				pagination : '.swiper-pagination',
				paginationClickable :true,
				loop : true,
				slidesPerView:1.2,
				pagination: '.swiper-pagination',
		        centeredSlides: true,
		        spaceBetween: 10,
		        loopAdditionalSlides : 2,
		        observer:true,
			})
		},
		mehotds:{

		},
		computed:{

		}
	}
</script>
<style lang="scss">
.swiper-slide{
	height:300px;
	line-height: 300px;
	box-sizing:border-box;
	border:1px solid #ccc;
	border-radius: 10px;
	padding:0 30px;
}
.swiper-pagination-bullet-active{
	background: #D8B77B;
}

</style>
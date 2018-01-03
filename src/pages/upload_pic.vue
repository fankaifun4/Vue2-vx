<template>
	<section>
		<div>
			<input type="file" name="load" ref="uploadfiles" 
			accept="image/gif,image/jpeg,image/jpg,image/png" 
			@change="getImg"  />
		</div>
		<div>
			<input type="button" name="uploadfile" value="上传" @click="uploadfile"/>
		</div>
		<div>
			<img src="" ref="img" alt="" class="yulan" >
			<canvas class='cvs' ref="cvs" width='200' height='100' />
		</div>
		<div class="loading-wrap" v-show="loading">
				<div class="loading">
					<span></span>
			        <span></span>
			        <span></span>
			        <span></span>
			        <span></span>
				</div>
		</div>
	</section>
</template>
<style scoped lang='scss'>
	.cvs{
		border:1px solid #000;
	}
	.yulan{
		width:100%;
	}
	.loading-wrap{
		position:absolute;
		background:rgba(0,0,0,.5);
		z-index:99;
		left:0;
		top:0;
		right:0;
		bottom:0;
	}
	.loading{
            width: 80px;
            height: 40px;
            margin: 0 auto;
            margin-top:100px;
        }
    .loading span{
        display: inline-block;
        width: 8px;
        height: 100%;
        border-radius: 4px;
        background: lightgreen;
        -webkit-animation: load 1s ease infinite;
    }
    @-webkit-keyframes load{
        0%,100%{
            height: 40px;
            background: lightgreen;
        }
        50%{
            height: 70px;
            margin: -15px 0;
            background: lightblue;
        }
    }
    .loading span:nth-child(2){
        -webkit-animation-delay:0.2s;
    }
    .loading span:nth-child(3){
        -webkit-animation-delay:0.4s;
    }
    .loading span:nth-child(4){
        -webkit-animation-delay:0.6s;
    }
    .loading span:nth-child(5){
        -webkit-animation-delay:0.8s;
    }

</style>
<script>
	export default {
		data(){
			return{
				loading:false
			}
		},
		mounted(){
			let cvs=this.$refs.cvs;
			let ctx=cvs.getContext('2d')
			ctx.save()
			ctx.rotate(10*Math.PI/180);
			ctx.fillRect(0,0,60,30)
			ctx.fillRect(20,40,50,50)
			ctx.fillStyle="blue";
			ctx.fillRect(60,60,30,20)
			ctx.fillStyle="red"
			ctx.fillRect(10,10,50,50)
			ctx.restore()
			ctx.fillStyle="yellow"
			ctx.fillRect(10,10,50,50)
			ctx.fillRect(50,50,60,10)
		},
		methods:{
			uploadfile(){
				let file=this.$refs.uploadfiles.files[0];
				let formData=new FormData();
				let id=this.$route.query.id;
				let rend=new FileReader();
				formData.append(id,file)
			},
			getImg(e){
				let _this=this;
				let file=this.$refs.uploadfiles.files;
				if(file.length<0) return;
				let img=file[0]
				let rend=new FileReader();
				let imgEl=this.$refs.img;
				this.loading=true;
				rend.readAsDataURL(img);
				rend.onload=function(e){
					_this.loading=false;
					imgEl.src = e.target.result;
				}

			}
		}
	}
</script>
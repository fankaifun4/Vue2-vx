<template>
	<section class="main-container">
		<vheader ref="header"/>
		<div class="xc-content">
			<div class="xc-wrap" ref="canvaswrap">
				<canvas ref="canvas" class="canvas" @click="getItems"></canvas>
			</div>
			<div class="ctrl">
				<div class="ctrl-i">
					<div class="btn" @click="sliceLeft(-1)">左移</div>
					<div class="value">{{computedValue.left}}</div>
					<div class="btn" @click="sliceLeft(1)">右移</div>
				</div>
				<div class="ctrl-i">
					<div class="btn" @click="sliceTop(-1)">上移</div>
					<div class="value">{{computedValue.top}}</div>
					<div class="btn" @click="sliceTop(1)">下移</div>
				</div>
				<div class="ctrl-i">
					<div class="btn" @click="sliceSize(1,'width')">宽度+</div>
					<div class="value">{{computedValue.width}}</div>
					<div class="btn" @click="sliceSize(-1,'width')">宽度-</div>
				</div>
				<div class="ctrl-i">
					<div class="btn" @click="sliceSize(1,'height')">高度+</div>
					<div class="value">{{computedValue.height}}</div>
					<div class="btn" @click="sliceSize(-1,'height')">高度-</div>
				</div>
				<div class="ctrl-i">
					<div class="btn">透明+</div>
					<div class="value">opcity</div>
					<div class="btn">透明+</div>
				</div>
			</div>
			<div class="slicePic" v-show="isChange" :style="cutRect">
				<div class="cut">裁剪</div>
				<div class="upload" @click="uploadPic">上传</div>
				<div class="delete">删除</div>
			</div>
		</div>
	</section>
</template>
<script>
	import vheader from '@/components/header'
	// import canvas from '@/driective'
	export default {
        name:'pageHome',
        data(){
            return {
                linkChange:'linkChange',
                data:[{
                	width:20,
                	height:30,
                	top:3,
                	left:5,
                	id:111111,
                	opcity:1,
                	pic:null
                },{
                	width:40,
                	height:40,
                	top:10,
                	left:30,
                	id:2222222,
                	opcity:1,
                	pci:null
                }],
                cvs:null,
                cparent:null,
                context:null,
                current:null,
                computedValue:{
                	width:0,
                	height:0,
                	top:0,
                	left:0
                },
                isChange:false,
                cutRect:{}
            }
        },
        mounted(){
        	this.init();
        },
        components:{
            vheader
        },
        methods:{
			set_c_wh(){
				let _this=this;
				setTimeout(function(){
					let w=_this.cparent.clientWidth
				  	let h=_this.cparent.clientHeight
				  	_this.cvs.width=w
				  	_this.cvs.height=h
				  	_this.data.forEach(item=>{
				  		_this.insertPic(item)
				  	})
				},400)
			},
			//初始化画布
			init(){
				this.cvs=this.$refs.canvas
	        	this.cparent=this.$refs.canvaswrap
	        	this.context=this.cvs.getContext('2d')
	        	this.set_c_wh();
	        	let _this=this;
	        	window.onresize=function(){
	        		_this.set_c_wh();
	        	}

			},
			//清除画布
			clearRect(){
				let w=this.cvs.width
				let h=this.cvs.height
				this.context.clearRect(0,0,w,h);
			},
			//插入空占位图
			insertPic(data,color){
				let w=this.cvs.width*data.width/100
				let h=this.cvs.height*data.height/100
				let l=this.cvs.width*data.left/100
				let t=this.cvs.height*data.top/100
				let addL=l+w/2
				let addT=t+h/2
				//画矩形
				this.context.beginPath()
				this.context.fillStyle="#ccc"
				// this.context.globalAlpha=0.7;
				this.context.fillRect(l,t,w,h)
				//添加十字架
				this.context.fillStyle="#999"
				this.context.fillRect(addL-15,addT-3,30,6)
				this.context.fillRect(addL-3,addT-15,6,30)
			},
			//获取当前图像载体
			getItems(e){
				let headerHeight=this.$refs.header.$el
				let cx=e.pageX-this.cvs.offsetLeft
				let cy=e.pageY-this.cvs.offsetTop-headerHeight.clientHeight
				this.data.forEach((item,index)=>{
					let p=this.getPosition(item)
					if( cx>=p.l && cx<=p.l+p.w && cy>=p.t&& cy<=p.t+p.h ){
						this.current=item
						this.computPX(this.current)
						this.isChange=!this.isChange
						this.cutRect={
							left:p.l+this.cvs.offsetLeft+'px',
							top:p.t+'px'
						}
					}
				})
			},
			computPX(current){
				let value=this.getPosition(current)
				this.computedValue={
					width:value.w,
					height:value.h,
					left:value.l,
					top:value.t
				}
			},
			//计算实际像素位置
			getPosition(cur){
				return {
					w:parseInt(this.cvs.width*cur.width/100),
					h:parseInt(this.cvs.height*cur.height/100),
					l:parseInt(this.cvs.width*cur.left/100),
					t:parseInt(this.cvs.height*cur.top/100)
				}
			},
			//修改左右位置
			sliceLeft(value){
				if( this.current ===null){ return }
				let cur=this.current;
				cur.left+=value
				let p=this.getPosition(cur)
				this.clearRect();
				this.data.forEach(item=>{
					this.insertPic(item)
				})
				this.computPX(cur)
				this.cutRect={
					left:p.l+'px',
					top:p.t+'px'
				}
			},
			sliceTop(value){
				if( this.current ===null){ return }
				let cur=this.current;
				cur.top+=value
				let p=this.getPosition(cur)
				this.computPX(cur)
				this.clearRect();
				this.data.forEach(item=>{
					this.insertPic(item)
				})
				this.cutRect={
					left:p.l+'px',
					top:p.t+'px'
				}
			},
			sliceSize(value,name){
				if( this.current ===null){ return }
				let cur=this.current;
				let p=this.getPosition(cur)
				this.computPX(cur)
				if( name ==='width'){
					cur.width+=value
				}else if(name==='height'){
					cur.height+=value
				}
				
				this.clearRect();
				this.data.forEach(item=>{
					this.insertPic(item)
				})
				this.cutRect={
					left:p.l+'px',
					top:p.t+'px'
				}
			},
			uploadPic(){
				this.$router.push({name:"upload",query:{id:this.current.id}})
			}
        }
    }
</script>
<style scoped lang="scss">
	.xc-content{
		position:absolute;
		top:120px;
		left:0;
		right:0;
		bottom:0;
		overflow-x:hidden;
	}
	.xc-wrap{
		width:960px;
		height:540px;
		border:1px solid #f00;
		margin:30px auto;
		background:#eee;
	}
	.canvas{
		box-sizing: border-box;
	}
	.ctrl{
		display:flex;
		flex-wrap:wrap;
		align-items:center;
		.ctrl-i{
			display: flex;
			align-items:center;
			justify-content:center;
			padding:15px;
			width:50%;
			margin-bottom:20px;
			background: #fff;
			box-sizing:border-box;
			>div{
				padding:15px 20px;
			}
			.btn{
				border:1px solid #f90;
				background: #fff;
				cursor: pointer;
				font-weight: 700;
			}
			.value{
				background:#fff;
			}
		}
	}
	.slicePic{
		position:absolute;
		z-index:999;
		width:300px;
		height:65px;
		background:#000;
		color:#fff;
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius: 5px;
		>div{
			display:flex;
			flex:1;
			text-align: center;
			align-items:center;
			justify-content:center;
			height:100%;
			&:active{
				background:#999;
			}
		}
	}
</style>
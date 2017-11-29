<template>
	<section class="container">
		<vheader :proute="goback"></vheader>
		<form id="formid" name="formid"  method="post" accept-charset="utf-8">
			<div class="regwrapper">
				<div class="list">
					<label>userName:</label><input type="text" v-model="user.userName" name="userName" @change="checkcUser">
				</div>
				<div class="list">
					<label>passWord:</label><input type="password" maxlength="12" v-model="user.pwd" name="pwd" @change="checkpwd">
				</div>
				<div class="list">
					<label>repassWord:</label><input type="password"  maxlength="12" v-model="user.repwd" name="repwd" @change="recheckpwd">
				</div>
				
				<div class="list">
					<label>sex:</label>
					<input type="radio" name="sex" value="1" v-model="user.sex">男
					<input type="radio" name="sex" value="2" v-model="user.sex">女
				</div>
				
				<div class="list center">
					<input type="button"  @click="submit" value="注册">
				</div>
			</div>
		</form>
		<div class="tip"  @click="hide" v-show="hidden">
			<div class="tipWap" :class="wron?'e':'g'">
				{{tip}}
			</div>
		</div>
	</section>
</template>
<script>
	import vheader from '@/components/list-header'
	export default {
		data(){
			return {
				user:{
					userName:"",
					pwd:"",
					repwd:"",
					sex:1,
					icon:"",
					address:"",
					phone:"",
					describe:"",
				},
				tip:"",
				wron:false,
				hidden:false,
				goback:"/vx/login"
			}
		},
		mounted(){

		},
		components:{
			vheader
		},
		computed:{

		},
		methods:{
			submit(){
				let regExp=/\s+/ig
				this.user.userName=this.user.userName.replace(regExp,'')
				if(this.user.userName.length<1 || this.user.userName==''){
					this.tip="用户名不能为空"
					this.hidden=true;
					this.wron=true;
					return false;
				}
				this.$http.get('/api/findByName',{
					params:{
						userName:this.user.userName
					}
				}).then((res)=>{
					if(!res.data.status){
						this.tip="抱歉，该用户已经被注册了"
						this.hidden=true;
						this.wron=true;
					}else{
						if( this.checkpwd() && this.recheckpwd()){
							this.$http.post('/api/reg',this.user).then(function(res){
								if(res.data.status){
									this.tip="恭喜，注册成功"
									this.hidden=true;
									this.wron=false;
								}else{
									this.tip="抱歉，注册失败"
									this.hidden=true;
									this.wron=true;
								}
							}).catch(function (error) {
							    console.log(error);
							});
						}	
					}
				}).catch(function (error) {
				    console.log(error);
				});
			},
			checkcUser(){
				let regExp=/\s+/ig
				if(this.user.userName.length<1 || this.user.userName==''){
					this.tip="用户名不能为空"
					return false;
				}
				this.user.userName=this.user.userName.replace(regExp,'')
				this.$http.get('/api/findByName',{
					params:{
						userName:this.user.userName
					}
				}).then((res)=>{
					if(res.data.status){
						this.tip="恭喜，该用户可以注册"
						this.hidden=true;
						this.wron=false;
					}else{
						this.tip="抱歉，该用户已经被注册了"
						this.hidden=true;
						this.wron=true;
					}
				})
			},
			hide(){
				this.hidden=false
			},
			checkpwd(){
				if(this.user.pwd!='' &&  this.user.pwd.length<6){
					this.hidden=true;
					this.wron=true;
					this.tip="密码长度至少6位"
					return false;
				}
				if(this.user.repwd!=''&& this.user.repwd.length>0){
					if( this.user.pwd.length>=6 ){
						if(this.user.repwd!=this.user.pwd){
							this.hidden=true
							this.wron=true
							this.tip="密码与重复密码不一致"
							return false
						}else{
							return true
						}
					}
				}
			},
			recheckpwd(){
				if(this.user.repwd!=''&& this.user.repwd.length>0){
					if(this.user.repwd!=this.user.pwd){
						this.hidden=true
						this.wron=true
						this.tip="密码与重复密码不一致"
						return false
					}else{
						return true
					}
				}else{
					return false
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	.regwrapper{
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: flex-start;
		font-size:40px;
		padding:40px;
		>.list.center{
			justify-content:center;
		}
		>.list{
			display:flex;
			text-align: center;
			justify-content:flex-left;
			padding:20px;
			box-sizing:border-box;
			width:100%;
			flex:1;
			align-items:center;
			>label{
				width:250px;
				text-align: right;
				display: block;
				padding-right:30px;
			}
			>input{
				display:block;
				padding:3px;
			}
			>input[type="text"],input[type="password"]{
				border:1px solid #ccc;
				flex:1;
				margin-right:30px;
				height:60px;
			}
			>input[type="radio"]{
				display: block;
				width:40px;
				height:40px;
				vertical-align:middle;
				margin:10px;
				cursor: pointer;
			}
			>input[type='button']{
				flex:.5;
				display: block;
				background:#090;
				border:1px solid #060;
				border-radius: 3px;
				padding:10px;
				font-size:40px;
				color:#fff;
			}
		}
	}
	.tip{
		position:absolute;
		display:flex;
		align-items:flex-start;
		justify-content:center;
		top:0;
		left:0;
		bottom:0;
		right: 0;
		background: transparent;
		z-index: 99;
	}
	.tipWap{
		padding:20px;
		font-size: 32px;
		text-align: center;
		border-radius: 5px;
		margin-top:200px;
	}
	.tipWap.g{
		color:#fff;
		background:#090;
	}
	.tipWap.e{
		color:#fff;
		background:#f20;
	}
</style>
<template>
	<section class="container">
		<vheader><span>（登录）</span></vheader>
		<form id="formid" name="formid"  method="post" accept-charset="utf-8">
			<div class="regwrapper">
				<div class="list">
					<label>用户名:</label><input type="text" v-model="user.userName" name="userName" >
				</div>
				<div class="list">
					<label>密码:</label><input type="password" maxlength="12" v-model="user.pwd" name="pwd">
				</div>
				<div class="list center">
					<input type="button"  @click="submit" value="登录">
				</div>
				<div>
					如果您没有账号，<a class="reg" @click="$router.push('/vx/user/reg')">点击这里注册</a>
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
	import vheader from '@/components/homeHeader'
	import {login} from "@/config/middle"
	export default {
		data(){
			return {
				user:{
					userName:"",
					pwd:"",
				},
				tip:"",
				wron:false,
				hidden:false
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
				let user=this.user.userName
				user=this.trim(user)
				if((user.length<1 || user=='') && (this.user.pwd!='' || this.user.pwd.length>6) ){
					this.tip="用户名且密码不能为空"
					this.hidden=true;
					this.wron=true;
					return false;
				}else{
					this.login()
				}
			},
			hide(){
				this.hidden=false;
			},
			trim(str){
				let regExp=/\s+/ig
				str=str.replace(regExp,'')
				return str;
			},
			async login(){
				let res=await login({userName:this.user.userName,pwd:this.user.pwd})
				if(res.status===200){
					if(!res.data.status){
						this.tip=res.data.data
						this.hidden=true;
						this.wron=true;
					}else{
						this.$store.dispatch('setUser',this.user.userName)
						this.$router.push('/vx/home')
					}
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
	.reg{
		color:#00f;
		text-decoration: underline;
	}
</style>
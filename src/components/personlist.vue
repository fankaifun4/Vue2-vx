<template>
	<div class="personslist">
		<router-link to="/"  class="to-link">返回添加页</router-link>				
		<h2>Persons List</h2>
		<h4>双击修改</h4>	
		<div v-for="(person,index) in persons" @dblclick="changeName($event,index)">
			<span>name:</span>			
				<span v-show="!tempPerson[index].isChanged">{{person.name}}</span> 									
				<input 
					v-show="tempPerson[index].isChanged" 
					type="text"   
					v-model="tempPerson[index].name"  
					@keypress.enter="setName(person,tempPerson[index])"
					@blur="tempPerson[index].isChanged=false"
					 /> 				
		</div>
			
	</div>
</template>
<script> 
export default {
	name:'personslist',
	data(){
		return {
			tempList:[]
		}
	},
	methods:{
		changeName:function(e,index){		
			console.log(e)			
			this.tempPerson[index].isChanged=true;
			
		},
		setName:function(model,temp){
			model.name=temp.name
			temp.isChanged=false
		},
		nothing:function(temp){
			temp.isChanged=false
		}
	},
	computed:{
		persons:function(){			
			return this.$store.state.perpons;
		},
		tempPerson:function(){			
			this.persons.forEach((item)=>{
				 this.tempList.push(
				 		{
				 			name:item.name,
				 			isChanged:false
				 		}
				 )
			});
			return this.tempList
		}
	}
}
</script>
<style scoped>
	.personslist{
		
		margin:0 auto;
		border:1px solid #cecece;
		background:#eee;
		padding:15px 20px;
		border-radius: 5px;
	}


</style>
import axios from 'axios'

const get=function(url,params){
	let query=params||{}
	return axios.get(url,{params:{...query}}).then(res=>{
		if(res.loginTimeout){
			return {
				loginTimeout:res.loginTimeout
			}
		}else{
			return res;
		}
	}).catch(error=>{
		return error
	})
}

const post=function(url,params){
	let query=params||{}
	return axios.post(url,query).then(res=>{
		if(res.loginTimeout){
			return {
				loginTimeout:res.loginTimeout
			}
		}else{
			return res;
		}
	}).catch(err=>{
		return err
	})
}

export default {
	get,
	post
}
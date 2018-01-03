import config from './conf.js'

export const postMsg=params=> config.post('/api',params)
export const login=params=>config.post('/api/login',params)
export const userInfo=params=>config.get('/api/getUserInfo',params)
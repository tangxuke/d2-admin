import Vue from 'vue'
import axios from 'axios'

axios.interceptors.response.use(res => {
  //return res.data
  return res
}, err => {
  return Promise.reject(err)
})

axios.interceptors.request.use(req=>{
  req.baseURL='http://localhost:3000/';
  return req
},err=>{
  return Promise.reject(err);
})

Vue.prototype.$axios = axios

import Vue from 'vue'
import axios from 'axios'

axios.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

axios.defaults.baseURL='http://localhost:3000/';
axios.defaults.withCredentials=true;

//Vue.prototype.$axios = axios

export default axios
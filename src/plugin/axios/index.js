import Vue from 'vue'
import axios from 'axios'

axios.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

axios.defaults.baseURL='http://localhost:3000/';

Vue.prototype.$axios = axios

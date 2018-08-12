import Vue from 'vue'
import axios from 'axios'

axios.interceptors.response.use(res => {
  //return res.data
  return res
}, err => {
  return Promise.reject(err)
})

Vue.prototype.$axios = axios

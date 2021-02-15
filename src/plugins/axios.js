import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (typeof token === 'string') {
    config.headers['Authorization'] = `${token.replaceAll('"', '')}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default instance

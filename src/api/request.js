import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10 * 1000
})

request.interceptors.request.use(
  (config) => {
    // 请求前需要做的事情
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    // 响应后需要做的事情
    const res = response.data
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

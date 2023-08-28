import axios from 'axios-https-proxy-fix'
import { Message } from 'element-ui'


const timeout = 15000



const service = axios.create({
  timeout,
})


service.interceptors.response.use(
   response => {
    const res = response.data
    let data = res.data
    return data
  },
  error => {
    Message.error("请求错误")
    return Promise.reject(error)
  }
)

export default service

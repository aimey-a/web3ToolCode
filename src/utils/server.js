import axios from 'axios-https-proxy-fix'
import { Message } from 'element-ui'
import {duneurl} from '@/utils/dune';

// const header = {
//     proxy: {
//       host: '127.0.0.1',
//       port: 7890
//     },
//   }
const timeout = 15000



const service = axios.create({
  timeout,
})

//请求拦截器
service.interceptors.request.use(res => {
    res.url+=duneurl
    // 封装请求
    return res
}, err => {
    return Promise.reject(err)
})


//响应拦截器
service.interceptors.response.use(
   response => {
    return response.data.result.rows
  },
  error => {
    Message.error("请求错误")
    return Promise.reject(error)
  }
)

export default service

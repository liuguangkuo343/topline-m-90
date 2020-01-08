// 用户相关的请求模块
import request from '../utils/request'

export const login = data => {
  return request({
    method: 'POST', // 请求方法
    url: '/app/v1_0/authorizations', // 请求路径
    headers: {
      // 这里不需要手动添加属性  axios默认发送
    }, // 请求头
    // params: {}, // query查询参数
    // body请求体参数
    data
  })
}

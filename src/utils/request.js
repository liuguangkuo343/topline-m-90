/**
    axios 请求模块
 */
import axios from 'axios'
// 处理js安全整数范围问题
import jsonBig from 'json-bigint'
const request = axios.create({
  baseURL: ' http://ttapi.research.itcast.cn/'
})
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (err) {
    return {}
  }
}]

export default request

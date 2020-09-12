/**
 * 封装请求方法
*/
import axios from 'axios'
import { ajaxSite } from './constant'
import Qs from 'qs'
const instance = axios.create({
  baseURL: ajaxSite,
  timeout: 5000,
  withCredentials: true
})
// 添加请求拦截
instance.interceptors.request.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})
// 添加响应拦截
instance.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response.data)
  } else {
    Local.showToast(response.statusText)
  }
})
// 提供 get方法
const get = function(url, params) {
  if (location.protocol === 'http:') {
    // 如果是本地环境，则需要在请求url 后面带上模拟登录态的参数
    if (url.indexOf('?') > -1) {
      url = url + '&' + location.search.slice(1)
    } else {
      url += location.search
    }
  } else {
    // 说明： 因为安卓端在分享后会清除cookie,所以每次在分享前，会先将cookie存起来，然后调接口调时候再重新写入cookie -- zhangjian
    Utils.sessionCookieToCookie()
  }
  console.log(url)
  return instance.get(url, { params }).then((response) => {
    if (response) {
      return response
    }
    throw new Error('网络异常，请稍候再试')
  }).catch((err) => {
    console.log('get err', err)
    throw new Error('网络异常，请稍候再试')
  })
}

// 提供 post 方法
const post = function(url, data) {
  data = Qs.stringify(data)
  return instance.post(url, data).then((response) => {
    if (response) {
      return response
    }
    throw new Error('网络异常，请稍候再试')
  }).catch((err) => {
    console.log('post err', err)
    throw new Error('网络异常，请稍候再试')
  })
}
// all针对一些端内接口必须使用客户端内请求方法
const all = function(url, config, callback) {
  if (Utils.isInApp) {
    config = `${Utils.transParam(config)}`
    if (url.indexOf('?') > -1 && config.indexOf('?') > -1) {
      config = config.replace('?', '&')
    }
    Local.reqByClient(`${url}${config}`, (res) => {
      callback(res)
    })
  } else {
    get(url, config).then((res) => { callback(res) })
  }
}
export default { instance, get, post, all }

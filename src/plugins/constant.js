/**
 *  活动请求后台服务地址
 */
console.log(process.env.NODE_ENV)
export const ajaxSite = Utils.isTest ? process.env.NODE_ENV === 'serve'
  ? 'http://localhost:8080/yapi' : 'https://pteventv3.reader.qq.com/activity/'
  : 'https://eventv3.reader.qq.com/activity/'
/**
 * 公共接口调用地址不带后台test分支层级
 */
export const commonSite = Utils.isTest
  ? 'https://pteventv3.reader.qq.com/activity/'
  : 'https://eventv3.reader.qq.com/activity/'
/**
 * 数据上报后台服务地址
 */
export const reportSite = Utils.isTest
  ? 'https://ptwapmusic3.reader.qq.com/activity/'
  : 'https://event.reader.qq.com/activity/'

/**
 * 封装微信qq鉴权方法 getOauthInfo
 */
import { commonSite } from './constant'
import axios from './axios'
/**
 * @func getOauthInfo
 * @returns {Object} -{guid: '', avor: '', nick: ''}用户基本信息，包含uid或者qq号、头像、昵称等。并存储在本地localStorage
 * @desc 微信qq鉴权方法
 * @example
 * getOauthInfo().then(result => {console.log('result',result);});
 */
async function getOauthInfo() {
  var userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
  userInfo.guid =
    (userInfo.guid !== 'undefined' && userInfo.guid) || Utils.param('guid')
  userInfo.avor =
    (userInfo.avor !== 'undefined' && userInfo.avor) || Utils.param('avor')
  userInfo.nick =
    (userInfo.nick !== 'undefined' && userInfo.nick) ||
    decodeURIComponent(Utils.param('nick'))
  if (Utils.platform() === 'wx') {
    if (!userInfo.guid || !userInfo.avor || !userInfo.nick) {
      localStorage.removeItem('userInfo')
      location.href = wxOauth()
    } else {
      if (!localStorage.getItem('userInfo')) {
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }
    }
  } else if (Utils.platform() === 'qq') {
    if (!userInfo.guid || !userInfo.avor || !userInfo.nick) {
      var userId = Number(Utils.getCookie('uin').slice(1))
      try {
        userInfo = await getQQBaseInfo(userId)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
      } catch {
        userInfo.guid = userId
      }
    }
  }
  return userInfo
}
/**
 * @func getQQBaseInfo
 * @returns 获取QQ基本信息
 * @param {Number} uin -用户的qq号
 * @desc 获取qq用户信息
 */
function getQQBaseInfo(uin) {
  var info
  var url = `${commonSite}common/biz/queryQQBaseInfo?uin=${uin}&actid=${Utils.getActid()}`
  return new Promise((resolve, reject) => {
    axios.get(url).then(data => {
      if (data.code === 0) {
        info = {
          guid: uin,
          nick: data.data.nick,
          avor: data.data.icon
        }
        resolve(info)
      }
    })
  })
}
/**
 * @func wxOauth
 * @returns {string} - 微信鉴权重定向地址.
 * @desc 微信鉴权重定向.
 */
function wxOauth() {
  var authHost
  if (Utils.isTest) {
    authHost = 'https://ptwapmusic3.reader.qq.com/share/wxoauth/init'
  } else {
    authHost = 'https://event.reader.qq.com/share/wxoauth/init'
  }
  return (
    authHost +
    '?formalActid=' +
    Utils.getActid() +
    '&backUrl=' +
    encodeURIComponent(location.href)
  )
}
export default getOauthInfo

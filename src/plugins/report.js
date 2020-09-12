/**
 * 用于埋点的文件
 * 挂载到vue 上，this.$report()
 * https://yuewen.lexiangla.com/teams/k100077/docs/0c7236fe4adf11e98aff5254002ec14d?lxref=search-team&company_from=yuewen
 */
import axios from './axios'
import { reportSite } from './constant'
/**
 * defaultParam 默认配置的参数信息，根据项目的类别不同的配置不同的参数，默认是普通活动
 */
const defaultParam = {
  activity_id: Utils.getActid('actid'),
  stype: 'active'
}
console.log(axios.instance.defaults)
const reportData = (jsonData, callback) => {
  const url = Utils.isInApp ? reportSite + 'sumWithJson' : reportSite + 'share/sumWithJson'
  // 一般的活动支持cookie验证可以使用get请求，如果不支持get时会获取不到登录态，则使用all方法
  // get 请求方式，使用时请打开以下注释并注释下方 ‘all 请求方式’ 部分代码
  // let config = {
  //   data: jsonData
  // };
  // axios.get(url, config).then(data => {
  //   if (!Utils.isInApp) {
  //     if (data.code === 1 && !localStorage.shareUuid) {
  //       localStorage.shareUuid = data.shareUuid;
  //     }
  //     callback && callback();
  //   }
  // });
  // all 请求方式
  // ---------------------------不用 all 时需要注释的部分----------------------------
  const config = {
    data: Utils.isInApp ? encodeURIComponent(JSON.stringify(jsonData)) : jsonData
  }
  axios.all(url, config, (data) => {
    if (!Utils.isInApp) {
      if (data.code === 1 && !localStorage.shareUuid) {
        localStorage.shareUuid = data.shareUuid
      }
      callback && callback()
    }
  })
  // ---------------------------------------------------------------------
}
function report(jsonData, callback) {
  // var jsonData2 = {};
  if (Utils.isInApp) {
    Object.assign(jsonData, {
      page_name: jsonData.page_name || 'homePage',
      action_type: jsonData.action_type || 'click',
      in_app: 1
    })
  } else {
    axios.instance.defaults.withCredentials = false
    Object.assign(jsonData, {
      page_name: jsonData.page_name || 'sharePage',
      action_type: jsonData.action_type || 'click',
      shareUuid: localStorage.shareUuid ? localStorage.shareUuid : '',
      in_app: 0
    })
  }
  Object.assign(jsonData, defaultParam)
  reportData(jsonData, callback)
}
export default report

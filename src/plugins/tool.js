/**
 * 添加当前项目里新增的方法，方便项目单独调试、使用，包括Utils 和 Local
 */
const utils = {
  // example() {
  //   console.log('示例')
  // }
}
const local = {
  // example() {
  //   Local.showToast('234343434')
  // }
}
if (window.Utils) {
  Object.assign(Utils, utils)
}
if (window.Local) {
  Object.assign(Local, local)
}

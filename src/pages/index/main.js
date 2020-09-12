import Vue from 'vue'
import app from './Index.vue'
// import '@/plugins/set'
import '@/plugins/tool'
import report from '@/plugins/report'
import axios from '@/plugins/axios'

Vue.prototype.$axios = axios
Vue.prototype.$report = report
Vue.config.productionTip = false

new Vue({
  mounted() {
    // if (process.env.NODE_ENV === 'serve') { // 如果需要本地mock请自行打开注释
    //   require('@/plugins/mock')
    // }
    // if (process.env.NODE_ENV !== 'production') {
    //   require('@/plugins/eruda')
    // }
  },
  render: h => h(app)
}).$mount('#app')

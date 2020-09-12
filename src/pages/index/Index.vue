<template>
  <div class="site-map">
    <div class="main">
      <div class="nav">
        <h1>QQ 阅读内嵌页 SITEMAP</h1>
        <p>展示页面为测试环境页面，需要去 <a class="link" target="_blank" href="https://ptubook.reader.qq.com/index.html">ubook PC 站点</a> 登录</p>
        <p>最好在 chrome 浏览器的无痕模式下登录</p>
        <p>账号：3575466024</p>
        <p>密码：ceshi00（请勿更改）</p>
        <p>登录完成后刷新此页面</p>
        <div class="dir">
          <h2>目录</h2>
          <div class="menu-wrap">
            <div v-for="(item, index) in menuList" :key="index" class="menu-item">
              <h3>{{ item }}{{ item === 'common' ? ' 通用页' : '' }}</h3>
              <ul>
                <li v-for="(page, i) in siteMap[item]" :key="i" :class="{ active: pageUrl === page.url }" @click="changePage(page)">{{ page.title }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="iframe-container">
        <iframe :src="pageUrl" frameborder="0" style="width: 375px"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import siteMapList from '@/plugins/map'
export default {
  components: {
  },
  data() {
    return {
      siteMap: null,
      menuList: null,
      pageUrl: ''
    }
  },
  created() {
    const ywguid = this.getCookieItem('ywguid')
    const ywkey = this.getCookieItem('ywkey')
    const loginType = this.getCookieItem('loginType') || 1
    const suffix = `ywguid=${ywguid}&ywkey=${ywkey}&loginType=${loginType}`
    siteMapList.common.forEach((item) => {
      item.url = item.url.includes('?') ? (item.url + '&' + suffix) : (item.url + '?' + suffix)
    })
    this.siteMap = Object.freeze(siteMapList)
    this.menuList = Object.freeze(Object.keys(siteMapList))
    this.pageUrl = this.siteMap[this.menuList[0]][0].url
  },
  methods: {
    changePage(page) {
      this.pageUrl = page.url
    },
    getCookieItem(sKey) {
      // eslint-disable-next-line
      const _regExp = new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$')
      return decodeURIComponent(document.cookie.replace(_regExp, '$1')) || null
    }
  }
}
</script>

<style lang="less" src="@/assets/css/index.less"></style>

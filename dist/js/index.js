(function(e){function t(t){for(var o,i,d=t[0],a=t[1],l=t[2],c=0,m=[];c<d.length;c++)i=d[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,d=1;d<n.length;d++){var a=n[d];0!==r[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={index:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],a=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var u=a;s.push([0,"chunk-vendors"]),n()})({"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);n(/*! core-js/modules/es.array.concat */"./node_modules/core-js/modules/es.array.concat.js"),n(/*! core-js/modules/es.array.for-each */"./node_modules/core-js/modules/es.array.for-each.js"),n(/*! core-js/modules/es.array.includes */"./node_modules/core-js/modules/es.array.includes.js"),n(/*! core-js/modules/es.object.freeze */"./node_modules/core-js/modules/es.object.freeze.js"),n(/*! core-js/modules/es.object.keys */"./node_modules/core-js/modules/es.object.keys.js"),n(/*! core-js/modules/es.regexp.constructor */"./node_modules/core-js/modules/es.regexp.constructor.js"),n(/*! core-js/modules/es.regexp.exec */"./node_modules/core-js/modules/es.regexp.exec.js"),n(/*! core-js/modules/es.regexp.to-string */"./node_modules/core-js/modules/es.regexp.to-string.js"),n(/*! core-js/modules/es.string.includes */"./node_modules/core-js/modules/es.string.includes.js"),n(/*! core-js/modules/es.string.replace */"./node_modules/core-js/modules/es.string.replace.js"),n(/*! core-js/modules/web.dom-collections.for-each */"./node_modules/core-js/modules/web.dom-collections.for-each.js");var o=n(/*! @/plugins/map */"./src/plugins/map.js");t["default"]={components:{},data:function(){return{siteMap:null,menuList:null,pageUrl:""}},created:function(){var e=this.getCookieItem("ywguid"),t=this.getCookieItem("ywkey"),n=this.getCookieItem("loginType")||1,r="ywguid=".concat(e,"&ywkey=").concat(t,"&loginType=").concat(n);o["default"].common.forEach((function(e){e.url=e.url.includes("?")?e.url+"&"+r:e.url+"?"+r})),this.siteMap=Object.freeze(o["default"]),this.menuList=Object.freeze(Object.keys(o["default"])),this.pageUrl=this.siteMap[this.menuList[0]][0].url},methods:{changePage:function(e){this.pageUrl=e.url},getCookieItem:function(e){var t=new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$");return decodeURIComponent(document.cookie.replace(t,"$1"))||null}}}},'./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72bf3baf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=template&id=d9c0303e&':
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72bf3baf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/Index.vue?vue&type=template&id=d9c0303e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return r}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-map"},[n("div",{staticClass:"main"},[n("div",{staticClass:"nav"},[n("h1",[e._v("QQ 阅读内嵌页 SITEMAP")]),e._m(0),n("p",[e._v("最好在 chrome 浏览器的无痕模式下登录")]),n("p",[e._v("账号：3575466024")]),n("p",[e._v("密码：ceshi00（请勿更改）")]),n("p",[e._v("登录完成后刷新此页面")]),n("div",{staticClass:"dir"},[n("h2",[e._v("目录")]),n("div",{staticClass:"menu-wrap"},e._l(e.menuList,(function(t,o){return n("div",{key:o,staticClass:"menu-item"},[n("h3",[e._v(e._s(t)+e._s("common"===t?" 通用页":""))]),n("ul",e._l(e.siteMap[t],(function(t,o){return n("li",{key:o,class:{active:e.pageUrl===t.url},on:{click:function(n){return e.changePage(t)}}},[e._v(e._s(t.title))])})),0)])})),0)])]),n("div",{staticClass:"iframe-container"},[n("iframe",{staticStyle:{width:"375px"},attrs:{src:e.pageUrl,frameborder:"0"}})])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("展示页面为测试环境页面，需要去 "),n("a",{staticClass:"link",attrs:{target:"_blank",href:"https://ptubook.reader.qq.com/index.html"}},[e._v("ubook PC 站点")]),e._v(" 登录")])}];o._withStripped=!0},"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/assets/css/index.less?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./src/assets/css/index.less?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){var o=n(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js");t=o(!1),t.push([e.i,'/** \n * 默认出口文件，在页面内import\n */\n/**\n  * reset\n  */\nbody {\n  font-family: \'microsoft yahei\', \'Helvetica Neue\', Helvetica, STHeiTi, sans-serif;\n  line-height: 1.5;\n  font-size: 14px;\n  color: #2b2b2b;\n  background: #f8fafc;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\ninput,\ntextarea {\n  -webkit-appearance: none;\n  border: none;\n  outline: none;\n  font: inherit;\n}\ntextarea {\n  resize: none;\n}\nbutton {\n  border: none;\n  background: transparent;\n  outline: none;\n  font: inherit;\n}\np {\n  margin: 0;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n}\nli {\n  display: block;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n::-webkit-search-results-button,\n::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n:focus::placeholder,\n:focus::-webkit-input-placeholder {\n  opacity: 0.8;\n}\n/** \n *\t基于 normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css \n *  修复不同浏览器的兼容性问题\n */\nhtml {\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  margin: 0;\n}\nmain {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n* Add the correct display in IE 10+.\n*/\ntemplate {\n  display: none;\n}\n/**\n* Add the correct display in IE 10.\n*/\n[hidden] {\n  display: none;\n}\n/* Form\n   ========================================================================== */\n/**\n * Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nhtml,\nbody {\n  height: 100vh;\n}\n.site-map {\n  width: 1400px;\n  height: 100%;\n  margin: 0 auto;\n}\n.link {\n  color: #2395f1;\n  cursor: pointer;\n}\n.main {\n  display: flex;\n  height: 100%;\n}\n.nav {\n  flex: 1;\n}\n.nav h1 {\n  font-size: 32px;\n}\n.dir h2 {\n  font-size: 24px;\n  padding-top: 20px;\n}\n.dir h3 {\n  font-size: 20px;\n  padding: 20px 0 10px;\n}\n.dir .menu-wrap {\n  width: 100%;\n  height: calc(100vh - 300px);\n  overflow-y: auto;\n  display: flex;\n  flex-flow: column wrap;\n}\n.dir .menu-item {\n  flex: 1;\n}\n.dir li {\n  padding: 5px 20px;\n  cursor: pointer;\n}\n.dir li.active {\n  color: red;\n}\n.iframe-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 768px;\n}\n.iframe-container iframe {\n  width: 375px;\n  height: 667px;\n  box-shadow: 0 0 1px rgba(0, 0, 0.65);\n}\n',""]),e.exports=t},"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/assets/css/index.less?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./src/assets/css/index.less?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){var o=n(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./index.less?vue&type=style&index=0&lang=less& */"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/assets/css/index.less?vue&type=style&index=0&lang=less&");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */"./node_modules/vue-style-loader/lib/addStylesClient.js").default;r("43b9c668",o,!1,{sourceMap:!1,shadowMode:!1})},"./src/assets/css/index.less?vue&type=style&index=0&lang=less&":
/*!*********************************************************************!*\
  !*** ./src/assets/css/index.less?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!../../../node_modules/vue-style-loader??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./index.less?vue&type=style&index=0&lang=less& */"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/assets/css/index.less?vue&type=style&index=0&lang=less&"),r=n.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=r.a},"./src/pages/index/Index.vue":
/*!***********************************!*\
  !*** ./src/pages/index/Index.vue ***!
  \***********************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var o=n(/*! ./Index.vue?vue&type=template&id=d9c0303e& */"./src/pages/index/Index.vue?vue&type=template&id=d9c0303e&"),r=n(/*! ./Index.vue?vue&type=script&lang=js& */"./src/pages/index/Index.vue?vue&type=script&lang=js&"),s=(n(/*! @/assets/css/index.less?vue&type=style&index=0&lang=less& */"./src/assets/css/index.less?vue&type=style&index=0&lang=less&"),n(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),i=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null);i.options.__file="src/pages/index/Index.vue",t["default"]=i.exports},"./src/pages/index/Index.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/pages/index/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=script&lang=js&");t["default"]=o["default"]},"./src/pages/index/Index.vue?vue&type=template&id=d9c0303e&":
/*!******************************************************************!*\
  !*** ./src/pages/index/Index.vue?vue&type=template&id=d9c0303e& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72bf3baf-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=d9c0303e& */'./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72bf3baf-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/Index.vue?vue&type=template&id=d9c0303e&');n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]}))},"./src/pages/index/main.js":
/*!*********************************!*\
  !*** ./src/pages/index/main.js ***!
  \*********************************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t);n(/*! ./node_modules/core-js/modules/es.array.iterator.js */"./node_modules/core-js/modules/es.array.iterator.js"),n(/*! ./node_modules/core-js/modules/es.promise.js */"./node_modules/core-js/modules/es.promise.js"),n(/*! ./node_modules/core-js/modules/es.object.assign.js */"./node_modules/core-js/modules/es.object.assign.js"),n(/*! ./node_modules/core-js/modules/es.promise.finally.js */"./node_modules/core-js/modules/es.promise.finally.js");var o=n(/*! vue */"./node_modules/vue/dist/vue.runtime.esm.js"),r=n(/*! ./Index.vue */"./src/pages/index/Index.vue"),s=(n(/*! @/plugins/tool */"./src/plugins/tool.js"),n(/*! @/plugins/report */"./src/plugins/report.js")),i=n(/*! @/plugins/axios */"./src/plugins/axios.js");o["default"].prototype.$axios=i["default"],o["default"].prototype.$report=s["default"],o["default"].config.productionTip=!1,new o["default"]({mounted:function(){},render:function(e){return e(r["default"])}}).$mount("#app")},"./src/plugins/axios.js":
/*!******************************!*\
  !*** ./src/plugins/axios.js ***!
  \******************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);n(/*! core-js/modules/es.array.concat */"./node_modules/core-js/modules/es.array.concat.js"),n(/*! core-js/modules/es.array.index-of */"./node_modules/core-js/modules/es.array.index-of.js"),n(/*! core-js/modules/es.array.slice */"./node_modules/core-js/modules/es.array.slice.js"),n(/*! core-js/modules/es.object.to-string */"./node_modules/core-js/modules/es.object.to-string.js"),n(/*! core-js/modules/es.regexp.exec */"./node_modules/core-js/modules/es.regexp.exec.js"),n(/*! core-js/modules/es.string.replace */"./node_modules/core-js/modules/es.string.replace.js"),n(/*! core-js/modules/es.string.search */"./node_modules/core-js/modules/es.string.search.js");var o=n(/*! axios */"./node_modules/axios/index.js"),r=n.n(o),s=n(/*! ./constant */"./src/plugins/constant.js"),i=n(/*! qs */"./node_modules/qs/lib/index.js"),d=n.n(i),a=r.a.create({baseURL:s["ajaxSite"],timeout:5e3,withCredentials:!0});a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){if(200===e.status)return Promise.resolve(e.data);Local.showToast(e.statusText)}));var l=function(e,t){return"http:"===location.protocol?e.indexOf("?")>-1?e=e+"&"+location.search.slice(1):e+=location.search:Utils.sessionCookieToCookie(),console.log(e),a.get(e,{params:t}).then((function(e){if(e)return e;throw new Error("网络异常，请稍候再试")})).catch((function(e){throw console.log("get err",e),new Error("网络异常，请稍候再试")}))},u=function(e,t){return t=d.a.stringify(t),a.post(e,t).then((function(e){if(e)return e;throw new Error("网络异常，请稍候再试")})).catch((function(e){throw console.log("post err",e),new Error("网络异常，请稍候再试")}))},c=function(e,t,n){Utils.isInApp?(t="".concat(Utils.transParam(t)),e.indexOf("?")>-1&&t.indexOf("?")>-1&&(t=t.replace("?","&")),Local.reqByClient("".concat(e).concat(t),(function(e){n(e)}))):l(e,t).then((function(e){n(e)}))};t["default"]={instance:a,get:l,post:u,all:c}},"./src/plugins/constant.js":
/*!*********************************!*\
  !*** ./src/plugins/constant.js ***!
  \*********************************/
/*! exports provided: ajaxSite, commonSite, reportSite */function(e,t,n){"use strict";n.r(t),n.d(t,"ajaxSite",(function(){return o})),n.d(t,"commonSite",(function(){return r})),n.d(t,"reportSite",(function(){return s})),console.log("development");var o=Utils.isTest?"https://pteventv3.reader.qq.com/activity/":"https://eventv3.reader.qq.com/activity/",r=Utils.isTest?"https://pteventv3.reader.qq.com/activity/":"https://eventv3.reader.qq.com/activity/",s=Utils.isTest?"https://ptwapmusic3.reader.qq.com/activity/":"https://event.reader.qq.com/activity/"},"./src/plugins/map.js":
/*!****************************!*\
  !*** ./src/plugins/map.js ***!
  \****************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),t["default"]={common:[{title:"网赚-福利好礼",url:"https://ptyuedu.reader.qq.com/common/common/getWool/index.html"},{title:"网赚-我的收益",url:"https://ptyuedu.reader.qq.com/common/common/getWool/myIncome.html"},{title:"网赚-提现",url:"https://ptyuedu.reader.qq.com/common/common/getWool/cashMoney.html"},{title:"网赚-提现详情页",url:"https://ptyuedu.reader.qq.com/common/common/getWool/cashDetail.html"},{title:"网赚-填写邀请码",url:"https://ptyuedu.reader.qq.com/common/common/getWool/code.html"},{title:"网赚-邀请页",url:"https://ptyuedu.reader.qq.com/common/common/getWool/invite.html"},{title:"福利专区",url:"https://ptyuedu.reader.qq.com/common/common/readTime/dist/index.html?version=qqreader_7.2.80.0328_iphone&tf=1"},{title:"每月礼包",url:"https://ptyuedu.reader.qq.com/common/common/monthlyGift/index.html?version=qqreader_7.2.80.0328_iphone&tf=1"},{title:"应援-发起页",url:"https://ptyuedu.reader.qq.com/common/common/assistance/dist/launch.html?author=%E7%B4%AB%E9%87%91%E9%99%88&bid=907334&title=%E6%8E%A8%E7%90%86%E4%B9%8B%E7%8E%8B2%EF%BC%9A%E5%9D%8F%E5%B0%8F%E5%AD%A9&sex=0&dotest=1"},{title:"应援-详情页",url:"https://ptyuedu.reader.qq.com/common/common/assistance/dist/detail.html?fid=159720154858700&tf=1&version=qqreader_7.2.80.0328_iphone"},{title:"应援-排行榜",url:"https://ptyuedu.reader.qq.com/common/common/assistance/dist/assistRank.html?bid=19818084&fid=159720154858700&tf=1&version=qqreader_7.2.80.0328_iphone"},{title:"应援-列表页",url:"https://ptyuedu.reader.qq.com/common/common/assistance/dist/assistList.html?bid=19818084&sex=2&fid=159720154858700&tf=1&version=qqreader_7.2.80.0328_iphone"},{title:"应援-我的应援",url:"https://ptyuedu.reader.qq.com/book_res/reader/common/common/assistance/dist/myList.html?isFormal=1&tf=1"},{title:"会员特权",url:"https://ptyuedu.reader.qq.com/common/common/privileges/dist/index.html"},{title:"绑定手机号",url:"https://ptyuedu.reader.qq.com/common/common/bindTel/dist/index.html?version=qqreader_7.2.00.0328_iphone&tf=1"},{title:"漫画领券页",url:"https://ptyuedu.reader.qq.com/common/common/comicGift/dist/index.html?origin=204136&version=qqreader_7.2.00.0328_iphone&tf=1"},{title:"分类型容错页",url:"https://ptyuedu.reader.qq.com/common/common/error_normal.html"},{title:"分享免费送",url:"https://ptyuedu.reader.qq.com/common/common/freebook/dist/index.html"},{title:"分享领限免",url:"https://ptyuedu.reader.qq.com/common/common/freebookNew/dist/index.html"},{title:"新手福利页",url:"https://ptyuedu.reader.qq.com/common/common/newUser/dist/index.html?tf=1&version=qqqreader_7.1.0.0000_iphone"},{title:"猜你喜欢选书模块",url:"https://ptyuedu.reader.qq.com/common/common/guessLike/dist/sort.html?version=qqqreader_7.1.0.0000_iphone&tf=1"},{title:"我的阅历",url:"https://ptyuedu.reader.qq.com/common/common/monthTracks/index.html?version=qqqreader_7.1.0.0000_iphone&tf=1"},{title:"运营官-申请发起",url:"https://ptyuedu.reader.qq.com/common/common/manageCoo/replyStart.html?ctype=0&bid=158159&role=0"},{title:"运营官-申请表单",url:"https://ptyuedu.reader.qq.com/common/common/manageCoo/replyForm.html?ctype=0&bid=158159&role=0"},{title:"运营官-发帖设置",url:"https://ptyuedu.reader.qq.com/common/common/manageCoo/postSet.html?ctype=0&bid=158159&role=0"},{title:"运营官-运营团队管理",url:"https://ptyuedu.reader.qq.com/common/common/manageCoo/memberManage.html?ctype=0&bid=158159&role=0"},{title:"运营官-禁言管理",url:"https://ptyuedu.reader.qq.com/common/common/manageCoo/blackUsers.html?ctype=0&bid=158159&role=0"},{title:"单新回流福利",url:"https://ptyuedu.reader.qq.com/common/common/newUserGift/backFlow.html?version=qqqreader_7.2.00.0000_iphone"},{title:"新用户福利",url:"https://ptyuedu.reader.qq.com/common/common/newUserGift/index.html?version=qqqreader_7.2.00.0000_iphone"},{title:"h5充值页",url:"https://ptyuedu.reader.qq.com/common/common/pay.html?version=qqqreader_7.2.00.0000_iphone&tf=1"},{title:"搜索楼层",url:"https://ptyuedu.reader.qq.com/common/common/searchStair/dist/index.html?version=qqqreader_7.2.00.0000_iphone"},{title:"新专题页",url:"https://ptyuedu.reader.qq.com/common/common/templateConfig/dist/index.html?actid=10001394"},{title:"直播未开始",url:"https://ptyuedu.reader.qq.com/common/common/unLive.html"},{title:"会员续费管理",url:"https://ptyuedu.reader.qq.com/common/common/vipRecord/dist/index.html"},{title:"通用下载页",url:"https://ptyuedu.reader.qq.com/common/common/down/dist/index.html?actid=11822"},{title:"关于版本",url:"https://ptyuedu.reader.qq.com/common/common/about.html?version=qqreader_7.2.80.0328_iphone&tf=1"},{title:"QQ软件许可及服务协议",url:"https://ptyuedu.reader.qq.com/common/common/lawAgreement.html?agreementId=42&tf=1"},{title:"书单分享页",url:"https://ptyuedu.reader.qq.com/common/common/bookLists.html?tf=1&bsid=206992801039239"},{title:"应援详情分享页",url:"https://ptyuedu.reader.qq.com/common/common/assistance/dist/detailShare.html?fid=159720154858700"},{title:"作家主页分享页",url:"https://ptyuedu.reader.qq.com/common/common/shareAuthor/index.html?platform=1&tf=1&authorId=3004324400543901"},{title:"书籍详情页分享页",url:"https://ptyuedu.reader.qq.com/common/common/bookShare/dist/share.html?bid=25477871&channelId=10045544"},{title:"漫画分享页",url:"https://ptyuedu.reader.qq.com/common/common/comicShare/comicBookShare.html?bid=9392437504292502"},{title:"书评分享页",url:"https://ptyuedu.reader.qq.com/common/common/comment/index.html?bid=462952&ctype=0&commentid=a00000001wQy1fTODr000lkS"},{title:"大神说分享页",url:"https://ptyuedu.reader.qq.com/common/common/godSay/godShare.html?qid=125f390322188532465c03e4ed4181"},{title:"听书分享页",url:"https://ptyuedu.reader.qq.com/common/common/mediaBookShare.html?bid=15842435905320401"},{title:"视频分享页",url:"https://ptyuedu.reader.qq.com/common/common/shareVideo/index.html?vid=1323"},{title:"新专题分享页",url:"https://ptyuedu.reader.qq.com/common/common/templateConfig/dist/share.html?actid=10001394"},{title:"勋章馆分享页",url:"https://ptyuedu.reader.qq.com/common/common/medal/medalShare.html?user=7850923&tf=1"},{title:"话题分享页",url:"https://ptyuedu.reader.qq.com/common/common/topicShare/dist/share.html?topicId=10194&ctype=14&tf=1"}],android:[{title:"我的账户",url:"https://ptyuedu.reader.qq.com/android/7_2_8/account.html?usid=ywGkIGJRuHaL&timi=1868428&tf=1"},{title:"书券明细二级页",url:"https://ptyuedu.reader.qq.com/android/7_2_8/bookTicketDetail.html?usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"消费记录",url:"https://ptyuedu.reader.qq.com/android/7_2_8/userCostLog.html?usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"收入记录",url:"https://ptyuedu.reader.qq.com/android/7_2_8/userIncomeLog.html?usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"充值记录",url:"https://ptyuedu.reader.qq.com/android/7_2_8/userPayLog.html?usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"我的购买",url:"https://ptyuedu.reader.qq.com/android/7_2_8/buyhistory.html?usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"粉丝榜",url:"https://ptyuedu.reader.qq.com/android/7_2_8/fans.html?bid=462952&sid=159733813142488&version=qqreader_7.2.8.0888_android&usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"VIP等级",url:"https://ptyuedu.reader.qq.com/android/7_2_8/vipgrow.html?bid=462952&sid=159733813142488&version=qqreader_7.2.8.0888_android&usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"帮助中心",url:"https://ptyuedu.reader.qq.com/android/7_2_8/helpIndex.html?tf=1"},{title:"帮助中心列表",url:"https://ptyuedu.reader.qq.com/android/7_2_8/helpList.html?type=4&tf=1"},{title:"帮助中心详情页",url:"https://ptyuedu.reader.qq.com/android/7_2_8/helpDetail.html?id=1014&lm_f=helpIndex&lmh_f=helpIndex&tf=1&loginType=1&skey=@gZ7uDRSFu&ywguid=1868428&ywkey=ywF7vvZsF89W&fp=1"},{title:"我的超值包",url:"https://ptyuedu.reader.qq.com/android/7_2_8/mybuypacks.html?usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"超值包详情",url:"https://ptyuedu.reader.qq.com/android/7_2_8/packlist.html?pid=800028&usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"包月专区活动列表",url:"https://ptyuedu.reader.qq.com/android/7_2_8/monthActList.html?usid=ywGkIGJRuHaL&timi=1868428&ywguid=1868428&ywkey=ywGkIGJRuHaL&tf=1"},{title:"反馈中心首页",url:"https://ptyuedu.reader.qq.com/android/7_2_8/feedbackIndex.html"},{title:"反馈中心首页列表",url:"https://ptyuedu.reader.qq.com/android/7_2_8/feedback2nd.html?topId=20&titleName=%E4%BA%92%E5%8A%A8"},{title:"热门反馈详情",url:"https://ptyuedu.reader.qq.com/android/7_2_8/feedbackDetailHot.html?topId=20&secondId=138"},{title:"常用反馈格式",url:"https://ptyuedu.reader.qq.com/android/7_2_8/feedbackDetailCommon.html?topId=20&secondId=138"}],ios:[{title:"帮助中心详情页",url:"https://ptyuedu.reader.qq.com/ios/7_2_8/helpcenter.html?qid=1223&tf=1"},{title:"绑定支付引导",url:"https://ptyuedu.reader.qq.com/ios/7_2_8/payHelp.html"},{title:"银联充值帮助",url:"https://ptyuedu.reader.qq.com/ios/7_2_8/payHelp2.html"},{title:"基因详情页分享页",url:"https://ptyuedu.reader.qq.com/book_res/reader/ios/7_2_8/readGeneShare.html?tf=1&qqid=RpwMUFasJk4%3D"}]}},"./src/plugins/report.js":
/*!*******************************!*\
  !*** ./src/plugins/report.js ***!
  \*******************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var o=n(/*! ./axios */"./src/plugins/axios.js"),r=n(/*! ./constant */"./src/plugins/constant.js"),s={activity_id:Utils.getActid("actid"),stype:"active"};console.log(o["default"].instance.defaults);var i=function(e,t){var n=Utils.isInApp?r["reportSite"]+"sumWithJson":r["reportSite"]+"share/sumWithJson",s={data:Utils.isInApp?encodeURIComponent(JSON.stringify(e)):e};o["default"].all(n,s,(function(e){Utils.isInApp||(1!==e.code||localStorage.shareUuid||(localStorage.shareUuid=e.shareUuid),t&&t())}))};function d(e,t){Utils.isInApp?Object.assign(e,{page_name:e.page_name||"homePage",action_type:e.action_type||"click",in_app:1}):(o["default"].instance.defaults.withCredentials=!1,Object.assign(e,{page_name:e.page_name||"sharePage",action_type:e.action_type||"click",shareUuid:localStorage.shareUuid?localStorage.shareUuid:"",in_app:0})),Object.assign(e,s),i(e,t)}t["default"]=d},"./src/plugins/tool.js":
/*!*****************************!*\
  !*** ./src/plugins/tool.js ***!
  \*****************************/
/*! no static exports found */function(e,t){var n={},o={};window.Utils&&Object.assign(Utils,n),window.Local&&Object.assign(Local,o)},0:
/*!***************************************!*\
  !*** multi ./src/pages/index/main.js ***!
  \***************************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! /Users/guanxiaofeng/Desktop/code/QQReader_common_html/WebContent/common/siteMap/src/pages/index/main.js */"./src/pages/index/main.js")}});
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
(function(doc, win) {
  var docEl = doc.documentElement
  var resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize'
  function recalc() {
    var clientWidth = docEl.clientWidth
    // alert(docEl.clientHeight)
    if (!clientWidth) return
    clientWidth = clientWidth > 750 ? 750 : clientWidth
    docEl.style.fontSize = clientWidth / 7.5 + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

// 处理iOS端输入框操作页面滚动无法回弹问题
document.body.addEventListener('focusin', function(e) {
  if (e && e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'input') {
    if (!this.hasScrolled) {
      this.hasScrolled = true
      this.s = window.pageYOffset
    }
    clearTimeout(this.timer)
    console.log('iptFocus', this.s)
  }
})
document.body.addEventListener('focusout', function(e) {
  if (e && e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'input') {
    this.timer = setTimeout(() => {
      window.scrollTo(0, this.s)
      this.hasScrolled = false
      console.log('iptBlur', this.s)
    }, 0)
  }
})

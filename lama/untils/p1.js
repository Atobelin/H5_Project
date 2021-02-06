app.pages[1] = (function () {
  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask: 'p1',
    isFlipReady: false, //标志页面是否可以翻页, 当页面所有动画运行完之后设置为true,离开页面后再重置为false
    hasBranch: false, //标志页面内是否有分支,默认为false,
  };

  function init() {
    initEvents();
  }

  function initEvents() {
    $('.p1-btn').click(function () {
      window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '第一页', '点击进入按钮']);
      app.showPage(2);
    });
  }

  function onLoad() {
    setTimeout(function () {
      page.isFlipReady = true;
    }, 1000);
  }

  function onLeave() {
    page.isFlipReady = false;
  }

  return page;
})();
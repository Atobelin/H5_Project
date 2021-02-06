app.pages[5] = (function () {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask: 'p5',
    isFlipReady: false,
    hasBranch: true,
  };

  function init() {
    initEvents();
  }

  function initEvents() {
    $('.p5-onemore-btn').click(function () {
      window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '海报页', '选择再玩一次按钮']);
      app.showPage(2);
    });
    $('.js-chouJ').click(function () {
      app.showPage(6)
    });
    $(".js-open-share").click(function () {
      $(".js-share").fadeIn(300)
    });
    $(".js-share").click(function () {
      $(".js-share").fadeOut(300)
    })
  }

  function onLoad() {
    setTimeout(function () {
      page.isFlipReady = true;
    }, 1000);
    $('.page-top').hide();
    $('.page-bottom').hide();
  }

  function onLeave() {
    page.isFlipReady = false;
    $('.page-top').show();
    $('.page-bottom').show();
  }

  return page;
})();
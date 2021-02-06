app.pages[3] = (function () {

  var page = {
    init: init,
    onLoad: onLoad,
    onLeave: onLeave,
    dependingTask: 'p3',
    isFlipReady: false,
    hasBranch: true,
  };
  var p3CanvasFlag = true;

  function init() {
    initEvents();
  }

  // function getBase64Image(img) {
  //   var canvas = document.createElement("canvas");
  //   canvas.width = img.width;
  //   canvas.height = img.height;

  //   var ctx = canvas.getContext("2d");
  //   ctx.drawImage(img, 0, 0, img.width, img.height);
  //   var dataURL = canvas.toDataURL("image/jpeg", 0.5);
  //   return dataURL;
  // }

  function initEvents() {
    $('.p3-content-choose').click(function () {
      window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '性格页', '选择性格按钮']);
      $(this).addClass('p3-content-active').siblings().removeClass('p3-content-active');
      app.store.posterNum = $(this).attr('data-num');
    });
    $('.p3-next-btn').click(function () {
      if (p3CanvasFlag) {
        window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '性格页', '点击下一页按钮']);
        p3CanvasFlag = false;
        setTimeout(function () {
          p3CanvasFlag = true;
        }, 1000);
        app.showPage(4)

      }
    });
  }

  function onLoad() {
    setTimeout(function () {
      page.isFlipReady = true;
    }, 1000);
  }

  function onLeave() {
    page.isFlipReady = false;
    p3CanvasFlag = true;
  }

  return page;
})();
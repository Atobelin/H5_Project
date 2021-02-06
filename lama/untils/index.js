// 功能1：定义全局事件
// 功能2：定义加载函数，框架已经定义好，只需需要手动在 app.loader.init 中添加 加载任务序列;
// 功能3：初始化app


$(function () {
  function initCommenEvent() {
    $('.btn-touchable').on('touchstart', function () {
      $(this).addClass('touched');
      if (app.audios && app.audios.aClick) {
        // app.audios.aClick.play();
      }
    });
    $('.btn-touchable').on('touchend', function () {
      $(this).removeClass('touched');
    });

    $('.d-share').click(function () {
      $(this).fadeOut(300);
      return false; // 阻止事件冒泡
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        app.bgm && app.bgm.toggleAudioMute(true, true);
      } else {
        app.bgm && app.bgm.toggleAudioMute(false, true);
      }
    });

  }

  /***********************************/
  function loading(showPageId, branch) {
    var timeout;
    var interval = 0;
    var flagFakeOver = 0;
    var processNum = 0;
    var randomStep = function () {
      var time = 50.0 + 0 | Math.random() * 500;
      timeout = setTimeout(function () {
        processNum += 1.0 + 0 | Math.random() * 5;
        if (processNum >= 79) {
          processNum = 79;
          flagFakeOver = 1;
        }
        setProcess(processNum);
        if (!flagFakeOver) {
          randomStep();
        } else {
          clearTimeout(timeout);
        }
      }, time);
    };
    var setProcess = function (n) {
      $('.p0-process').text(n + '%');
    };
    var fakePreload = function () {
      randomStep();
    };

    fakePreload();

    $('.cssloader').hide();
    $('.p0').show();

    app.loader.init({

      // 在manifest中定义加载序列
      manifest: [{
        id: 'p1',
        selector: '.p1 img',
        imgs: ['./untils/p1bg.jpg']
      }, {
        id: 'p2',
        selector: '.p2 img',
        imgs: ['./untils/p2bg.jpg']
      }, {
        id: 'p3',
        selector: '.p3 img',
        imgs: ['./untils/p3bg.jpg']
      }, {
        id: 'p4',
        selector: '.p4 img',
        imgs: []
      }, {
        id: 'p5',
        selector: '.p5 img',
        imgs: []
      }],


      onAllFrontImgLoaded: function (e) {
        clearInterval(interval);
        processNum = 80;
        flagFakeOver = 1;
        clearTimeout(timeout);

        interval = setInterval(function () {
          processNum += 3;
          if (processNum >= 100) {
            processNum = 100;
            clearInterval(interval);
            app.showPage(showPageId, branch);
          }
          setProcess(processNum);
        }, 20);
      },
    });
    app.loader.showPageNo = showPageId;
    app.loader.start('p' + showPageId);

  }

  /************************************/

  function initApp() {
    app.initPages();
    loading(1);
    app.common.initContentBox($('.content'), 5, 3);
    initCommenEvent();
  }

  initApp();
});
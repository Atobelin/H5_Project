app.pages[4] = (function () {

    var page = {
        init: init,
        onLoad: onLoad,
        onLeave: onLeave,
        dependingTask: 'p4',
        isFlipReady: false,
        hasBranch: true,
    };
    var p4ScrollH;
    var p4ContentH;
    var p4CanvasFlag = true;

    function init() {
        initEvents();
    }

    function initEvents() {
        $('.p4-content-li').click(function () {
            window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '宣言页', '选择性格宣言按钮']);
            $(this).addClass('p3-content-active').siblings().removeClass('p3-content-active');
            app.store.chooseTitle = $(this).attr('data-title');
        });
        $('.p4-next-btn').click(function () {
            if (p4CanvasFlag) {
                window._hmt && _hmt.push(['_trackEvent', app.store.enterType + '宣言页', '选择完成选择按钮']);
                p4CanvasFlag = false;
                setTimeout(function () {
                    p4CanvasFlag = true;
                }, 1000);
                var ajaxSendImageSuccess = function (resp) {
                    $('.p5-return').attr('src',resp.data.url);
                    $('.p5-background').css({'background':'url('+resp.data.url+') center no-repeat','-webkit-filter':'blur(10px)'});
                    app.showPage(5);
                };
                var ajaxSendImageError = function (resp) {
                    app.showToast('图片无法识别，请上传清晰的正脸照');
                    app.showPage(2);
                }
                var sendData={
                    image:app.store.imgUrl,
                    tag:app.store.posterNum,
                    text:app.store.chooseTitle
                }
                app.api.ajaxSendImage(sendData, ajaxSendImageSuccess, ajaxSendImageError);
            }

        });
        $('.p4-content-ul').scroll(function () {
            if ($('.p4-content-ul').scrollTop() + p4ContentH >= p4ScrollH - 10) {
                $('.p4-up, .p4-up-title').hide();
            } else {
                $('.p4-up, .p4-up-title').show();
            }
        });
    }

    function onLoad() {
        $('.p4-content-ul').scrollTop(0);
        setTimeout(function () {
            page.isFlipReady = true;
            p4ScrollH = $('.p4-content-ul ul').height();
            p4ContentH = $('.p4-content-ul').height();
        }, 1000);

    }

    function onLeave() {
        page.isFlipReady = false;
    }

    return page;
})();
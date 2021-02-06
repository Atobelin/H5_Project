// 初始化
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();
// 百度地图
// 百度地图API功能
var lng
var lat
var resultOrigin
var map = new BMap.Map("demo");
var point = new BMap.Point(108.95, 34.27); //地图初始中心点，加载地图定位点
map.centerAndZoom(point, 12);
// 创建地理编码实例      
var myGeo = new BMap.Geocoder();
// 根据坐标得到地址描述    
var geolocation = new BMap.Geolocation();
var gc = new BMap.Geocoder();
// loading
perFun()
audioAutoPlay();

function perFun() {
    var imgs = document.getElementsByTagName("img");
    var len = 0;
    var percent = $("#percent")
    var imgLength = imgs.length - 1
    for (var i = 0; i < imgs.length; i++) {
        if (imgs[i].complete) {
            len++;
            percent.html(Math.round(len * 100 / imgs.length) + "%")
            // 跳转到首页
            if (len == imgLength) {
                $(".page-loading").fadeOut(0)
                $(".js-page-1").fadeIn(300)
            }
        } else {
            imgs[i].onload = function () {
                len++;
                percent.html(Math.round(len * 100 / imgs.length) + "%")
                // 跳转到首页
                if (len == imgLength) {
                    $(".page-loading").fadeOut(0)
                    $(".js-page-1").fadeIn(300)
                }
            }
        }
    }
}
$(".music").click(function () {
    var audio = document.getElementById('bgm');
    if (audio.paused) {
        audio.play()
        $(this).addClass('rotatemusic');
    } else {
        audio.pause()
        $(this).removeClass('rotatemusic');
    }
});

function audioAutoPlay() {
    var audio = document.getElementById('bgm');
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
    audio.onended = function () {
        audio.currentTime = 0
        audio.play();
    }
}
// page-1
$(".js-go-page-2").click(function () {
    $(".js-page-1").fadeOut(0)
    $(".js-page-2").fadeIn(300)
})
// page-2
$(".js-back-page-1").click(function () {
    $(".js-page-2").fadeOut(0)
    $(".js-page-1").fadeIn(300)
})
$(".js-go-page-3").click(function () {
    $(".js-page-2").fadeOut(0)
    $(".js-page-3").fadeIn(300)
})
// page-3
$(".js-back-page-2").click(function () {
    $(".js-page-3").fadeOut(0)
    $(".js-page-2").fadeIn(300)
})
$(".js-go-page-4").click(function () {
    $(".js-page-3").fadeOut(0)
    $(".js-page-4").fadeIn(300)
})
$(".js-go-page-5").click(function () {
    $(".js-page-3").fadeOut(0)
    $(".js-page-5").fadeIn(300)
})
$(".js-go-other").click(function () {
    window.location.href = "http://ccai.caai.cn/mobile/"
})
$(".js-go-map").click(function () {
    geolocation.getCurrentPosition(function (r) { //定位结果对象会传递给r变量  

        if (this.getStatus() == BMAP_STATUS_SUCCESS) { //通过Geolocation类的getStatus()可以判断是否成功定位。  
            var pt = r.point;
            map.panTo(pt); //移动地图中心点
            console.log(pt)
            lng = pt.lng;
            lat = pt.lat;
            layer.closeAll('loading');
            myGeo.getLocation(new BMap.Point(lng, lat), function (result) {
                if (result) {
                    resultOrigin = result.addressComponents.city
                }
                console.log(result)
                window.location.href = 'http://api.map.baidu.com/direction?origin=latlng:' + lat + ',' + lng +
                    '|name:当前位置&origin_region=' + resultOrigin +
                    '&destination=latlng: 36.271629,120.063895 |name:方圆体育馆中心&destination_region=青岛市&mode=driving&&output=html&src=webapp.CCAI.CCAI'
            })
        } else {
            switch (this.getStatus()) {
                case 2:
                    layer.msg('位置结果未知 获取位置失败.');
                    break;
                case 3:
                    layer.msg('导航结果未知 获取位置失败..');
                    break;
                case 4:
                    layer.msg('非法密钥 获取位置失败.');
                    break;
                case 5:
                    layer.msg('对不起,非法请求位置  获取位置失败.');
                    break;
                case 6:
                    layer.msg('对不起,当前 没有权限 获取位置失败.');
                    break;
                case 7:
                    layer.msg('对不起,服务不可用 获取位置失败.');
                    break;
                case 8:
                    layer.msg('对不起,请求超时 获取位置失败.');
                    break;

            }
        }

    }, {
        enableHighAccuracy: true
    })
})
// page-4
$(".js-back-page-3-4").click(function () {
    $(".js-page-4").fadeOut(0)
    $(".js-page-3").fadeIn(300)
})
// page-5
$(".js-back-page-3-5").click(function () {
    $(".js-page-5").fadeOut(0)
    $(".js-page-3").fadeIn(300)
})
$(".js-data-1").click(function () {
    $(".js-data-text-2").fadeOut(0)
    $(".js-data-text-1").fadeIn(300)
    $(".js-data-active1").fadeOut()
    $(".js-data-active2").fadeIn(300)
})
$(".js-data-2").click(function () {
    $(".js-data-text-1").fadeOut(0)
    $(".js-data-text-2").fadeIn(300)
    $(".js-data-active2").fadeOut()
    $(".js-data-active1").fadeIn(300)
})
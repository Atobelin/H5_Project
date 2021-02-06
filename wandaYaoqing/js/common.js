// 自适应REM
window.onload = function() {
    /*661代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(661, 100)
};
window.onresize = function() {
    getRem(661, 100)
};
getRem(661, 100);

function getRem(pwidth, prem) {
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth / pwidth * prem + "px";
}



// 等待6秒首页消失
setTimeout(function() {
    $(".js-index").fadeOut(600)
    $(".js-p3").fadeIn(600)
}, 8000);
$(".js-back").click(function() {
    $(".js-p2").siblings('section').fadeOut(600)
    $(".js-p2").fadeIn(600)
})
// 关于加速器
$(".js-go-about").click(function() {
    $(".js-p2").fadeOut(600)
    $(".js-about").fadeIn(600)
})
// 日程安排
$(".js-go-schedule").click(function() {
    $(".js-p2").fadeOut(600)
    $(".js-schedule").fadeIn(600)
})
// 活动介绍
$(".js-go-p3").click(function() {
    $(".js-p2").fadeOut(600)
    $(".js-p3").fadeIn(600)
})
// 初创公司
$(".js-go-company").click(function() {
    $(".js-p2").fadeOut(600)
    $(".js-company").fadeIn(600)
});
// 精彩时刻
$(".js-go-time").click(function() {
    $(".js-p2").fadeOut(600)
    $(".js-time").fadeIn(600)
});
// 回顾往期
$(".js-go-past").click(function() {
    $(".js-p2").fadeOut(600)
    console.log("sss")
    $(".js-past").fadeIn(600)
    // 轮播
    var mySwiper = new Swiper('.swiper-box-1 .swiper-container', {
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        loop: true,
        // 如果需要分页器
        pagination: {
            el: 'swiper-box-1 .swiper-pagination',
        },
        autoHeight: true, //高度随内容变化
    })
    var mySwiper2 = new Swiper('.swiper-box-2 .swiper-container', {
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        loop: true,
        // 如果需要分页器
        pagination: {
            el: 'swiper-box-2 .swiper-pagination',
        },
        autoHeight: true, //高度随内容变化
    })
})


// 地图
$(".js-tomap").click(function() {
    $(".js-schedule").fadeOut(600)
    $(".map").fadeIn(600)
});
$(".js-back-3").click(function() {
    $(".map").fadeOut(600)
    $(".js-schedule").fadeIn(600)
});
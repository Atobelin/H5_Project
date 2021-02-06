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


$(".js-back").click(function() {
	$(".js-p2").siblings('section').fadeOut(600)
	$(".js-p2").fadeIn(600)
})
$(".js-back-2").click(function() {
	$(".js-p2").fadeOut(600)
	$(".js-p3").fadeIn(600)
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
	var mySwiper3 = new Swiper('.swiper-box-3 .swiper-container', {
		autoplay: {
			delay: 5000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		loop: true,
		// 如果需要分页器
		pagination: {
			el: 'swiper-box-3 .swiper-pagination',
		},
		autoHeight: true
	})
});
// 精彩时刻
$(".js-go-time").click(function() {
	//$(".js-p2").fadeOut(600)
	//$(".js-time").fadeIn(600)
        window.location.href = "http://wechat.wexiangce.com/Home/Album/sharephoto/id/3667/mid/24285/p/02297c964f205503fb3398a4af.html";
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

var surl = "http://hpro.ruohua.club/hapi/";
$.ajax({
    type: 'post',
    url: surl+"share",
    data:{"url":location.href},
    dataType: "json",
    success: function (data){
        console.log(data);

        if (data == null) {
            return;
        }

        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data['appId'], // 必填，公众号的唯一标识
            timestamp: data['timestamp'], // 必填，生成签名的时间戳
            nonceStr: data['nonceStr'], // 必填，生成签名的随机串
            signature: data['signature'],// 必填，签名
            url: data['url'],
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
        });
        initShar();
    },
    error: function (data){
        console.log("加载系统变量失败，请刷新重试","登录错误");
    }
});

function initShar() {
    wx.onMenuShareTimeline({
        title: '赋能，智享未来',
        desc: '万达创新加速器第二期项目终选日邀请函',
        link: 'http://hpro.ruohua.club/yaoqing/index.html',
        imgUrl: 'http://hpro.ruohua.club/yaoqing/img/share_logo.png',
        success: shar
    });
    wx.onMenuShareAppMessage({
        title: '赋能，智享未来',
        desc: '万达创新加速器第二期项目终选日邀请函',
        link: 'http://hpro.ruohua.club/yaoqing/index.html',
        imgUrl: 'http://hpro.ruohua.club/yaoqing/img/share_logo.png',
        success: shar
    });
}

wx.ready(initShar);
var shar = function(){
    // console.log("分享了")
}

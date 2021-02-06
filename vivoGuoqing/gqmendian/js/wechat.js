$(function () {
	var myurl = location.href;
	var title = '中秋万店礼遇'; //标题
	var desc = '快来定制属于你门店的礼遇吧！'; //描述
	var imgUrl = 'http://img.songjiang.xyz/share/share.jpg'; //分享图片url
	$.ajax({
		type: 'post',
		url: "https://klingyang.com/api/share/getConfig",
		data: {
			"url": myurl
		},
		dataType: "json",
		success: function (data) {
			wx.config({
				debug: false,
				appId: data.appId,
				timestamp: data.timestamp,
				nonceStr: data.nonceStr,
				signature: data.signature,
				jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
			})
			initShar();
		},
		error: function (data) {
			console.log("加载系统变量失败，请重新登录", "登录错误");
		}
	});

	function initShar() {
		wx.onMenuShareTimeline({
			title: title,
			desc: desc,
			link: myurl,
			imgUrl: imgUrl,
			success: function () {
				shar2();
			}
		});
		wx.onMenuShareAppMessage({
			title: title,
			desc: desc,
			link: myurl,
			imgUrl: imgUrl,
			success: function () {
				shar();
			}
		});
	}
	wx.ready(initShar);

	function shar() {
		// 分享成功后执行
		// alert('分享成功了，不要乱点没啥的。');
	}

	function shar2() {}
})
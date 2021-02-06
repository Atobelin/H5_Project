
// 等待5s loading消失
$(".js-qiandao").click(function() {
	var tel = $("#telphone").val()
	if(tel == ''){
		alert("请输入手机号码")
		return
	}
	if(!(/^1[34578]\d{9}$/.test(tel))){ 
		alert("手机号输入有误")
		return
	}
	$.ajax({
		url:"http://hong.bjsidao.com/sinopec/sign",
		type:"post",
		dataType:"json",
		data:{
			phone: tel,
			openid: openid
		},
		success:function (res){
			if(res.code == 100){
				if(res.room == ''){
					var html = '<p>尊敬的'+res.name+'，欢迎你的到来。</p><p>请到前台办理入住。</p>'
				}else{
					var html = '<p>尊敬的'+res.name+'，欢迎你的到来。</p><p>您的酒店房间号为'+res.room+'，请到前台办理入住。</p>'
				}
				$(".textnew").html(html)
				$(".js-phone").fadeOut(600)
				$(".js-success").fadeIn(600)
			}else{
				$(".js-phone").fadeOut(600)
				$(".js-fairly").fadeIn(600)
			}
		}
	});
});
$(".js-huoqu").click(function() { 
	$(".js-success").fadeOut(600)
	$(".js-hyts").fadeIn(600)
});
$(".js-back").click(function() {
	$(this).parent().fadeOut(600)
	$(".js-hyts").fadeIn(600)
});
$(".js-go-yc").click(function() {
	$(".js-hyts").fadeOut(600)
	$(".js-yc").fadeIn(600)
	var mySwiper = new Swiper ('.yc-swiper', {
					direction: 'vertical',
	                // 如果需要前进后退按钮
	                navigation: {
	                  nextEl: '.zl-swiper .swiper-button-next',
	                  prevEl: '.zl-swiper .swiper-button-prev',
	                },
	                on:{
				      init: function(){
				        swiperAnimateCache(this); //隐藏动画元素 
				        swiperAnimate(this); //初始化完成开始动画		        
				        $('.tlt_swiper').textillate('in')
				      }, 
			            slideChangeTransitionStart: function() {
										$('.tlt_swiper').textillate('in')
			                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画			                
			            }          
				    }
	          })	

});
$(".js-go-zl").click(function() {
	$(".js-hyts").fadeOut(600)
	$(".js-zl").fadeIn(600)
	var mySwiper = new Swiper ('.zl-swiper', {
	                // 如果需要前进后退按钮
	                loop: true,
	                // 如果需要前进后退按钮
	                navigation: {
	                  nextEl: '.zl-swiper .swiper-button-next',
	                  prevEl: '.zl-swiper .swiper-button-prev',
	                },
	          })	
});
$(".js-go-tsh").click(function() {
	$(".js-hyts").fadeOut(600)
	$(".js-tsh").fadeIn(600)
var mySwiper = new Swiper ('.tsh-swiper', {
                loop: true,
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.tsh-swiper .swiper-button-next',
                  prevEl: '.tsh-swiper .swiper-button-prev',
                },
          })   	
});
$(".js-go-ly").click(function() {
	$(".js-hyts").fadeOut(600)
	$(".js-ly").fadeIn(600)
	$.ajax({
		url:"http://hong.bjsidao.com/sinopec/chat-list",
		type:"post",
		dataType:"json",
		data:{
			openid: openid
		},
		success:function (res){
			$('.dian').addClass('anidian')
			$('.bottomitem').removeClass('active')
			$('.bottomitem').first().addClass('active')
			updatechat(res.data.list)
		}
	});
});
function updatechat (list) {
	var html = ''
	for( var i=0; i<list.length; i++){
		html += '<li>'
                +'<img src="'+ list[i].headimg +'" alt="" class="person">'
                +'<div class="text">'
                    +'<p>'+ list[i].nickname +' '+ list[i].time +'</p>'
                    +'<p>'+ list[i].content +'</p>'
                +'</div>'
								+'<div class="zannum">'+ list[i].zancount +'</div>'
                +'<img onclick="dianzan(this)" data-id="'+ list[i].id +'" src="'+ (list[i].iszan == 0?'img/08-ly/dislike.png':'img/08-ly/like.png') +'" alt="" class="love">'
            +'</li>'
	}
	$(".ly-ul").html(html);
	$(".ly-ul").scrollTop(10000*list.length)
}
$(".js-go-hsse").click(function() {
	$(".js-hyts").fadeOut(600)
	$(".js-hsse").fadeIn(600)
});
$(".js-go-ditu").click(function() {
	$(".map").fadeIn(600)
});
$(".js-back-3").click(function() {
	$(".map").fadeOut(600)
});
$("#fabuliuyan").click(function () {
	var liuyan = $("#liuyan").val()
	if(liuyan == ""){
		return
	}
	$.ajax({
		url:"http://hong.bjsidao.com/sinopec/chat",
		type:"post",
		dataType:"json",
		data:{
			content: liuyan,
			openid: openid,
			city: city
		},
		success:function (res){
			if(res.code == 100){
				$('.bottomitem').removeClass('active')
				$('.bottomitem').first().addClass('active')
				$("#liuyan").val("")
				$.ajax({
					url:"http://hong.bjsidao.com/sinopec/chat-list",
					type:"post",
					dataType:"json",
					data:{
						openid: openid
					},
					success:function (res){
						updatechat(res.data.list)
						dian(cityclass)
						var html = '<div class="line-box">'
								+ '<img src="img/08-ly/line-box.png" alt="" class="line">'
								+ '<div class="flex">'
								+ '<img src="'+ res.data.list[res.data.list.length-1].headimg +'" alt="" class="person">'
								+ '<div class="text">'
								+ '<p>' + res.data.list[res.data.list.length-1].nickname +'</p>'
								+ '<p class="name">' + res.data.list[res.data.list.length-1].time +'</p>'
								+ '<p>' + res.data.list[res.data.list.length-1].content +'</p>'
								+ '</div></div></div>'
						$("."+cityclass + " .updatehtml").html(html)
					}
				});
			}
		}
	});
})
function dianzan (that){
	var id = $(that).data("id")
	$.ajax({
		url:"http://hong.bjsidao.com/sinopec/zan",
		type:"post",
		dataType:"json",
		data:{
			openid: openid,
			chatid: id
		},
		success:function (res){
			if(res.code == 100){
				$.ajax({
					url:"http://hong.bjsidao.com/sinopec/chat-list",
					type:"post",
					dataType:"json",
					data:{
						openid: openid
					},
					success:function (res){
						updatechat(res.data.list)
					}
				});
			}
		}
	});
}
$(".bottomitem").click(function () {
	$(this).siblings().removeClass('active')
	$(this).addClass('active')
	var cityi = $(this).data('city')
	if(cityi == '我的'){
		cityi = city
	}
	var cityiclass = 'ly-box'
	if(cityi.indexOf('北京')>-1){
		cityiclass='beijing'
	}
	if(cityi.indexOf('东营')>-1){
		cityiclass='dongying'
	}
	if(cityi.indexOf('淄博')>-1){
		cityiclass='zibo'
	}
	if(cityi.indexOf('青岛')>-1){
		cityiclass='qingdao'
	}
	if(cityi.indexOf('济南')>-1){
		cityiclass='jinan'
	}
	if(cityi.indexOf('濮阳')>-1){
		cityiclass='fuyang'
	}
	if(cityi.indexOf('南阳')>-1){
		cityiclass='nanyang'
	}
	if(cityi.indexOf('洛阳')>-1){
		cityiclass='luoyang'
	}
	if(cityi.indexOf('郑州')>-1){
		cityiclass='zhengzhou'
	}
	if(cityi.indexOf('潜江')>-1){
		cityiclass='qianjiang'
	}
	if(cityi.indexOf('武汉')>-1){
		cityiclass='wuhan'
	}
	if(cityi.indexOf('荆门')>-1){
		cityiclass='jingmen'
	}
	if(cityi.indexOf('上海')>-1){
		cityiclass='shanghai'
	}
	if(cityi.indexOf('扬州')>-1){
		cityiclass='yangzhou'
	}
	if(cityi.indexOf('仪征')>-1){
		cityiclass='yizheng'
	}
	if(cityi.indexOf('南京')>-1){
		cityiclass='nanjing'
	}
	if(cityi.indexOf('徐州')>-1){
		cityiclass='xuzhou'
	}
	if(cityi.indexOf('乌鲁木齐')>-1){
		cityiclass='wulumuqi'
	}
	if(cityi.indexOf('成都')>-1){
		cityiclass='chengdu'
	}
	if(cityi.indexOf('茂名')>-1){
		cityiclass='maoming'
	}
	if(cityi.indexOf('广州')>-1){
		cityiclass='guangzhou'
	}
	if(cityi.indexOf('宁波')>-1){
		cityiclass='ningbo'
	}
	if(cityi.indexOf('杭州')>-1){
		cityiclass='hangzhou'
	}
	if(cityi.indexOf('安庆')>-1){
		cityiclass='anqing'
	}
	if(cityi.indexOf('阿克苏')>-1){
		cityiclass='akesu'
	}
	dian(cityiclass)
	$.ajax({
		url:"http://hong.bjsidao.com/sinopec/chat-list",
		type:"post",
		dataType:"json",
		data:{
			openid: openid,
			city: cityi
		},
		success:function (res){
			updatechat(res.data.list)
		}
	});
})
function dian (classi) {
	$('.dian').removeClass('anidian')
	$('.'+classi + ' .dian').addClass('anidian')
}
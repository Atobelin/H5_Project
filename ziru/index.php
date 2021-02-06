<!DOCTYPE html>
<html lang="zh-cn">

	<head>
		<meta charset="UTF-8">
		<?php include "auth.php" ?>
		<script type="text/jscript">
        var openid = "<?php echo $userinfo['openid'];?>";      //微信openid
        var username = "<?php echo $userinfo['nickname'];?>";  //微信昵称
        <!--alert(openid);-->
        <!--alert(username);-->
		</script>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<meta http-equiv="X-UA-Compatible" content="UTF-8">
		<title>自如</title>
		<meta name="keywords" content="">
		<meta name="description" content="">
		<!-- 公共样式 -->
		<link rel="stylesheet" href="css/animate.css">
		<link href="https://cdn.bootcss.com/Swiper/4.4.6/css/swiper.min.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/index.css?v=2.0">
		<!-- 独立样式 -->
	</head>

	<body> 
		<script>
			// 自适应REM
			window.onload = function () {
				getRem(640, 100)
			};
			window.onresize = function () {
				getRem(640, 100)
			};
			getRem(640, 100);

			function getRem(pwidth, prem) {
				var html = document.getElementsByTagName("html")[0];
				var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
				html.style.fontSize = oWidth / pwidth * prem + "px";
			}
		</script>
		<img class="music js-music animated rotatemusic infinite music-open active" src="imgs/music-o.png">
		<img class="music music-close" src="imgs/music-c.png">
		<audio id="bgm" preload="auto" src="music/music.mp3"></audio>		
		<section class="loading">
			<!-- <img src="imgs/loading-1.png" alt="" class="img-1"> -->
			<img src="imgs/loading.gif" alt="" class="img-2">
			<p class="text">加载中...</p>
		</section>
		<section class="page-1" style="display: none;">
			<img src="imgs/page-1-bg.png" alt="" class="bg">
			<div class="ruler js-ruler">活动规则</div>
			<div class="ruler-box js-ruler-box">
				<div class="box">
					<div class="relative">
						<img src="imgs/close.png" alt="" class="close js-close-ruler">
						<img src="imgs/ruler.png" alt="" class="img">						
					</div>
				</div>
			</div>
			<div class="share-box js-share-box" style="display: none;">
				<img src="imgs/share.png" alt="" class="img">
			</div>
			<div class="get">
				<div class="relative">
					<img src="imgs/page-1-get-1.png" alt="" class="g-1">
					<img src="imgs/page-1-get-2.png" alt="" class="g-2 shan animated infinite">
					<div class="text text-1 js-share" style="display: none;">邀请好友助力点亮</div>
					<div class="text text-2 js-go-page-3" style="display: none;">获取大礼包</div>
				</div>
			</div>
			<div class="swiper-flex js-index-helps-box">
				<div class="swiper-container swiper-container-page-1 swiper-no-swiping">
				    <div class="swiper-wrapper js-index-helps">
				    </div>
				</div>				
			</div>
			<!-- 点亮 -->
			<img src="imgs/page-1-c-1.png" alt="" class="c-1 c-img">
			<img src="imgs/page-1-c-2.png" alt="" class="c-2 c-img">
			<img src="imgs/page-1-c-3.png" alt="" class="c-3 c-img">
			<img src="imgs/page-1-c-4.png" alt="" class="c-4 c-img">
			<img src="imgs/page-1-c-5.png" alt="" class="c-5 c-img">
		</section>
		<section class="page-2" style="display: none">
			<img src="imgs/page-2-bg.png" alt="" class="bg">
			<img src="imgs/page-2-img-1.png" alt="" class="top-img">
			<div class="people-box js-people-box">
			</div>
			<div class="ruler js-ruler">活动规则</div>
			<div class="ruler-box js-ruler-box" style="display: none;">
				<div class="box">
					<div class="relative">
						<img src="imgs/close.png" alt="" class="close js-close-ruler">
						<img src="imgs/ruler.png" alt="" class="img">						
					</div>
				</div>
			</div>	
			<div class="get">
				<div class="relative">
					<img src="imgs/page-1-get-1.png" alt="" class="g-1">
					<img src="imgs/page-1-get-2.png" alt="" class="g-2 shan animated infinite">
					<div class="text text-1 js-play">我也要玩</div>
				</div>
			</div>	
			<!-- 点-->
			<div class="l-box l-box-1">
				<div class="relative">
					<img src="imgs/page-1-c-1.png" alt="" class="c-1 c-img js-c-1">
					<img src="imgs/d1-2.png" alt="" class="js-d1-2 d1-2 d-img shan-1 animated infinite">
					<div class="dian-box js-dian-box" data-id="1"></div>
				</div>
			</div>
			<div class="l-box l-box-2">
				<div class="relative">
					<img src="imgs/page-1-c-2.png" alt="" class="c-2 c-img js-c-2">
					<img src="imgs/d2-2.png" alt="" class="js-d2-2 d2-2 d-img shan-1 animated infinite">
					<div class="dian-box js-dian-box" data-id="2"></div>
				</div>
			</div>			
			<div class="l-box l-box-3">
				<div class="relative">
					<img src="imgs/page-1-c-3.png" alt="" class="c-3 c-img js-c-3">
					<img src="imgs/d3-2.png" alt="" class="js-d3-2 d3-2 d-img shan-1 animated infinite">
					<div class="dian-box js-dian-box" data-id="3"></div>
				</div>
			</div>			
			<div class="l-box l-box-4">
				<div class="relative">
					<img src="imgs/page-1-c-4.png" alt="" class="c-4 c-img js-c-4">
					<img src="imgs/d4-2.png" alt="" class="js-d4-2 d4-2 d-img shan-1 animated infinite">
					<div class="dian-box js-dian-box" data-id="4"></div>
				</div>
			</div>			
			<div class="l-box l-box-5">
				<div class="relative">
					<img src="imgs/page-1-c-5.png" alt="" class="c-5 c-img js-c-5">
					<img src="imgs/d5-2.png" alt="" class="js-d5-2 d5-2 d-img shan-1 animated infinite">
					<div class="dian-box js-dian-box" data-id="5"></div>
				</div>
			</div>	
			<div class="swiper-flex js-index-helps-box">
				<div class="swiper-container swiper-container-page-2 swiper-no-swiping">
				    <div class="swiper-wrapper js-index-helps">
				    </div>
				</div>				
			</div>					
		</section>		
		<section class="page-3" style="display: none;">
			<img src="imgs/page-3-1.png" alt="" class="top-img">
			<div class="ruler js-back-index" style="width: 0.75rem">返回</div>
			<!-- <div class="ruler">返回</div> -->
			<div class="list-box">
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-1.png" alt="" class="text-img" style="width: 1.1rem;">
					</div>
					<div class="right-box">
						<p>搬家券-10元&30元</p>
						<div class="lq js-zr js-zr-1" data-id="1"></div>
					</div>
				</div>
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-1.png" alt="" class="text-img" style="width: 1.1rem;">
					</div>
					<div class="right-box">
						<p>保洁券-20元</p>
						<div class="lq js-zr js-zr-2" data-id="2"></div>
					</div>
				</div>
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-1.png" alt="" class="text-img" style="width: 1.1rem;">
					</div>
					<div class="right-box">
						<p>民宿券-满6000减125</p>
						<div class="lq js-zr js-zr-3" data-id="3"></div>
					</div>
				</div>				
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-1.png" alt="" class="text-img" style="width: 1.1rem;">
					</div>
					<div class="right-box">
						<p>优品通用券</p>
						<div class="lq js-zr js-zr-4" data-id="4"></div>
					</div>
				</div>		
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-6.png" alt="" class="text-img" style="width: 100%;">
					</div>
					<div class="right-box">
						<p>蜂鸟跑腿红包</p>
						<div  class="lq js-fn">领取</div>
					</div>
				</div>											
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-2.png" alt="" class="text-img" style="width: 1.01rem;">
					</div>
					<div class="right-box">
						<p>春秋旅游网540元旅行红包</p>
						<div  class="lq js-cq">领取</div>
					</div>
				</div>					
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-3.png" alt="" class="text-img" style="width: 1.5rem;">
					</div>
					<div class="right-box">
						<p>叮咚猪年福气水果礼</p>
						<div  class="lq js-dd">领取</div>
					</div>
				</div>					
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-4.png" alt="" class="text-img" style="width: 1.12rem;">
					</div>
					<div class="right-box">
						<p>自如用户专享福利</p>
						<div  class="lq js-mf">领取</div>
					</div>
				</div>					
				<div class="list">
					<div class="left-box">
						<img src="imgs/page-3-text-5.png" alt="" class="text-img" style="width: 1.02rem;">
					</div>
					<div class="right-box">
						<p>屈臣氏优惠券</p>
						<div  class="lq js-qcs">领取</div>
					</div>
				</div>							
			</div>
			<!-- 礼品弹出框 -->
			<div class="tan-cover js-gift-tan" style="display: none;">
				<div class="tan-box">
					<div class="relative">
						<img src="imgs/close.png" alt="" class="js-gift-close gift-close">
						<div class="tan-box-overflow">
							<p class="title js-gift-tan-title"></p>
							<div class="code-box-list-box js-code-box-list-box">
															
							</div>							
							<p class="text-title">使用方法</p>
							<p class="text js-gift-tan-text"></p>
							<p class="text-title">使用须知</p>
							<div class="text-box">
								<p class="text-list js-gift-tan-text-box"></p>
							</div>					
						</div>					
					</div>
				</div>					
			</div>				
		</section>
		<!-- 提示框 -->
		<div class="ts-box js-ts-box" style="display: none">
			
		</div>
		<!-- 公共JS -->
		<script src="https://cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>		
		<script src="https://cdn.bootcss.com/Swiper/4.4.6/js/swiper.min.js"></script>
		<script src="https://cdn.bootcss.com/layer/2.3/layer.js"></script>
		<script src="js/index.js"></script>
        <script src="js/wechat.js?v=2.10"></script>
        <script src="js/jweixin-1.0.0.js"></script>

		<script>
			// var openid = "obIGZt-ai_cCtmfeDlMUQaQUmtVY"
			var help_openid = 'asdaaaxx'
			var addr_1,addr_2,addr_3,addr_4,addr_5	
			// 音乐播放	
			audioAutoPlay();
			$(".js-music").click(function() {
				var audio = document.getElementById('bgm');
				if (audio.paused) {
					audio.play();
					$(".music-open").addClass('active')
					$(".music-close").removeClass('active')		
				} else {
					audio.pause();
					$(".music-close").addClass('active')
					$(".music-open").removeClass('active')					
				}
			});	
			function audioAutoPlay() {
				var audio = document.getElementById('bgm');
				audio.play();
				document.addEventListener("WeixinJSBridgeReady", function() {
					audio.play();
				}, false);
				audio.onended = function() {
					audio.currentTime = 0
					audio.play();
				}
			}									
			function GetQueryString(name)
			{
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);
			     if(r!=null)return  unescape(r[2]); return null;
			}
			if (GetQueryString("openid")==null || GetQueryString("openid") == openid ) {
				perFun()
			}else{
				$(".loading").fadeOut(0)
				$(".page-2").fadeIn(300)
				// 获取头像和助力人姓名
                var share_openid = GetQueryString("openid");
				$.ajax({
					url: 'https://klingyang.com/api/zirue/getuserinfo',
					type: 'post',
					data: {
						openid:share_openid
						// openid:'obIGZt5Hx_9mJpVhh_FXJYHQbQ1M'
					},
					success: function(res) {
						console.log(res);
						// 点亮标识
						addr_1 = res.userinfo.addr_1
						addr_2 = res.userinfo.addr_2
						addr_3 = res.userinfo.addr_3
						addr_4 = res.userinfo.addr_4
						addr_5 = res.userinfo.addr_5
						if (addr_1==1) {
							$(".js-c-1").addClass('active')
							$(".js-d1-2").fadeOut(0)
						}
						if (addr_2==1) {
							$(".js-c-2").addClass('active')
							$(".js-d2-2").fadeOut(0)
						}					
						if (addr_3==1) {
							$(".js-c-3").addClass('active')
							$(".js-d3-2").fadeOut(0)
						}					
						if (addr_4==1) {
							$(".js-c-4").addClass('active')
							$(".js-d4-2").fadeOut(0)
						}					
						if (addr_5==1) {
							$(".js-c-5").addClass('active')
							$(".js-d5-2").fadeOut(0)
						}	
						// 助力好友
						var helps = res.helps
						if (helps == '') {
							$(".js-index-helps-box").fadeOut(0)
						}else{
							for(var i in helps){
							  $(".js-index-helps").append('<div class="swiper-slide">好友'+helps[i]+'已帮TA点亮自如福利</div>')
							}
							initSwiperShare()						
						}							
						// 用户头像		
						var headimgurl = res.userinfo.headimgurl
						$(".js-people-box").append('<img src="'+headimgurl+'" alt="">')	
					},
					error: function(data) {
						console.log('请求超时');
					}
				})
			}						
			// 活动规则
			$(".js-ruler").click(function() {
				$(".js-ruler-box").fadeIn(300)
			});
			$(".js-close-ruler").click(function() {
				$(".js-ruler-box").fadeOut(0)
			});
			// 邀请好友助力
			$(".js-share").click(function(){
				$(".js-share-box").fadeIn(300)
			})
			$(".js-share-box").click(function(){
				$(this).fadeOut(0)
			})
			// 获取大礼包
			$(".js-go-page-3").click(function() {
				$(".page-1").fadeOut(0)
				$(".page-3").fadeIn(300)				
			});
			$(".js-zr").click(function () {
				var type_id = $(this).data('id')
				console.log(type_id);
				var that = this
				$.ajax({
					url: 'https://klingyang.com/api/zirue/getprize',
					type: 'post',
					data: {
						// openid:'obIGZtzeYC3Q7cBujuLmj4n1xOR8',
						openid:openid,
						type_id:type_id
					},
					success: function(res) {
						console.log(res);
						if (res.code==0) {
							$(".js-code-box-list-box").html('')
							$(".js-gift-tan-title").html(res.head)
							// $(".js-gift-tan-code-number").html(res.card_num)
							$(".js-gift-tan-text").html(res.use_method)
							$(".js-gift-tan-text-box").html(res.use_notice)
							for(var i = 0;i<res.cards.length;i++){
								var html = $('<div class="code-box-list"><p class="code-title">'+res.cards[i].title+'</p><div class="code-box"><p class="code-number js-gift-tan-code-number">'+res.cards[i].card_num+'</p></div></div>').appendTo('.js-code-box-list-box')			
							}
							$(".js-gift-tan").fadeIn(300)
							$(that).html('已领取')						
						}else if (res.code == '-3') {
							$(".js-code-box-list-box").html('')
							$(".js-gift-tan-title").html(res.head)
							// $(".js-gift-tan-code-number").html(res.card_num)
							$(".js-gift-tan-text").html(res.use_method)
							$(".js-gift-tan-text-box").html(res.use_notice)
							for(var i = 0;i<res.cards.length;i++){
								var html = $('<div class="code-box-list"><p class="code-title">'+res.cards[i].title+'</p><div class="code-box"><p class="code-number js-gift-tan-code-number">'+res.cards[i].card_num+'</p></div></div>').appendTo('.js-code-box-list-box')			
							}
							$(".js-gift-tan").fadeIn(300)					
						}else{
							// layer.msg(res.msg, {time:1000})
							$(".js-ts-box").html(res.msg)
							$(".js-ts-box").fadeIn(300)
							setTimeout(function(){ $(".js-ts-box").fadeOut(300) },1200);							
						}
					},
					error: function(data) {
						console.log('请求超时');
					}
				})				
			})
			$(".js-gift-close").click(function () {
				$(".js-gift-tan").fadeOut(0)
			})
			$(".js-fn").click(function() {
				window.location.href = "https://pt.ele.me/paotui/h5/h5marketing#pageData=%7B%22activity_id%22%3A%22ELTQ1MzkwNA%253D%253D%22%2C%22source%22%3A%22boqi%22%7D";
			});			
			$(".js-cq").click(function() {
				window.location.href = "http://pages.springtour.com/Special/ms190131lx/index.aspx?utm_medium=pr&utm_campaign=xianshang&utm_source=zirus";
			});
			$(".js-dd").click(function() {
				window.location.href = "https://maicai.m.ddxq.mobi/event/?code=6Qjoo";
			});			
			$(".js-mf").click(function() {
				window.location.href = "https://w.mafengwo.cn/sales_promotion/m/promotion/114";
			});
			$(".js-qcs").click(function() {
				window.location.href = "http://was.ink/s/8DvhQpo42";
			});
			function perFun() {
				var imgs = document.getElementsByTagName("img");
				var len = 0;
				var percent = document.getElementById("percent");
				var imgLength = imgs.length - 1
				for (var i = 0; i < imgs.length; i++) {
					if (imgs[i].complete) {
						len++;
						// document.getElementById("percent").style.width = Math.round(len * 100 / imgs.length) + "%"
						// console.log(len)
						// 跳转到首页
						if (len == imgLength) {
							$.ajax({
								url: 'https://klingyang.com/api/zirue/getuserinfo',
								type: 'post',
								data: {
									// openid:'obIGZtzeYC3Q7cBujuLmj4n1xOR8'
									openid:openid
								},
								success: function(res) {
									console.log(res);
									// 点亮标识
									addr_1 = res.userinfo.addr_1
									addr_2 = res.userinfo.addr_2
									addr_3 = res.userinfo.addr_3
									addr_4 = res.userinfo.addr_4
									addr_5 = res.userinfo.addr_5
									if (addr_1==1) {
										$(".c-1").fadeIn(300)
									}
									if (addr_2==1) {
										$(".c-2").fadeIn(300)
									}					
									if (addr_3==1) {
										$(".c-3").fadeIn(300)
									}					
									if (addr_4==1) {
										$(".c-4").fadeIn(300)
									}					
									if (addr_5==1) {
										$(".c-5").fadeIn(300)
									}			
									// 是否已全部点亮
									if (res.userinfo.is_all == 1) {
										$(".js-go-page-3").fadeIn(0)
										$(".loading").fadeOut(0)
										$(".page-3").fadeIn(300)
										if (res.userinfo.prize_id1==1) {
											$(".js-zr-1").html("已领取")
										}else{
											$(".js-zr-1").html('领取')
										}
										if (res.userinfo.prize_id2==1) {
											$(".js-zr-2").html("已领取")
										}else{
											$(".js-zr-2").html('领取')
										}										
										if (res.userinfo.prize_id3==1) {
											$(".js-zr-3").html("已领取")
										}else{
											$(".js-zr-3").html('领取')
										}										
										if (res.userinfo.prize_id4==1) {
											$(".js-zr-4").html("已领取")
										}else{
											$(".js-zr-4").html('领取')
										}										
									}else{
										$(".js-share").fadeIn(0)
										$(".loading").fadeOut(0)
										$(".page-1").fadeIn(300)										
									}
									// 助力好友
									var helps = res.helps
									if (helps == null) {
										$(".js-index-helps-box").fadeOut(0)
									}else{
										for(var i in helps){
										  $(".js-index-helps").append('<div class="swiper-slide">好友'+helps[i]+'帮你点亮自如福利</div>')
										}		
										initSwiper()					
									}		
								},
								error: function(data) {
									console.log('请求超时');
								}
							})													
						}
					} else {
						imgs[i].onload = function() {
							len++;
							// document.getElementById("percent").style.width = Math.round(len * 100 / imgs.length) + "%"
							// console.log(len)
							// 跳转到首页
							if (len == imgLength) {
								$.ajax({
									url: 'https://klingyang.com/api/zirue/getuserinfo',
									type: 'post',
									data: {
										// openid:'obIGZtzeYC3Q7cBujuLmj4n1xOR8'
										openid: openid
									},
									success: function(res) {
										console.log(res);
										// 点亮标识
										addr_1 = res.userinfo.addr_1
										addr_2 = res.userinfo.addr_2
										addr_3 = res.userinfo.addr_3
										addr_4 = res.userinfo.addr_4
										addr_5 = res.userinfo.addr_5
										if (addr_1==1) {
											$(".c-1").fadeIn(300)
										}
										if (addr_2==1) {
											$(".c-2").fadeIn(300)
										}					
										if (addr_3==1) {
											$(".c-3").fadeIn(300)
										}					
										if (addr_4==1) {
											$(".c-4").fadeIn(300)
										}					
										if (addr_5==1) {
											$(".c-5").fadeIn(300)
										}			
										// 是否已全部点亮
										if (res.userinfo.is_all == 1) {
											$(".js-go-page-3").fadeIn(0)
											$(".loading").fadeOut(0)
											$(".page-3").fadeIn(300)
											if (res.userinfo.prize_id1==1) {
												$(".js-zr-1").html("已领取")
											}else{
												$(".js-zr-1").html('领取')
											}
											if (res.userinfo.prize_id2==1) {
												$(".js-zr-2").html("已领取")
											}else{
												$(".js-zr-2").html('领取')
											}										
											if (res.userinfo.prize_id3==1) {
												$(".js-zr-3").html("已领取")
											}else{
												$(".js-zr-3").html('领取')
											}										
											if (res.userinfo.prize_id4==1) {
												$(".js-zr-4").html("已领取")
											}else{
												$(".js-zr-4").html('领取')
											}
										}else{
											$(".js-share").fadeIn(0)
											$(".loading").fadeOut(0)
											$(".page-1").fadeIn(300)										
										}
										// 助力好友
										var helps = res.helps
										if (helps == null) {
											$(".js-index-helps-box").fadeOut(0)
										}else{
											for(var i in helps){
											  $(".js-index-helps").append('<div class="swiper-slide">好友'+helps[i]+'帮你点亮自如福利</div>')
											}		
											initSwiper()					
										}		
									},
									error: function(data) {
										console.log('请求超时');
									}
								})						
							}
						}
					}
				}
			}		
			// 轮播
			function initSwiper(){
				var mySwiper = new Swiper('.swiper-container-page-1',{
					loop : true,
					autoplay: {
						delay: 2000,
					},
					direction : 'vertical',
				})		
			}	
							
			// 活动规则
			$(".js-ruler").click(function() {
				$(".js-ruler-box").fadeIn(300)
			});
			$(".js-close-ruler").click(function() {
				$(".js-ruler-box").fadeOut(0)
			});
			// 我也要玩
			$(".js-play").click(function(){
				window.location.replace("http://ziru.hongyu.ren/1902/index.php");
			})
			// 助力
			var helpnum
			$(".js-dian-box").click(function(){
				// 坐标编号
				helpnum = $(this).data('id')		
				var that=this	
				$.ajax({
					url: 'https://klingyang.com/api/zirue/assistance',
					type: 'post',
					data: {
						initiator_openid:share_openid,
						// initiator_openid:'obIGZt5Hx_9mJpVhh_FXJYHQbQ1M',
						help_openid:openid,
						// help_openid:'obIGZtzeYC3Q7cBujuLmj4n1xOR8',
						addr_id:helpnum
					},
					success: function(res) {
						if (res.code == 0) {
							//console.log(res.code);
                            $(".js-ts-box").html(res.msg)
                            $(".js-ts-box").fadeIn(300)
                            $(that).parent().find('.d-img').fadeOut(0)
                            $(that).parent().find('.c-img').addClass('active')
                            setTimeout(function(){ $(".js-ts-box").fadeOut(300) },1200);
                            $(window).attr('location',res.url)
							// $('.c-img').addClass('active')						
						}else{
							// layer.msg(res.msg);
							$(".js-ts-box").html(res.msg)
							$(".js-ts-box").fadeIn(300)
							setTimeout(function(){ $(".js-ts-box").fadeOut(300) },1200);
						}
					},
					error: function(data) {
						console.log('请求超时');
					}
				})				
			})
			// 轮播
			function initSwiperShare(){
				var mySwiper = new Swiper('.swiper-container-page-2',{
					loop : true,
					autoplay: {
						delay: 2000,
					},
					direction : 'vertical',
				})		
			}		
			// 返回首页
			$(".js-back-index").click(function(){
				$(".page-3").fadeOut(0)
				$(".page-1").fadeIn(300)
				initSwiper()
			})	
		</script>
	</body>	
</html>
